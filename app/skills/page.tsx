"use client";
import Head from 'next/head';
import Sidebar from '../components/SideBar';

export default function Skills() {

    const skills = [
        { name: 'JavaScript', description: 'Experienced in ES6+, functional programming, and asynchronous JavaScript.', percentage: 90 },
        { name: 'Node.js', description: 'Proficient in building backend applications using Node.js and Express.', percentage: 85 },
        { name: 'React', description: 'Skilled in building interactive UIs with React and state management using Redux.', percentage: 80 },
        { name: 'Next.js', description: 'Familiar with server-side rendering and static site generation using the Next.js framework, ideal for SEO ', percentage: 75 },
        { name: 'Tailwind CSS', description: 'Experienced in designing and developing responsive web interfaces using Tailwind CSS .', percentage: 70 },
        { name: 'Docker', description: 'Knowledgeable in containerizing applications using Docker for development and production.', percentage: 60 },
    ];

    return (
        <div className="flex">

            <Sidebar />
            <div className="flex-grow ml-64 min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <Head>
                    <title>Skills - My Portfolio</title>
                    <meta name="description" content="A list of my professional skills." />
                </Head>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">My Skills</h1>
                    {/* Grid layout for skills */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-bold text-gray-800">{skill.name}</h2>
                                <p className="mt-2 text-gray-600">{skill.description}</p>
                                <div className="relative pt-1 mt-4">
                                    <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-gray-200">
                                        <div
                                            style={{ width: `${skill.percentage}%` }}
                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                        >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
