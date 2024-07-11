import React from 'react';
import Link from 'next/link';

const EmailBlog = () => {
  return (
    <div className="flex items-center justify-center h-full w-full border-b-2 border-white lg:border-none">
      <div className="blog-link border-r-2 border-white h-full flex justify-center items-center w-1/3">
        <Link href="/blog">
          <span className="inline-block transform -rotate-90 font-bold sm:text-4xl text-2xl hover:text-text-primary transition duration-300 ease-in-out">BLOG</span>
        </Link>
      </div>
      <div className="email flex justify-center items-center w-2/3">
        <Link className='sm:text-4xl text-2xl font-bold underline transition duration-300 ease-in-out hover:text-white text-text-primary' href="mailto:pravdevrav@gmail.com">pravdevrav@gmail.com</Link>
      </div>
    </div>
  );
}

export default EmailBlog;