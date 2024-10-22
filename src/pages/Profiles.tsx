import React, { useState } from "react";
import {
  Crown,
  Star,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Globe,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const Profiles = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const profiles = [
    {
      id: 1,
      name: "Chief Kwame Adinkra",
      title: "Paramount Chief",
      region: "Ashanti Region",
      yearsOfService: "25",
      achievements: [
        "Led major cultural preservation initiatives",
        "Established community development fund",
        "Modernized traditional council proceedings",
      ],
      biography: `Chief Kwame Adinkra has served as Paramount Chief for 25 years, 
      bringing wisdom and innovation to the traditional leadership role. His reign 
      has seen significant developments in community infrastructure and cultural preservation.`,
      expertise: [
        "Traditional Law",
        "Cultural Preservation",
        "Community Development",
      ],
      contact: {
        office: "Traditional Council Headquarters",
        phone: "+233 XX XXX XXXX",
        email: "chief.adinkra@council.gov",
      },
      imageUrl: "/api/placeholder/400/500",
    },
    {
      id: 2,
      name: "Elder Kofi Mensah",
      title: "Chief of Protocols",
      region: "Eastern Region",
      yearsOfService: "15",
      achievements: [
        "Digitized traditional records",
        "Organized international cultural exchanges",
        "Implemented modern ceremony protocols",
      ],
      biography: `Elder Kofi Mensah brings a unique blend of traditional wisdom and 
      modern efficiency to his role as Chief of Protocols. His innovative approaches 
      have streamlined ceremonial processes while preserving their sacred nature.`,
      expertise: [
        "Ceremonial Protocols",
        "Digital Archives",
        "International Relations",
      ],
      contact: {
        office: "Protocol Division",
        phone: "+233 XX XXX XXXX",
        email: "k.mensah@council.gov",
      },
      imageUrl: "/api/placeholder/400/500",
    },
    {
      id: 3,
      name: "Nana Yaa Asantewaa II",
      title: "Queen Mother",
      region: "Central Region",
      yearsOfService: "20",
      achievements: [
        "Established women's empowerment programs",
        "Created youth mentorship initiative",
        "Led traditional education reforms",
      ],
      biography: `Nana Yaa Asantewaa II continues the legacy of her namesake through 
      powerful advocacy for women's rights while maintaining traditional values. Her 
      leadership has transformed the role of women in traditional governance.`,
      expertise: [
        "Women's Affairs",
        "Youth Development",
        "Traditional Education",
      ],
      contact: {
        office: "Queen Mother's Secretariat",
        phone: "+233 XX XXX XXXX",
        email: "queenmother@council.gov",
      },
      imageUrl: "/api/placeholder/400/500",
    },
  ];

  const galleryImages = [
    {
      url: "/api/placeholder/800/600",
      caption: "Annual Durbar Celebration",
    },
    {
      url: "/api/placeholder/800/600",
      caption: "Traditional Council Meeting",
    },
    {
      url: "/api/placeholder/800/600",
      caption: "Cultural Heritage Festival",
    },
    {
      url: "/api/placeholder/800/600",
      caption: "Youth Traditional Dance Performance",
    },
    {
      url: "/api/placeholder/800/600",
      caption: "Chiefs' Assembly 2024",
    },
    {
      url: "/api/placeholder/800/600",
      caption: "Community Development Project Launch",
    },
  ];

  const ProfileCard = ({ profile }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-64">
        <img
          src={profile.imageUrl}
          alt={profile.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900 p-4">
          <h3 className="text-xl font-bold text-white">{profile.name}</h3>
          <p className="text-purple-200">{profile.title}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <MapPin className="h-5 w-5 text-purple-600 mr-2" />
          <span className="text-gray-600">{profile.region}</span>
        </div>
        <div className="flex items-center mb-4">
          <Calendar className="h-5 w-5 text-purple-600 mr-2" />
          <span className="text-gray-600">
            {profile.yearsOfService} Years of Service
          </span>
        </div>
        <button
          onClick={() => setSelectedProfile(profile)}
          className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          View Full Profile
        </button>
      </div>
    </div>
  );

  const ProfileModal = ({ profile, onClose }) => {
    if (!profile) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div>
              <img
                src={profile.imageUrl}
                alt={profile.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {profile.name}
              </h2>
              <p className="text-xl text-purple-600 mb-4">{profile.title}</p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Biography
                  </h3>
                  <p className="text-gray-600">{profile.biography}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Achievements
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    {profile.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-600">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Contact
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="text-gray-600">
                        {profile.contact.office}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="text-gray-600">
                        {profile.contact.phone}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="text-gray-600">
                        {profile.contact.email}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Gallery = () => (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Ceremonial Gallery
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Capturing our rich traditions and ceremonial moments
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer group"
              onClick={() => {
                setCurrentImageIndex(index);
                setIsGalleryOpen(true);
              }}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded-lg flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center p-4">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const GalleryModal = () => {
    if (!isGalleryOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
        <button
          onClick={() => setIsGalleryOpen(false)}
          className="absolute top-4 right-4 text-white"
        >
          <X className="h-6 w-6" />
        </button>
        <button
          onClick={() =>
            setCurrentImageIndex((prev) =>
              prev === 0 ? galleryImages.length - 1 : prev - 1
            )
          }
          className="absolute left-4 text-white hover:text-gray-300"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button
          onClick={() =>
            setCurrentImageIndex((prev) =>
              prev === galleryImages.length - 1 ? 0 : prev + 1
            )
          }
          className="absolute right-4 text-white hover:text-gray-300"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
        <div className="max-w-4xl w-full p-4">
          <img
            src={galleryImages[currentImageIndex].url}
            alt={galleryImages[currentImageIndex].caption}
            className="w-full h-[70vh] object-contain"
          />
          <p className="text-white text-center mt-4 text-lg">
            {galleryImages[currentImageIndex].caption}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profiles Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-purple-100 px-4 py-1 mb-4">
              <Crown className="mr-2 h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">
                Leadership Profiles
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Our Traditional Leaders
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Meet the distinguished leaders preserving our heritage and guiding
              our future
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <Gallery />

      {/* Modals */}
      {selectedProfile && (
        <ProfileModal
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}
      <GalleryModal />
    </div>
  );
};

export default Profiles;
