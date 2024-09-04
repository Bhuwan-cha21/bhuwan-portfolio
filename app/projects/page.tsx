"use client";
import Head from 'next/head';
import Sidebar from '../components/SideBar';

export default function Projects() {
  const projects = [
    {
      name: "Inventory Management System",
      description: "IMS to meet custom business requirements",
      details: "Gathered business requirements and defined tech stack. Did system design according to business requirements. Implemented system design by using **Node**, **React**, and **Postgres**. Deployed on server using **Docker**.",
    },
    {
      name: "Automatic Order Processing",
      description: "An app to process orders from emails",
      details: "Configured IMAP server to insert email details in database. Implemented **CRON JOB** to process orders regularly. Developed business rules according to need of customer.",
    },
    {
      name: "M&S Education Consultancy",
      description: "A mobile app for personal finance management.",
      details: "Developed dashboard to manage content and implemented api in website to show that",
    },
  ];

  const highlightTechnologies = (text:any) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow ml-64 min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <Head>
          <title>Projects - My Portfolio</title>
          <meta name="description" content="A showcase of my projects." />
        </Head>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">My Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-left text-gray-800">{project.name}</h2>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <p
                  className="mt-4 text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: highlightTechnologies(
                      project.details
                        .split('. ')
                        .map(sentence => `• ${sentence}`)
                        .join('.<br />')
                    ),
                  }}
                ></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
