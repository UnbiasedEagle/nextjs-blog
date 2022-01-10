import PostHeader from './post-header';
import classes from './post-content.module.css';
import dynamic from 'next/dynamic';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
const ReactMarkdown = dynamic(() => import('react-markdown'), { ssr: false });
import Image from 'next/image';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import docco from 'react-syntax-highlighter/dist/cjs/styles/hljs/docco';

SyntaxHighlighter.registerLanguage('js', js);

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown
        components={{
          p: ({ node, children }) => {
            if (node.children[0].tagName === 'img') {
              const image = node.children[0];
              return (
                <div className={classes.image}>
                  <Image
                    src={`${image.properties.src}`}
                    alt={image.properties.alt}
                    width='600'
                    height='300'
                  />
                </div>
              );
            }
            // Return default child if it's not an image
            return <p>{children}</p>;
          },
          code: ({ node, children }) => {
            console.log(node);
            if (node.tagName === 'code') {
              const codeElement = node.children[0];

              return (
                <SyntaxHighlighter style={docco} language='js'>
                  {codeElement.value}
                </SyntaxHighlighter>
              );
            }
            // Return default child if it's not an image
            return <p>{children}</p>;
          },
        }}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
