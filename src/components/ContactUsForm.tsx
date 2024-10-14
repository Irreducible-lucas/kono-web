import styles from "../styles";
import ContactFormInput from "./ContactFormInput";

const ContactUsform = () => {
  return (
    <form action="" className="bg-white w-full p-8 grid gap-8 z-20">
      <ContactFormInput placeholder="Your Name" />
      <ContactFormInput placeholder="Email Address" type="email" />
      <ContactFormInput placeholder="Phone Number" type="tel" />

      <textarea
        className="px-4 py-3 w-full bg-[#f7f7f7]"
        rows={5}
        placeholder="Write Comment"
      ></textarea>
      <div className="flex gap-3">
        <input type="checkbox" name="privacy" id="privacy" />
        <label htmlFor="privacy" className="text-[#849299]">
          I agree to the privacy policy
        </label>
      </div>
      <button
        className={`${styles.flexCenter} gap-2 bg-black py-3 px-6 justify-self-start`}
      >
        <span className="text-white">Submit</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </form>
  );
};

export default ContactUsform;
