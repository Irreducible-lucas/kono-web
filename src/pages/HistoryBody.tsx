import { useState } from "react";
import { Rebecca } from "../assets";
import styles, { layout } from "../style";
import YellowDivider from "./YellowDivider";

const Body1 = () => (
  <div>
    <div id="product" className={`${layout.section} mb-0 p-0`}>
      <div className={`flex-[1.2]   ${layout.sectionInfo}`}>
        <p className={`${styles.heading2} text-secondaryBlue mb-4`}>
          About Our Culture and Tradition
        </p>

        <YellowDivider />

        <p
          className={`${styles.paragraph} text-justify mb-3 font-extralight  text-[14px]  sm:text-[16px]`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          placeat doloribus possimus minima mollitia saepe sint deleniti vero
          consequatur nulla quidem debitis, ipsa ratione quia iste quibusdam
          alias odit cupiditate.
        </p>
        {/* hidden on small screen */}
        <p
          className={`hidden md:flex ${styles.paragraph} text-justify mb-3 font-extralight  text-[14px]  sm:text-[16px]`}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          esse ad obcaecati repellendus incidunt nemo expedita eaque aliquid
          voluptas odio totam accusantium tempora exercitationem quos sapiente
          eos voluptates, perspiciatis consectetur.
        </p>

        <p
          className={`hidden md:flex ${styles.paragraph} text-justify mb-3 font-extralight  text-[14px]  sm:text-[16px]`}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
          laboriosam sint ex, enim, veniam iure vitae, adipisci voluptatibus
          beatae quisquam libero voluptatum voluptate. A sapiente facere non
          totam. Placeat, fuga.
        </p>
        {/* hidden on small screen */}
      </div>

      <div className={`${layout.sectionImg}  `}>
        <img src={Rebecca} alt="billing" className="w-[80%] " />
      </div>
    </div>
    {/* show on  small screen hide on big screen */}
    <p
      className={` md:hidden ${styles.paragraph} text-justify mb-3 font-extralight  text-[14px]  sm:text-[16px] sm:mt-[-45px]`}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quam
      quis nihil ullam suscipit dignissimos facilis corrupti esse ut, distinctio
      earum laudantium nostrum necessitatibus mollitia minus nisi dolorem
      excepturi debitis.
    </p>
    <p
      className={` md:hidden ${styles.paragraph} text-justify mb-3 font-extralight  text-[14px]  sm:text-[16px]`}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse
      consequuntur, praesentium aperiam molestias quas quod atque minus, neque
      illum alias culpa eius sunt sapiente eum nobis voluptatibus. Fugit,
      cupiditate.
    </p>
    {/* show on  small screen hide on big screen */}
    <p
      className={`${styles.paragraph} text-justify mb-3 font-extralight  text-[14px]  sm:text-[16px] mt-3 md:mt-[-45px]`}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deserunt
      eius ducimus beatae sed consectetur harum tempora atque nostrum facilis
      fuga deleniti accusantium explicabo adipisci, ut earum! Quia, est neque!
    </p>
    <p
      className={`${styles.paragraph} text-justify mb-3 font-extralight  text-[14px]  sm:text-[16px] `}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quis
      impedit voluptatibus obcaecati! Fuga, in accusantium! Atque quas cum,
      facere, fugiat culpa quae laboriosam perferendis obcaecati corporis fugit
      expedita possimus.
    </p>
  </div>
);

const Body2 = () => (
  <div>
    <div id="product" className={`${layout.section} mb-0 p-0`}>
      <div className={`flex-[1.4]   ${layout.sectionInfo}`}>
        <p className={`${styles.heading2} text-secondaryBlue mb-4`}>
          Creation of Kono District
        </p>

        <YellowDivider />

        <p
          className={`${styles.paragraph} text-justify mb-3 font-extralight  text-[14px]  sm:text-[16px]`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          eveniet consequatur ab placeat ratione earum minima ipsa, atque
          dignissimos quas, nulla nobis voluptates quaerat animi? Doloribus
          placeat ipsam consequuntur harum!
        </p>
        {/* hidden on small screen */}
        <p
          className={`hidden md:flex ${styles.paragraph} text-justify mb-3 font-extralight  text-[14px]  sm:text-[16px]`}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ipsam
          saepe dolorum accusamus deleniti. Nesciunt dignissimos, necessitatibus
          quia quaerat sint quos velit eos atque, voluptatibus enim, in earum
          sequi tempore!
        </p>

        <p
          className={`hidden md:flex ${styles.paragraph} text-justify mb-3 font-extralight  text-[14px]  sm:text-[16px]`}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          aperiam dolorum magnam eum architecto consequatur, praesentium dolorem
          libero quasi rem similique laboriosam assumenda tenetur nam
          repellendus, eligendi nihil quibusdam ratione!
        </p>
        {/* hidden on small screen */}
      </div>

      <div className={`${layout.sectionImg}  `}>
        <img src={Rebecca} alt="billing" className="w-[80%] " />
      </div>
    </div>
    {/* show on  small screen hide on big screen */}
    <p
      className={` md:hidden ${styles.paragraph} text-justify mb-3 font-extralight  text-[14px]  sm:text-[16px] sm:mt-[-45px]`}
    >
      With a membership of over 1,000 young women from diverse backgrounds,
      including those with disabilities, Kono District is an inclusive and
      supportive community that equips young women with the necessary knowledge,
      tools, and networks to succeed as leaders, entrepreneurs, and change
      agents.
    </p>
    <p
      className={` md:hidden ${styles.paragraph} text-justify mb-3 font-extralight  text-[14px]  sm:text-[16px]`}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quisquam
      tempore saepe enim, deserunt recusandae quis repudiandae minus velit
      doloremque perspiciatis ducimus aut, perferendis exercitationem sapiente
      laboriosam. Necessitatibus, quod voluptates.
    </p>
    {/* show on  small screen hide on big screen */}

    <p
      className={`${styles.paragraph} text-justify mb-3 font-extralight  text-[14px]  sm:text-[16px] md:mt-[-45px] `}
    >
      Kono District approach is centered around education and capacity building,
      networking and movement building, advocacy and lobbying, mentorship and
      coaching, resource development, social action and accountability,
      experience sharing and exchange, and partnerships for growth. The network
      seeks to raise awareness on critical issues affecting young women such as
      gender-based violence, early marriage, and access to education. Through
      capacity-building training, YWiGN enhances its members' socio-economic and
      political competency and builds support and allies among men and
      politicians to promote young ones leadership and political participation.
    </p>
  </div>
);

const HistoryBody = () => {
  const [option] = useState(true);

  return (
    <section>
      {/* to change */}
      {option ? <Body1 /> : <Body2 />}
      {/* to change */}
      <div className="flex justify-between mb-16 items-center">
        <div className="hidden sm:flex h-10 gap-4"></div>
      </div>
    </section>
  );
};

export default HistoryBody;
