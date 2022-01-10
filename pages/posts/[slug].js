import { Fragment } from 'react';
import Head from 'next/head';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, postFiles } from '../../lib/post-util';

const PostDetailPage = (props) => {
  const { post } = props;
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name='description' content={post.summary} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
};

export function getStaticPaths() {
  const paths = postFiles.map((postFile) => {
    return {
      params: { slug: postFile.replace(/\.md$/, '') },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps(context) {
  const { slug } = context.params;

  const post = getPostData(slug);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}

export default PostDetailPage;
