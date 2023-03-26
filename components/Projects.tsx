import { motion } from 'framer-motion';
type Props = {};
interface Project {
  image: string;
  name: string;
  description: string;
  link?: string;
}
function Projects({}: Props) {
  // const projects = [1, 2, 3, 4, 5];
  const projects: Project[] = [
    {
      name: 'Netflix Clone',
      description:
        'Netflix clone app that has a Log In and Log Out Authentication with Google It has a beutiful Home Screen with all the movies looking just like Netflix. There is also a subscription page where you can see your active monthly subscription. We also use Stripe Payments for the monthly Netflix Subscriptions!',
      image: 'images/netflix-clone-thumbnail.png',
      link: 'https://netflix-clone-five-gray.vercel.app/',
    },
    {
      name: 'Amazon Clone',
      description:
        'Amazon clone app that has a Log In and Log Out Authentication with NextAuth It has a beutiful Home Screen with all the products looking just like Amazon. There is also a checkout page where you can see your Cart. We also use Stripe Payments for the checkout logic',
      image: 'images/amazon-clone-thumbnail.png',
      link: 'https://amazon-clone-pink-nine.vercel.app/',
    },
  ];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, i) => {
          return (
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-44 h-screen'>
              <a href={project.link}>
                <motion.img
                  initial={{
                    y: -300,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  src={project.image}
                  alt={project.name}
                  className='h-52 md:h-72  rounded-lg'
                />
              </a>
              <div className='space-y-2 md:space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-xl md:text-4xl font-semibold text-center'>
                  <span className='underline decoration-[#F7AB0A]/50'>
                    Case Study {i + 1} of {projects.length}:
                  </span>{' '}
                  {project.name}
                </h4>
                <p className='text-sm md:text-base'>{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  );
}

export default Projects;
