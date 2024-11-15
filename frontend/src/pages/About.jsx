
import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();

  // Texts for various sections
  const professionalSummary = "Successfully developed and deployed numerous full-stack applications, demonstrating strong problem-solving skills and a keen eye for detail. Collaborated with cross-functional teams to deliver high-quality software solutions within tight deadlines. Continuously learning and adapting to emerging technologies and industry trends to stay ahead in the fast-evolving tech landscape.";
  const technicalExpertise = "Front-End: Adept in modern JavaScript frameworks and libraries such as React.js, Angular, and Vue.js. Skilled in HTML5, CSS3, and responsive design principles to create intuitive and visually appealing interfaces. Back-End: Proficient in server-side technologies including Node.js, Express.js, and Django. Experienced with database management using SQL and NoSQL databases like MySQL, PostgreSQL, and MongoDB. DevOps: Knowledgeable in containerization and orchestration tools such as Docker and Kubernetes. Familiar with continuous integration and deployment (CI/CD) pipelines. Cloud Services: Experience with cloud platforms like AWS, Azure, and Google Cloud, enabling scalable and reliable application deployment.";
  const personalInterests = "Beyond his professional achievements, Hemanta is a big fan of cricket and holds immense admiration for King Kohli. His favorite person and biggest inspiration is his twin brother, Ankush. Their friendly rivalry and deep bond have significantly shaped Hemanta’s journey. Ankush is not only a great competitor but also a steadfast friend, constantly motivating Hemanta to strive for excellence.";


  // Function to render words with hover effect
  const renderWords = (text) => {
    const words = text.split(' ');
    return (
      <p className="leading-relaxed">
        {words.map((word, index) => (
          <span
            key={index}
            className="hover:scale-110  hover:text-fuchsia-500 transition-transform duration-200 inline-block mx-1"
          >
            {word}
          </span>
        ))}
      </p>
    );
  };

  return (
    <div className="container mx-auto my-12 p-8 space-y-12 bg-gradient-to-r from-blue-50 to-blue-100 shadow-2xl rounded-lg max-w-4xl">
      {/* Profile Section */}
      <div className="flex flex-col items-center space-y-6 text-center">
        <img
          src={profile?.photo?.url}
          alt="User Profile"
          className="w-32 h-32 rounded-full shadow-lg border-4 border-blue-300"
        />
        <h1 className="text-3xl font-extrabold text-blue-900">{profile?.name || "User"}</h1>
        <p className="text-lg leading-relaxed text-gray-700 max-w-md">
          A proficient full-stack developer with a passion for creating
          dynamic, responsive, and user-friendly web applications. {profile?.name} excels in crafting seamless digital experiences.
        </p>
      </div>

      <div className="space-y-3">
        <marquee className="font-semibold text-blue-900 opacity-50 w-[50%] text-4xl p-2">Technical Expertise</marquee>
        {renderWords(technicalExpertise)}
      </div>

      <div className="space-y-3">
        <marquee className="font-semibold text-blue-900 opacity-50 w-[50%] text-4xl p-2">Professional Highlights</marquee>
        {renderWords(professionalSummary)}
      </div>

      <div className="space-y-3">
        <marquee className="font-semibold text-blue-900 opacity-50 w-[50%] text-4xl">Personal Interests</marquee>
        {renderWords(personalInterests)}
      </div>
    </div>
  );
}

export default About;
