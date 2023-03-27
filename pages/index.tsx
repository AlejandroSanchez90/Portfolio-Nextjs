import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import WorkExperience from '@/components/WorkExperience';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin scroll-smooth'>
      <Head>
        <title>Alejandro's Portfolio (WORK IN PROGRESS)</title>
      </Head>
      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* <section id='experience' className='snap-center'>
        <WorkExperience />
      </section> */}

      <section id='skills' className='snap-center'>
        <Skills />
      </section>

      <section id='projects' className='snap-center'>
        <Projects />
      </section>

      <section id='contact' className='snap-center'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-10 h-10 rounded-full filter stroke-gray-600 hover:stroke-gray-200'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
              />
            </svg>
          </div>
        </footer>
      </Link>
    </div>
  );
}
