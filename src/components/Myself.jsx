"use client";
import Link from "next/link";

const MySelf = () => {
  return (
    <section className="bg-gray-100 text-gray-900 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600">
            Rakibul Islam - Software Engineer
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            Passionate about building modern web applications using JavaScript,
            Node.js, React, and Next.js.
          </p>
        </header>

        {/* About Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            Hi, I'm Rakibul Islam, a dedicated software engineer with a focus on
            frontend development. I specialize in creating scalable and
            user-friendly applications using React and Next.js, backed by
            powerful Node.js APIs.
          </p>
        </div>

        {/* Skills Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 gap-4">
            {[
              "JavaScript",
              "Node.js",
              "React",
              "Next.js",
              "Tailwind CSS",
              "HTML",
              "CSS",
              "REST APIs",
            ].map((skill, index) => (
              <li
                key={index}
                className="text-blue-600 bg-blue-100 rounded-md py-2 px-4 text-center"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Projects Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Portfolio Website",
                description:
                  "A modern portfolio built with Next.js and Tailwind CSS.",
                link: "#",
              },
              {
                name: "E-Commerce App",
                description:
                  "A scalable e-commerce platform using React and Node.js.",
                link: "#",
              },
              {
                name: "Blog CMS",
                description:
                  "A headless CMS for blogs using Next.js and MongoDB.",
                link: "#",
              },
            ].map((project, index) => (
              <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-4">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  className="text-white bg-blue-600 hover:bg-blue-700 rounded-md py-2 px-4"
                >
                  View Project
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <footer className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700 mb-4">
            Feel free to reach out via email or connect with me on LinkedIn.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="mailto:rakibshakib74@gmail.com"
              className="text-white bg-blue-600 hover:bg-blue-700 rounded-md py-2 px-4"
            >
              Email Me
            </Link>
            <Link
              href="https://bd.linkedin.com/in/rakibshakib/en"
              className="text-white bg-blue-600 hover:bg-blue-700 rounded-md py-2 px-4"
            >
              LinkedIn
            </Link>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default MySelf;
