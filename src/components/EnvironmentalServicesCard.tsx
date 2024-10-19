import { Women } from "../assets";
import styles, { layout } from "../styles";

const EnvironmentalServicesCard = () => {
  return (
    <section className={`${layout.section} `}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
          <img src={Women} className="w-full  object-cover rounded-t-lg " />
          <div className="p-4">
            <h3 className={`${styles.paragraph} my-5 font-bold uppercase`}>
              Reforestation
            </h3>
            <p className="my-5 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              tempora maiores aliquid nesciunt ipsam quod ratione ex fugit
              beatae asperiores esse animi, consectetur nostrum. Quaerat
              consectetur deleniti nihil sed asperiores?
            </p>
          </div>
        </div>
        <div>
          <div className="grid gap-5 ">
            <div className="grid grid-cols-2 gap-5">
              <div className="p-5 rounded-lg shadow-lg">
                <h2 className={`${styles.paragraph}  font-bold uppercase`}>
                  Wildlife Restoration
                </h2>
                <p className="my-5 text-slate-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam inventore voluptas dolorum esse veritatis nihil et
                  veniam, tempore voluptates, ratione nesciunt vitae ad ullam
                  perspiciatis. In harum reiciendis dolorem ipsam.
                </p>
              </div>
              <div className="bg-slate-500 p-5 rounded-lg shadow-lg">
                <h2
                  className={`${styles.paragraph} text-center lg:text-left text-white font-bold uppercase`}
                >
                  Sustainable Agriculture
                </h2>
                <p className="my-5 text-slate-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  tempore aut adipisci eos! Quidem quam laboriosam facilis,
                  delectus modi minima ad, corrupti cupiditate blanditiis
                  dolores suscipit voluptate eaque officia tempore?
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg flex ">
              <img
                src={Women}
                className="w-1/3 md:w-1/2 h-full object-cover rounded-s-lg"
              />
              <div className="p-4">
                <h3
                  className={`${styles.paragraph} text-black font-bold uppercase`}
                >
                  Reforestation
                </h3>
                <p className="my-5 text-slate-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  tempora maiores aliquid nesciunt ipsam quod ratione ex fugit
                  beatae asperiores esse animi, consectetur nostrum. Quaerat
                  consectetur deleniti nihil sed asperiores?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalServicesCard;
