import Image from 'next/image';
import Link from 'next/link';
import classes from './post-item.module.css';

const PostItem = (props) => {
  const { post } = props;

  const { summary, slug, date, title, image } = post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className={classes.image}>
            <Image
              layout='responsive'
              src={imagePath}
              alt={title}
              height={200}
              width={300}
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{summary}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
