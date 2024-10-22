import { ContactUsArt } from "../assets";
import styles from "../styles";
import ContactUsform from "./ContactUsForm";

const ContactUs = () => {
  return (
    <section className="bg-blue-700 pb-[40px] px-4 lg:px-[80px] relative">
      <img
        src={ContactUsArt}
        className="absolute top-0 left-0 z-0 h-full"
        alt=""
      />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="grid place-items-center py-[50px] md:py-0">
          <div className="w-full md:w-[80%] lg:w-[60%] grid gap-8">
            <h2
              className={`${styles.heading1} text-white font-bold font-barlow text-center md:text-left`}
            >
              Get in touch
              <br /> with us.
            </h2>
            {/* <p className="text-white text-center md:text-left">
              We provide a complete service for the sale, purchase.
            </p> */}

            <div className="grid gap-4 z-50">
              <div className="grid grid-cols-[56px_1fr] gap-4">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="56" height="56" fill="#141414" />
                  <path
                    d="M28 28.75C29.6569 28.75 31 27.4069 31 25.75C31 24.0931 29.6569 22.75 28 22.75C26.3431 22.75 25 24.0931 25 25.75C25 27.4069 26.3431 28.75 28 28.75Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35.5 25.75C35.5 32.5 28 37.75 28 37.75C28 37.75 20.5 32.5 20.5 25.75C20.5 23.7609 21.2902 21.8532 22.6967 20.4467C24.1032 19.0402 26.0109 18.25 28 18.25C29.9891 18.25 31.8968 19.0402 33.3033 20.4467C34.7098 21.8532 35.5 23.7609 35.5 25.75V25.75Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="text-white">
                  <h3 className="text-sm font-manrope">VISIT ANYTIME</h3>
                  <p className="font-bold text-base font-manrope">
                    3 Amie-Jay Drive, Reservation Road, Kenema Sierra Leone
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[56px_1fr] gap-4">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="56" height="56" fill="#141414" />
                  <path
                    d="M37 21.25L28 29.5L19 21.25"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 21.25H37V34C37 34.1989 36.921 34.3897 36.7803 34.5303C36.6397 34.671 36.4489 34.75 36.25 34.75H19.75C19.5511 34.75 19.3603 34.671 19.2197 34.5303C19.079 34.3897 19 34.1989 19 34V21.25Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.3633 28L19.231 34.538"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M36.7687 34.5381L29.6362 28"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="text-white">
                  <h3 className="text-sm font-manrope">SEND EMAIL</h3>
                  <a
                    href="mailto:info@sendsierraleone.com"
                    className="font-bold text-base font-manrope"
                  >
                    info@sendsierraleone.com
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-[56px_1fr] gap-4">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="56" height="56" fill="#141414" />
                  <path
                    d="M24.6697 27.7014C25.4476 29.2919 26.7369 30.5753 28.3309 31.346C28.4475 31.4013 28.5765 31.4252 28.7052 31.4155C28.8339 31.4058 28.9579 31.3627 29.0648 31.2905L31.4119 29.7254C31.5157 29.6562 31.6352 29.6139 31.7594 29.6025C31.8837 29.5911 32.0088 29.6109 32.1235 29.66L36.5144 31.5419C36.6636 31.6052 36.7881 31.7154 36.8693 31.8556C36.9504 31.9959 36.9838 32.1588 36.9643 32.3197C36.8255 33.4057 36.2956 34.4039 35.4739 35.1273C34.6521 35.8508 33.5948 36.2499 32.5 36.25C29.1185 36.25 25.8755 34.9067 23.4844 32.5156C21.0933 30.1245 19.75 26.8815 19.75 23.5C19.7501 22.4051 20.1492 21.3479 20.8726 20.5261C21.5961 19.7044 22.5943 19.1745 23.6803 19.0357C23.8412 19.0162 24.004 19.0496 24.1443 19.1307C24.2846 19.2118 24.3947 19.3364 24.4581 19.4855L26.3416 23.8803C26.3903 23.994 26.4101 24.118 26.3994 24.2412C26.3886 24.3644 26.3475 24.483 26.2798 24.5865L24.7201 26.9696C24.6491 27.0768 24.6072 27.2006 24.5983 27.3288C24.5895 27.4571 24.614 27.5855 24.6697 27.7014V27.7014Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="text-white">
                  <h3 className="text-sm font-manrope">HAVE A QUESTION ?</h3>
                  <a
                    href="tel:+23272806853"
                    className="font-bold text-base font-manrope"
                  >
                    +232 7820 6853
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <ContactUsform />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
