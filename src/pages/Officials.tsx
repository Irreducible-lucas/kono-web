import {
  Crown,
  LandPlot,
  Building,
  Shield,
  Scale,
  Clock,
  Book,
  Calendar,
} from "lucide-react";

const Officials = () => {
  const chiefdomStats = [
    { label: "Traditional Territories", value: "28" },
    { label: "Council Members", value: "156" },
    { label: "Years of Heritage", value: "500+" },
    { label: "Community Projects", value: "45" },
  ];

  const officials = [
    {
      title: "Paramount Chief",
      name: "Chief Kwame Adinkra",
      role: "Supreme Traditional Authority",
      responsibilities: [
        "Cultural Preservation",
        "Community Leadership",
        "Dispute Resolution",
      ],
    },
    {
      title: "Chief Minister",
      name: "Hon. Sarah Mensah",
      role: "Government Representative",
      responsibilities: [
        "Policy Implementation",
        "Resource Management",
        "Development Planning",
      ],
    },
    {
      title: "Council Chairman",
      name: "Elder John Osei",
      role: "Advisory Council Head",
      responsibilities: [
        "Council Coordination",
        "Traditional Consultation",
        "Community Relations",
      ],
    },
  ];

  const culturalEvents = [
    {
      name: "Annual Heritage Festival",
      date: "August 15-21, 2024",
      description:
        "Celebrating our rich cultural heritage with traditional ceremonies and festivities.",
    },
    {
      name: "Chiefs Assembly",
      date: "September 5, 2024",
      description:
        "Bi-annual gathering of all regional chiefs for policy discussions and cultural exchange.",
    },
    {
      name: "Community Development Forum",
      date: "October 12, 2024",
      description:
        "Strategic planning session for sustainable community development initiatives.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Traditional Pattern Background */}
      <div className="relative bg-gradient-to-r from-purple-900 to-indigo-900 py-24">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAzMG0tMjAgMGEyMCwyMCAwIDEsMSA0MCAwYTIwLDIwIDAgMSwxIC00MCAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=')]"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Crown className="h-16 w-16 text-yellow-400" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Traditional Authority & Modern Governance
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Preserving our heritage while embracing progress through unified
              leadership and sustainable development.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {chiefdomStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-900">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Officials Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-purple-100 px-4 py-1 mb-4">
              <Crown className="mr-2 h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">
                Leadership
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Official Leadership
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {officials.map((official, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-8"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-purple-900">
                    {official.title}
                  </h3>
                  <p className="text-lg text-gray-700 mt-2">{official.name}</p>
                  <p className="text-sm text-gray-500">{official.role}</p>
                </div>
                <div className="space-y-3">
                  {official.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-center text-gray-600">
                      <Shield className="h-4 w-4 mr-2 text-purple-600" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services & Functions */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Functions</h2>
            <p className="mt-4 text-lg text-gray-600">
              Bridging traditional wisdom with modern governance
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                icon: <Scale className="h-8 w-8" />,
                title: "Traditional Justice",
              },
              {
                icon: <LandPlot className="h-8 w-8" />,
                title: "Land Management",
              },
              {
                icon: <Book className="h-8 w-8" />,
                title: "Cultural Preservation",
              },
              {
                icon: <Building className="h-8 w-8" />,
                title: "Development Planning",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg border border-gray-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cultural Events Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-purple-100 px-4 py-1 mb-4">
              <Calendar className="mr-2 h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">
                Upcoming Events
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Cultural Calendar
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {culturalEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <h3 className="text-xl font-semibold text-purple-900 mb-2">
                  {event.name}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-purple-900 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Connect with the Traditional Council
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            For inquiries, appointments, and official matters
          </p>
          <div className="flex justify-center space-x-4">
            <button className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-purple-900 shadow-sm hover:bg-gray-100 transition-all">
              Schedule Appointment
            </button>
            <button className="rounded-md bg-purple-700 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-purple-800 transition-all">
              Contact Office
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Officials;
