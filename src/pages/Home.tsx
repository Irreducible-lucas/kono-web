import {
  ContactUs,
  FeaturedDevelopment,
  HeroSection,
  News,
  Testimonial,
  Welcome,
} from "../components";
import LandMarkImages from "../components/LandMarkImages";

const Home = () => {
  return (
    <div className="bg-white ">
      <div className="bg-white">
        <HeroSection />
        <LandMarkImages />
        <Welcome />
        <FeaturedDevelopment />
        <News />
        <Testimonial />
        <ContactUs />
      </div>
    </div>
  );
};
export default Home;