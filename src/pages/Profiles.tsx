import React from "react";
import { motion } from "framer-motion";

const Profiles: React.FC = () => {
  interface TeamMember {
    name: string;
    role: string;
    imageSrc: string;
  }

  const ceoData = {
    name: "Darwin Lutz",
    role: "CEO & Founder",
    imageSrc:
      "https://assets.isu.pub/document-structure/230104192902-f0dcd84580882444f6605250879b1add/v1/1263109eba83151fe0277828c012e5e4.jpeg",
    experience: [
      "Over 20 years of experience in the technology industry",
      "Expert in leading and scaling successful startups",
      "Passionate about innovative solutions that drive business growth",
    ],
  };

  const boardMembers: TeamMember[] = [
    {
      name: "John Meyer",
      role: "Board Member",
      imageSrc:
        "https://imageio.forbes.com/specials-images/imageserve/66c3b9c5b69e4e9fcffc9ca6/Successful-mature-businessman-looking-at-camera-with-confidence/960x0.jpg?format=jpg&width=960",
    },
    {
      name: "Linda Rose",
      role: "Board Member",
      imageSrc:
        "https://i0.wp.com/www.steverrobbins.com/wp-content/uploads/ceo-midjourney-office.jpg?resize=1024%2C683&ssl=1",
    },
    {
      name: "Jessica Grant",
      role: "Board Member",
      imageSrc:
        "https://media.istockphoto.com/id/1371934584/photo/portrait-of-a-confident-mature-businesswoman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=NF_IO6IEXY3HifRIhRqP0KDFJFdlFwaMwo3zfOOvKnQ=",
    },
    {
      name: "Michael Lane",
      role: "Board Member",
      imageSrc:
        "https://www.n2growth.com/wp-content/uploads/2019/08/happy-ceo-at-desk.jpg",
    },
    {
      name: "Sarah Schneider",
      role: "Board Member",
      imageSrc:
        "https://www.shutterstock.com/image-photo/portrait-successful-business-woman-suit-600nw-2468636115.jpg",
    },
    {
      name: "David Hubbard",
      role: "Board Member",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoqcSrqBGwgEnQ_0QRmN__wZ1v1gGbDuuKbg&s",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="container flex flex-col items-center mx-auto px-4 py-8">
      <motion.h1
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Meet Our Team
      </motion.h1>

      {/* CEO Section */}
      <motion.div
        className="bg-gray-100 p-6 rounded-lg shadow-md mb-12 flex flex-col md:flex-row"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={ceoData.imageSrc}
          alt={ceoData.name}
          className="w-48 h-48 object-cover rounded-full mb-4 md:mb-0 md:mr-6"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-2">{ceoData.name}</h2>
          <p className="text-gray-600 mb-4">{ceoData.role}</p>
          <div className="flex space-x-4 mb-4">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          <ul className="list-disc list-inside">
            {ceoData.experience.map((item, index) => (
              <motion.li
                key={index}
                className="mb-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Board of Directors Section */}
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Board of Directors
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {boardMembers.map((member, index) => (
          <motion.div
            key={index}
            className={`p-4 rounded-lg shadow-md ${
              index % 2 === 0 ? "bg-blue-50" : "bg-pink-50"
            }`}
            variants={itemVariants}
          >
            <img
              src={member.imageSrc}
              alt={member.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Profiles;
