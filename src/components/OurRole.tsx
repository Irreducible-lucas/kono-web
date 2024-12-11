const OurRole: React.FC = () => {
  return (
    <div className="bg-white mt-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Our Role
      </h2>
      <p className="text-lg mb-4">
        Kono District Council is a statutory authority under the Local
        Government Act 2004 (the Act), which established District Councils to
        coordinate and promote the economic development of the district. This
        Strategic Plan 2025 – 2028, being the first in the district, is
        underpinned by the quest to formalize development interventions in the
        district on behalf of the Central Government, capitalizing on the
        President's Big Five Game Changer to bring development to the doorstep
        of every Sierra Leone.
      </p>

      <h3 className="text-xl font-semibold mb-4">
        Under the Theme: “Kono Matters: Fighting the Historical Injustice in the
        Bread Basket of Sierra Leone”
      </h3>
      <p className="text-lg mb-6">
        We seek to promote sustainable development and growth in the district
        by:
      </p>

      {/* List of strategic goals */}
      <ul className="list-disc pl-6 space-y-4">
        <li className="text-lg">
          <strong>Leveraging comparative advantages</strong> to focus activities
          that create lasting impact.
        </li>
        <li className="text-lg">
          <strong>Maximize gains in the creation of sufficient jobs</strong> for
          the youth and the entire working class by boosting business
          activities.
        </li>
        <li className="text-lg">
          <strong>Drive economic development</strong> in the district to broaden
          our economic base.
        </li>
        <li className="text-lg">
          <strong>Identify and advocate for critical infrastructure</strong>{" "}
          that fixes constraints and provides needed services in our
          communities.
        </li>
        <li className="text-lg">
          <strong>Support business development</strong> and nurture productive
          ambition.
        </li>
        <li className="text-lg">
          <strong>Seek to improve and normalize living standards</strong> within
          the district and beyond.
        </li>
        <li className="text-lg">
          <strong>Build strong, cohesive, and inclusive communities</strong>;
          support a sense of unity and togetherness.
        </li>
        <li className="text-lg">
          <strong>Supporting the economic aspirations of our chiefdoms</strong>.
        </li>
        <li className="text-lg">
          <strong>
            Respect and enhance the district's environmental, arts, culture, and
            heritage assets
          </strong>{" "}
          to attract tourism.
        </li>
        <li className="text-lg">
          <strong>
            Champion education, knowledge, innovation, and creativity
          </strong>{" "}
          that benefit the district.
        </li>
      </ul>
    </div>
  );
};

export default OurRole;
