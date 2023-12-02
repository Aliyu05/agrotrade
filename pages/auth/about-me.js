import React from 'react';
import { DiCss3, DiHtml5, DiJavascript1, DiReact } from 'react-icons/di';

const paragraphStyle = {
  marginBottom: '0.5em',
};

export default function AboutMe() {
  return (
  
    <div className="p-4 sm:p-8">
    <div className="bg-orange-300 p-4 sm:p-8 rounded-lg shadow-lg">
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        <div className="flex-shrink-0 sm:mr-8">
          <img
            src=""
            alt="Your Name"
            className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full shadow-md"
          />
        </div>

        <div className="mt-4 sm:mt-0">
          <header className="text-center sm:text-left">
            <u>
            <h1 className="text-2xl sm:text-4xl font-bold">Aliyu Shehu</h1>
            </u>
            <p>Web Developer</p>
          </header>
            <section className="bg-opacity-75 rounded-lg mt-1 sm:mt-2 p-1 sm:p-2">
              <h2 className="text-sm sm:text-base font-bold mb-1">About Me</h2>
              <p className="mb-1">
                Hi, I'm a passionate web developer, turning ideas into reality through code. Always eager to learn new technologies.
              </p>
              <p style={paragraphStyle}>
                My journey in web development began with HTML and CSS. I take pride in crafting clean and meaningful HTML, ensuring accessibility and a solid foundation for projects.
              </p>
     
              <p className="flex text-white"  style={paragraphStyle}>
                <DiCss3 className="text-2xl mr-2 mb-4"/>
                CSS, with its powerful styling capabilities, allows me to create visually stunning and user-friendly interfaces. 
              </p>
              <p className="flex text-white"  style={paragraphStyle}>
                <DiHtml5 className="text-3xl mr-2 mb-4"/>
                HTML, or HyperText Markup Language, is the cornerstone of every web page. It provides the structure, defining the various elements that shape the content. 
              </p>

              <p className="flex text-white"  style={paragraphStyle}>
                <DiJavascript1 className="text-3xl mr-2 mb-4"/>
                JavaScript is the wizard behind real-time interactions on the web. It validates forms, updates content on the fly, and crafts interfaces that respond to users intuitively.
              </p>

              <p className="flex text-white">
                <DiReact className="text-4xl mr-2 mb-4"/>
                In my toolkit, Next.js stands out as a powerful framework for building React applications. It enables the creation of dynamic and performant web applications with ease.
              </p>
            </section>
          </div>

       
        </div>
      </div>
    </div>
  );
};