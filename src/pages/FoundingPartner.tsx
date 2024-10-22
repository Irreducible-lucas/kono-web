import { irishaid, sendserial } from "../assets";
import styles from "../style";

const FoundingPartner = () => (
  <div className="  items-center ">
    <p className={`${styles.heading2} text-secondaryBlue `}>
      Founding Partners
    </p>
    <div className="flex gap-4 mt-[-20px]">
      <img
        src={sendserial}
        alt="client_logo"
        className="w-[150px] object-contain"
      />
      <img
        src={irishaid}
        alt="client_logo"
        className="  w-[150px] object-contain"
      />
    </div>
  </div>
);

export default FoundingPartner;
