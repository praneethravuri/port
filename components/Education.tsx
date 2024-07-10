import React from 'react';


const EducationItem = ({ college, duration, location, degree } : {college : string, duration: string, location: string, degree: string}) => {
  return (
    <div className="py-8">
      <h2 className="sm:text-xl text-base font-bold">{college}</h2>
      <p className="sm:text-xl text-base text-gray-500">{duration} - {location}</p>
      <p className="mt-2 sm:text-xl text-base">{degree}</p>
    </div>
  );
};


const Education = () => {
  return (
    <div className="border-b-2 border-white p-2">
      <div className="title">
        <p className="sm:text-4xl text-2xl font-bold text-text-primary">Education</p>
      </div>
      <div className="mt-4">
        <EducationItem
          college="George Mason University"
          duration="2022 - 2024"
          location="Fairfax, USA"
          degree="MS, Computer Science"
        />
        <EducationItem
          college="Gokaraju Rangaraju Institute of Engineering and Technology"
          duration="2018 - 2022"
          location="Hyderabad, India"
          degree="BTech, Computer Science and Engineering"
        />
      </div>
    </div>
  );
};

export default Education;
