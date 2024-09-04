"use client";
import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Sidebar from './components/SideBar'; // Adjust the import path if necessary

export default function Home() {
  const experiences = [
    {
      company: "Fido It Solutions",
      linkedin: "https://www.linkedin.com/company/fido-it-solution-pvt-ltd/mycompany/",
      startDate: "Jun, 2024",
      endDate: "Present",
      position: "Full Stack Software Developer",
      description: `
        <p>
          Developing and maintaining web applications using <strong>JavaScript</strong>, <strong>Next</strong>, and <strong>Node.js</strong>.<br />
          Collaborating with cross-functional teams to deliver high-quality products.
        </p>
      `
    },
    {
      company: "Procit BV",
      linkedin: "https://www.linkedin.com/company/procit-bv/",
      startDate: "Apr, 2023",
      endDate: "Feb, 2024",
      position: "Junior Backend Developer",
      description: `
        <p>
          Implemented concepts like <strong>Cron Jobs</strong> and <strong>Business Rules</strong> to meet clients' requirements.<br />
          Implemented optimizing and <strong>security techniques</strong> to make projects smoother and more secure.
        </p>
      `
    },
    {
      company: "Procit BV",
      linkedin: "https://www.linkedin.com/company/procit-bv/",
      startDate: "Jan, 2023",
      endDate: "Apr, 2023",
      position: "Intern Backend Developer",
      description: `
        <p>
          Developed basic <strong>APIs</strong> for projects using <strong>Node</strong>, <strong>Express</strong>, and <strong>Postgres</strong>.<br />
          Learned about <strong>industry-level software standards</strong>.
        </p>
      `
    }
  ];

  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex-grow ml-64 min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <Head>
          <title>Home - My Portfolio</title>
          <meta name="description" content="Welcome to my portfolio website." />
        </Head>
        
        <div className="flex justify-center space-x-6 mb-8">
          <Link href="https://www.linkedin.com/in/bhuwan-sharma-633117238/" target="_blank" className="text-blue-500 hover:text-blue-700">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </Link>
          <Link href="https://github.com/Bhuwan-cha21" target="_blank" className="text-gray-800 hover:text-gray-600">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </Link>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{experience.position}</h3>
                  <p className="mt-1 text-gray-500">{experience.company}</p>
                  <p className="text-gray-500">{experience.startDate} - {experience.endDate}</p>
                  <div 
                    className="mt-2 text-gray-600" 
                    dangerouslySetInnerHTML={{ __html: experience.description }}
                  />
                </div>
                <div className="flex justify-center mt-4">
                  <Link href={experience.linkedin} target="_blank" className="text-blue-500 hover:text-blue-700">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="./Bhuwan_Sharma_cv.pdf"
            download
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
