import styles from "../styles";

const OurFocus = () => {
  return (
    <div className="bg-gray-50 text-gray-800 ">
      {/* Focus Section */}
      <section className="py-12 px-8">
        <div className="container mx-auto">
          <h2 className={`${styles.heading1} text-center mb-8`}>Our Focus</h2>
          <p className={`${styles.paragraph2} text-center mb-10 `}>
            We focus on the people of Kono, its economy, its culture, and its
            natural environment, ensuring alignment with Millennium Development
            Goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Focus Cards */}
            {[
              "Cottage industries",
              "Premium agricultural production",
              "Mining",
              "Tourism",
              "Healthcare",
              "Education and training",
              "Creative industry (music and film)",
              "Aquaculture",
              "Retail and hospitality",
            ].map((focus, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{focus}</h3>
                <p className="text-gray-600">
                  Exploring the potential of {focus.toLowerCase()} to create
                  sustainable opportunities and drive innovation in Kono
                  District.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priorities Section */}
      <section className="bg-gray-100 py-12 px-8">
        <div className="container mx-auto">
          <h2 className={`${styles.heading1} mb-8 text-center`}>
            Our Priorities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* District Liveability */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">
                District Liveability
              </h3>
              <p className="text-gray-700 mb-4">
                Making Kono a great place to live and work by improving
                community, social, and cultural infrastructure.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Enhancing wellbeing for residents</li>
                <li>Supporting healthy and happy communities</li>
                <li>Advocating for tailored solutions to local challenges</li>
              </ul>
            </div>

            {/* Economic Development */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">
                Economic Development
              </h3>
              <p className="text-gray-700 mb-4">
                Promoting economic diversification, growth, and innovation to
                create stability and sustainable jobs.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Leveraging resources and existing strengths</li>
                <li>Supporting emerging industries</li>
                <li>Expanding creative opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default OurFocus;
