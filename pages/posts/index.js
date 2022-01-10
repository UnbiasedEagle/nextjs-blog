import { Fragment } from 'react';
import Head from 'next/head';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/post-util';

const AllPostsPage = (props) => {
  const { posts } = props;

  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='A list of programming related posts'
        />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default AllPostsPage;
