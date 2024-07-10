import React from 'react';
import Link from 'next/link';

const Email = () => {
  return (
    <div className="flex items-center justify-center h-full w-full border-b-2 border-white lg:border-none py-2">
      <Link className='sm:text-4xl text-2xl font-bold underline transition duration-300 ease-in-out hover:text-white text-text-primary' href="mailto:pravdevrav@gmail.com">pravdevrav@gmail.com</Link>
    </div>
  );
}

export default Email;
