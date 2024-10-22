import React from "react";
import {
  Globe2,
  Target,
  Users,
  Award,
  BarChart3,
  Shield,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const Vision = () => {
  const stats = [
    { label: "Global Customers", value: "10,000+" },
    { label: "Countries Served", value: "150+" },
    { label: "Team Members", value: "5,000+" },
    { label: "Customer Satisfaction", value: "98%" },
  ];

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

  const features = [
    "ISO 27001 Certified",
    "24/7 Enterprise Support",
    "Custom Solution Architecture",
    "Dedicated Success Manager",
    "API-First Approach",
    "Global Infrastructure",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Empowering Global Enterprise Innovation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Transforming businesses through intelligent solutions, security,
              and unmatched support. Your trusted partner in digital
              transformation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-gray-100 transition-all">
                Get Started
              </button>
              <button className="flex items-center text-white hover:text-gray-300 transition-all">
                Learn more <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
                We envision a future where every enterprise can harness the full
                potential of technology to drive innovation and sustainable
                growth.
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

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 mb-4">
              <Award className="mr-2 h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">
                Enterprise Features
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              World-Class Enterprise Capabilities
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 rounded-lg border border-gray-200 bg-white p-4"
              >
                <CheckCircle2 className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join thousands of leading organizations that trust us with their
            digital future.
          </p>
          <button className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-gray-100 transition-all">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vision;
