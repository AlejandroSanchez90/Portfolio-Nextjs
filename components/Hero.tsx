import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';
type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['Hi, my name is Alejandro', 'Guy-who-loves-Coffee.tsx', '<ButLovesToCodeMore/>'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        className='relative rounded-full  h-32 w-32 mx-auto object-cover'
        src='/images/alex_avatar.jpg'
        alt='Profile photo of alejandro sanchez'
        width={100}
        height={100}
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500  pb-2 tracking-[15px] -mr-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-2xl lg:text-6xl font-semibold scroll-px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#f7ab0a' />
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          {/* <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link> */}
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
