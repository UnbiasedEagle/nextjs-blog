import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/me.jpeg'
          alt='Saurabh Image'
          height='300'
          width='300'
        ></Image>
      </div>
      <h1>Hi, I'm Saurabh</h1>
      <p>
        I blog about Web Development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
};

export default Hero;
