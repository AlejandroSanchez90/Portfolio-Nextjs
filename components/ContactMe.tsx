import { motion } from 'framer-motion';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${formData.email}?subject=${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
      <div className='mt-20 md:mt-0 flex flex-col space-y-10'>
        <h4 className='text-xl md:text-4xl font-semibold text-center'>
          I have got just what you need.{' '}
          <span className='underline decoration-[#F7AB0A]/50'>Lets Talk</span>
        </h4>
        <div className='space-y-5 md:space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-lg md:text-2xl'>+1 (346)298-4367</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-lg md:text-2xl'>contact@alejandrosanchez.dev</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-lg md:text-2xl'>Houston/Miami</p>
          </div>
        </div>
        <form className='flex flex-col space-y-2 w-fit mx-auto' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col space-y-2 space-x-0 md:space-x-2 md:space-y-0 md:flex-row'>
            <input {...register('name')} className='contactInput' placeholder='Name' type='text' />
            <input
              {...register('email')}
              className='contactInput'
              placeholder='Email'
              type='email'
            />
          </div>
          <input
            {...register('subject')}
            className='contactInput'
            placeholder='Subject'
            type='text'
          />
          <textarea
            {...register('message')}
            className='contactInput resize-none'
            placeholder='Message'
          />
          <button
            type='submit'
            className='bg-[#f7ab0a] py-2 md:py-5 md:px-10 rounded-md text-black font-bold text-lg'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
