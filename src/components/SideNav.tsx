import { Logo, ProfilePic } from "../assets";
import styles from "../styles";
import SideNavLinks from "./SideNavLink";

const SideNav = () => {
  return (
    <div className={`bg-white h-full grid grid-rows-[70px_1fr]`}>
      <div className={`flex items-center justify-between  pr-3`}>
        <div className={`flex items-center justify-center `}>
          <img src={Logo} className="w-[100px]" alt="Logo Image" />
          <h1 className={`${styles.heading2}`}>Kono </h1>
        </div>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="14" width="26" height="3" rx="1.5" fill="#9490AE" />
          <rect x="10" y="22" width="26" height="3" rx="1.5" fill="#9490AE" />
          <rect x="10" y="30" width="14" height="3" rx="1.5" fill="#9490AE" />
        </svg>
      </div>
      <div className="overflow-y-scroll py-4">
        {/* <div className="grid place-items-center py-8 gap-1">
          <img
            src={ProfilePic}
            alt="user profile picture"
            className="w-[50px] h-[50px] rounded-full"
          />
          <h2 className="font-nunito">
            Hello <span className="font-bold">Yuke</span>
          </h2>
          <p className="text-darkgrey font-nunito text-sm">yuke123@mail.com</p>
        </div> */}
        <SideNavLinks />
      </div>
    </div>
  );
};

export default SideNav;
