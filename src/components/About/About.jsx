import React from 'react'
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Brief Introduction about me!
                        </h2>
                        <p className="mt-6 text-gray-600">
                        I’m a passionate software developer with a strong foundation in various technologies proficient in C, C++, Python, HTML, CSS, and JavaScript, 
                        and experienced with frameworks like React.js for building dynamic web applications and projects and well-versed in Data Structures, Algorithms, Object-Oriented Programming (OOPS), and Database Management Systems (DBMS) concepts and also comfortable using tools like Git, Jira, Docker, Gitlab, and Microsoft Office.
                         Let’s connect and explore exciting opportunities together!</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

