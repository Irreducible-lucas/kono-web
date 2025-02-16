import {
  Calendar,
  MapPin,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { useState } from "react";

interface Contact {
  office: string;
  phone: string;
  email: string;
}

interface Profile {
  id: number;
  name: string;
  title: string;
  region: string;
  yearsOfService: string;
  achievements: string[];
  biography: string;
  expertise: string[];
  contact: Contact;
  imageUrl: string;
}

interface GalleryImage {
  url: string;
  caption: string;
}

const Profiles = () => {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const profiles: Profile[] = [
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

  const galleryImages: GalleryImage[] = [
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

  const ProfileCard = ({ profile }: { profile: Profile }) => (
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

  const ProfileModal = ({
    profile,
    onClose,
  }: {
    profile: Profile | null;
    onClose: () => void;
  }) => {
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
              <button
                onClick={() => setIsGalleryOpen(true)}
                className="w-full mt-6 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const GalleryModal = ({
    images,
    onClose,
  }: {
    images: GalleryImage[];
    onClose: () => void;
  }) => {
    if (!isGalleryOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="relative">
            <img
              src={images[currentImageIndex].url}
              alt={images[currentImageIndex].caption}
              className="w-full h-full object-cover rounded-t-xl"
            />
            <p className="absolute bottom-4 left-4 text-white bg-black bg-opacity-60 p-2 text-lg rounded-lg">
              {images[currentImageIndex].caption}
            </p>
          </div>
          <div className="flex justify-between p-4">
            <button
              onClick={() => {
                setCurrentImageIndex(
                  (prevIndex) => (prevIndex - 1 + images.length) % images.length
                );
              }}
              className="text-purple-600 hover:text-purple-700"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={() => {
                setCurrentImageIndex(
                  (prevIndex) => (prevIndex + 1) % images.length
                );
              }}
              className="text-purple-600 hover:text-purple-700"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-8 space-y-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>

      <ProfileModal
        profile={selectedProfile}
        onClose={() => setSelectedProfile(null)}
      />
      <GalleryModal
        images={galleryImages}
        onClose={() => setIsGalleryOpen(false)}
      />
    </div>
  );
};

export default Profiles;
