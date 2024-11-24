import { AboutCarousal } from "../components";
import { motion } from "framer-motion";
import { Globe2, Target, Users, BarChart3, Shield } from "lucide-react";
import styles from "../styles";
import { hero2 } from "../assets";

const Vision = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Trust & Security",
      description:
        "Enterprise-grade security and compliance to protect your business.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Customer First",
      description: "We put our customers at the heart of everything we do.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Innovation",
      description:
        "Continuously pushing boundaries to deliver cutting-edge solutions.",
    },
  ];

  return (
    <motion.div
      id="home"
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className="bg-white w-full overflow-hidden"
    >
      {/* carousal */}
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <AboutCarousal
            image={hero2}
            title={"Vision and Mission"}
            content={
              "Discover Kono District Council's vision for a prosperous future and its mission to empower communities through sustainable development and innovative initiatives."
            }
          />
        </div>
      </div>
      <div className="min-h-screen bg-white">
        {/* Vision & Mission Section */}
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1">
                  <Target className="mr-2 h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">
                    Our Vision
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  To be the world's most trusted enterprise solutions provider
                </h2>
                <p className="text-lg text-gray-600">
                  We envision a future where every enterprise can harness the
                  full potential of technology to drive innovation and
                  sustainable growth.
                </p>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1">
                  <Globe2 className="mr-2 h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">
                    Our Mission
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Delivering excellence through innovation and partnership
                </h2>
                <p className="text-lg text-gray-600">
                  We are committed to providing cutting-edge solutions that
                  empower businesses to overcome challenges and seize
                  opportunities in the digital age.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Our Core Values
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 p-8 text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                    {value.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Vision;
