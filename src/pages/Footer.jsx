import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-20 backdrop-blur-md text-white p-10 rounded-t-[75px] mt-20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* First Column */}
          <div className="w-full sm:w-1/4 p-4">
            <img src="path/to/logo.png" alt="Logo" className="w-20 mb-4" />
            <p className="text-sm leading-relaxed">
            hello i am a footer  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
            </p>
          </div>
          {/* Empty Columns */}
          <div className="w-full sm:w-1/4 p-4"></div>
          <div className="w-full sm:w-1/4 p-4"></div>
          <div className="w-full sm:w-1/4 p-4"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
