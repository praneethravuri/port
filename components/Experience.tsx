import React from 'react';


const ExperienceItem = ({ company, duration, location, description }) => {
  return (
    <div className="py-8">
      <h2 className="sm:text-xl text-base font-bold">{company}</h2>
      <p className="sm:text-xl text-base text-gray-500">{duration} - {location}</p>
      <p className="mt-2 sm:text-xl text-base">{description}</p>
    </div>
  );
};


const Experience = () => {
  return (
    <div className="border-b-2 border-white p-2">
      <div className="title">
        <p className="sm:text-4xl text-2xl font-bold">Experience</p>
      </div>
      <div className="mt-4">
        <ExperienceItem
          company="Software Development Intern - Cognizant"
          duration="Jan 2022 - Jun 2022"
          location="Hyderabad, India"
          description="Developed an internal chat application for employees"
        />
        <ExperienceItem
          company="Frontend Intern - Stige"
          duration="Aug 2021 - Oct 2021"
          location="Hyderabad, India"
          description="Led a team of developers to build a scalable e-commerce platform. Collaborated with designers and product managers to deliver high-quality software."
        />
      </div>
    </div>
  );
};

export default Experience;
