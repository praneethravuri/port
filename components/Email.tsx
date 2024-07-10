import React from 'react';
import Link from 'next/link';

const Email = () => {
  return (
    <div className="flex items-center justify-center h-full w-full border-b-2 border-white lg:border-none py-2">
      <p className='sm:text-4xl text-2xl font-bold'>CONTACT ME @ <span className='underline transition duration-300 ease-in-out hover:text-text-primary'><Link href="mailto:pravdevrav@gmail.com">pravdevrav@gmail.com</Link></span></p>
    </div>
  );
}

export default Email;
