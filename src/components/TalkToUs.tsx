import { DepartmentContacts } from "../constants";
import styles, { layout } from "../styles";
import ContactFormInput from "./ContactFormInput";

const TalkToUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section
      className={`${layout.section} bg-[url("/src/assets/report-on-projects-art.png")] bg-no-repeat bg-white bg-cover `}
    >
      <div className="grid gap-4">
        <div>
          <h2
            className={`${styles.heading1} md:leading-relaxed lg:leading-[70px] text-center text-black uppercase`}
          >
            TALK TO US
          </h2>
        </div>
        <p
          className={`w-full text-center mx-auto text-black ${styles.paragraph2}`}
        >
          Explore all our amazing project Images & Videos.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5 ">
        <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-8">
          <h1 className="font-barlow text-black text-4xl font-extrabold mb-5">
            Get in Touch with Us
          </h1>
          <p className="text-gray-600 text-base mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quos ipsum a itaque quae illo velit ex cumque magni quam, maiores
            officia possimus dicta quo molestias debitis autem. Assumenda,
            tempora.
          </p>

          <h6 className="text-xl font-bold text-gray-800 mt-8 mb-4">
            Departmental Contact
          </h6>

          <div>
            {DepartmentContacts.map((contact) => (
              <div
                key={contact.id}
                className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50"
              >
                <h6 className="text-lg font-bold text-blue-600">
                  • {contact.department}
                </h6>
                <ul className="text-gray-600 mt-2 space-y-1">
                  <li>
                    <span className="font-medium">Phone:</span>{" "}
                    <span>{contact.phone}</span>
                  </li>
                  <li>
                    <span className="font-medium">Email:</span>{" "}
                    <span>{contact.email}</span>
                  </li>
                  <li>
                    <span className="font-medium">Office Hours:</span> Mon-Fri,
                    8AM - 5PM
                  </li>
                </ul>
              </div>
            ))}
            {/* Social Media */}

            <div className="flex items-center justify-center gap-4">
              <div className="bg-[#FFFFFF1A] h-[30px] w-[30px] flex justify-center items-center rounded-full">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9983 2.13599C15.3984 2.39715 14.7652 2.56037 14.0987 2.65831C14.7652 2.26657 15.2984 1.64633 15.5317 0.895504C14.8985 1.25459 14.1987 1.51575 13.4321 1.67897C12.8323 1.05873 11.9658 0.666992 11.0326 0.666992C9.23297 0.666992 7.7666 2.10335 7.7666 3.86615C7.7666 4.12731 7.79992 4.35582 7.86658 4.58433C5.16711 4.45375 2.73426 3.18062 1.10125 1.22195C0.834633 1.71162 0.668 2.23393 0.668 2.82153C0.668 3.93144 1.23455 4.91078 2.13438 5.49838C1.60115 5.46573 1.10125 5.33516 0.634673 5.10664V5.13929C0.634673 6.70622 1.76778 8.012 3.26749 8.3058C3.00087 8.37109 2.70093 8.40374 2.40099 8.40374C2.20103 8.40374 1.96774 8.37109 1.76778 8.33845C2.20103 9.61158 3.40079 10.5583 4.83384 10.5583C3.70073 11.407 2.30101 11.9293 0.76798 11.9293C0.501366 11.9293 0.234752 11.9293 0.00146484 11.8967C1.46784 12.8107 3.16751 13.3331 5.0338 13.3331C11.0659 13.3331 14.3653 8.43638 14.3653 4.1926C14.3653 4.06202 14.3653 3.8988 14.3653 3.76822C14.9985 3.34384 15.5651 2.78888 15.9983 2.13599Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="bg-[#FFFFFF1A] h-[30px] w-[30px] flex justify-center items-center rounded-full">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.14965 17.5369V9.74909H0.474121V6.71402H3.14965V4.47575C3.14965 1.87826 4.76928 0.463867 7.13485 0.463867C8.26798 0.463867 9.24186 0.546505 9.52567 0.583441V3.29798L7.88502 3.29871C6.59848 3.29871 6.34938 3.89753 6.34938 4.77627V6.71402H9.41764L9.01814 9.74909H6.34937V17.5369H3.14965Z"
                    fill="black"
                  />
                </svg>
              </div>

              <div className="bg-[#FFFFFF1A] h-[30px] w-[30px] flex justify-center items-center rounded-full">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99984 2.21173C12.5892 2.21173 12.8959 2.22123 13.9188 2.26692C14.5338 2.27429 15.143 2.38491 15.7199 2.59397C16.1382 2.752 16.5181 2.99408 16.8351 3.30463C17.1522 3.61518 17.3993 3.98731 17.5607 4.39708C17.7741 4.96213 17.887 5.55884 17.8945 6.16128C17.9407 7.16325 17.9509 7.46362 17.9509 10C17.9509 12.5364 17.9412 12.8367 17.8945 13.8387C17.887 14.4412 17.7741 15.0379 17.5607 15.6029C17.3993 16.0127 17.1522 16.3848 16.8351 16.6954C16.5181 17.0059 16.1382 17.248 15.7199 17.406C15.143 17.6151 14.5338 17.7257 13.9188 17.7331C12.8963 17.7783 12.5897 17.7883 9.99984 17.7883C7.40999 17.7883 7.10335 17.7788 6.08089 17.7331C5.46586 17.7257 4.85668 17.6151 4.27982 17.406C3.86149 17.248 3.48158 17.0059 3.16454 16.6954C2.8475 16.3848 2.60036 16.0127 2.43903 15.6029C2.2256 15.0379 2.11267 14.4412 2.10514 13.8387C2.05896 12.8367 2.0488 12.5364 2.0488 10C2.0488 7.46362 2.0585 7.16325 2.10514 6.16128C2.11267 5.55884 2.2256 4.96213 2.43903 4.39708C2.60036 3.98731 2.8475 3.61518 3.16454 3.30463C3.48158 2.99408 3.86149 2.752 4.27982 2.59397C4.85668 2.38491 5.46586 2.27429 6.08089 2.26692C7.10381 2.22168 7.41045 2.21173 9.99984 2.21173ZM9.99984 0.5C7.36751 0.5 7.03592 0.510857 6.00146 0.556997C5.19654 0.57268 4.40017 0.721964 3.64621 0.9985C2.99944 1.23719 2.41363 1.61125 1.92965 2.09457C1.43579 2.56881 1.05359 3.14295 0.809753 3.77689C0.527437 4.51541 0.375033 5.29548 0.359023 6.08392C0.312841 7.09631 0.301758 7.4211 0.301758 9.99955C0.301758 12.578 0.312841 12.9028 0.359946 13.9161C0.375956 14.7045 0.528361 15.4846 0.810676 16.2231C1.05424 16.857 1.43612 17.4311 1.92965 17.9054C2.4139 18.3889 3.00003 18.7629 3.64714 19.0015C4.40109 19.278 5.19747 19.4273 6.00238 19.443C7.03685 19.4882 7.36704 19.5 10.0008 19.5C12.6345 19.5 12.9647 19.4891 13.9991 19.443C14.8041 19.4273 15.6004 19.278 16.3544 19.0015C16.9984 18.757 17.5833 18.3835 18.0715 17.9049C18.5598 17.4263 18.9407 16.8532 19.1899 16.2222C19.4722 15.4837 19.6247 14.7036 19.6407 13.9152C19.6868 12.9028 19.6979 12.578 19.6979 9.99955C19.6979 7.4211 19.6868 7.09631 19.6397 6.08302C19.6237 5.29458 19.4713 4.51451 19.189 3.77599C18.9454 3.14213 18.5636 2.56799 18.07 2.09366C17.5858 1.61024 16.9997 1.23617 16.3526 0.997595C15.5986 0.721059 14.8022 0.571775 13.9973 0.556093C12.9638 0.510857 12.6322 0.5 9.99984 0.5Z"
                    fill="black"
                  />
                  <path
                    d="M9.99875 5.12109C9.01376 5.12109 8.05089 5.4072 7.2319 5.94323C6.41292 6.47925 5.77459 7.24113 5.39765 8.13252C5.02071 9.0239 4.92209 10.0047 5.11425 10.951C5.30641 11.8973 5.78073 12.7665 6.47722 13.4488C7.17372 14.131 8.0611 14.5956 9.02717 14.7838C9.99323 14.9721 10.9946 14.8755 11.9046 14.5062C12.8146 14.137 13.5924 13.5118 14.1396 12.7095C14.6869 11.9073 14.979 10.9642 14.979 9.99934C14.979 8.70555 14.4543 7.46475 13.5203 6.5499C12.5863 5.63505 11.3196 5.12109 9.99875 5.12109ZM9.99875 13.1659C9.35939 13.1659 8.73438 12.9801 8.20276 12.6322C7.67115 12.2843 7.25681 11.7897 7.01213 11.2111C6.76746 10.6325 6.70344 9.99583 6.82817 9.38158C6.95291 8.76734 7.26079 8.20312 7.71289 7.76027C8.16499 7.31743 8.741 7.01585 9.36809 6.89367C9.99517 6.77148 10.6452 6.83419 11.2359 7.07386C11.8266 7.31352 12.3314 7.71939 12.6866 8.24012C13.0419 8.76085 13.2314 9.37306 13.2314 9.99934C13.2314 10.8392 12.8909 11.6446 12.2846 12.2384C11.6784 12.8322 10.8561 13.1659 9.99875 13.1659Z"
                    fill="black"
                  />
                  <path
                    d="M15.1765 6.06895C15.8192 6.06895 16.3402 5.55858 16.3402 4.92901C16.3402 4.29943 15.8192 3.78906 15.1765 3.78906C14.5337 3.78906 14.0127 4.29943 14.0127 4.92901C14.0127 5.55858 14.5337 6.06895 15.1765 6.06895Z"
                    fill="black"
                  />
                </svg>
              </div>

              <div className="bg-[#FFFFFF1A] h-[30px] w-[30px] flex justify-center items-center rounded-full">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.9999 0.133789C4.85903 0.133789 0.723145 4.18501 0.723145 9.22064C0.723145 13.234 3.39021 16.6416 7.06226 17.8531C7.5261 17.9289 7.68071 17.6638 7.68071 17.3988C7.68071 17.1716 7.68071 16.6037 7.68071 15.8465C5.09095 16.4144 4.54981 14.6349 4.54981 14.6349C4.12462 13.5748 3.50617 13.3097 3.50617 13.3097C2.6558 12.7418 3.58348 12.7418 3.58348 12.7418C4.51116 12.8175 5.01365 13.6883 5.01365 13.6883C5.82536 15.0892 7.17822 14.6728 7.71937 14.4456C7.79667 13.8398 8.02859 13.4612 8.29917 13.234C6.25055 13.0068 4.08597 12.2117 4.08597 8.72844C4.08597 7.74403 4.43385 6.91107 5.0523 6.30528C4.97499 6.0781 4.62711 5.16942 5.12961 3.88212C5.12961 3.88212 5.90267 3.65494 7.68071 4.82866C8.41512 4.63935 9.22684 4.52577 9.9999 4.52577C10.773 4.52577 11.5847 4.63935 12.3191 4.82866C14.0971 3.65494 14.8702 3.88212 14.8702 3.88212C15.3727 5.13156 15.0635 6.04024 14.9475 6.30528C15.5273 6.94893 15.9138 7.74403 15.9138 8.72844C15.9138 12.2117 13.7493 12.969 11.662 13.1961C12.0099 13.4612 12.2804 14.0291 12.2804 14.8621C12.2804 16.0736 12.2804 17.0581 12.2804 17.3609C12.2804 17.5881 12.4351 17.891 12.9375 17.8153C16.6096 16.6416 19.2767 13.234 19.2767 9.22064C19.2767 4.18501 15.1408 0.133789 9.9999 0.133789Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-graybg p-4 md:p-6 lg:p-[50px] shadow-lg rounded-lg">
          <h3 className="font-barlow text-black text-3xl font-bold mb-6">
            Contact Us
          </h3>
          <form onSubmit={handleSubmit} className="w-full grid gap-5">
            <ContactFormInput
              placeholder="Your Name"
              style="px-4 py-3 rounded-md w-full bg-white border border-[#E3E3E3]"
            />
            <ContactFormInput
              placeholder="Email Address"
              type="email"
              style="px-4 py-3 rounded-md w-full bg-white border border-[#E3E3E3]"
            />
            <ContactFormInput
              placeholder="Phone Number"
              type="tel"
              style="px-4 py-3 rounded-md w-full bg-white border border-[#E3E3E3]"
            />
            <textarea
              className="px-4 py-3 rounded-md w-full bg-white border border-[#E3E3E3]"
              rows={5}
              placeholder="Write Comment"
              aria-label="Write your comment"
            ></textarea>
            <div className="flex gap-3">
              <input type="checkbox" name="privacy" id="privacy" />
              <label htmlFor="privacy" className="text-[#849299]">
                I agree to the privacy policy
              </label>
            </div>
            <button
              type="submit"
              className="bg-gray-500 py-3 rounded-md px-8 text-white font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Give us a call

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 my-10 lg:my-20">
        <div className="border-t pt-4">
          <h2 className="text-2xl font-semibold mb-2">Give us a call</h2>
          <a
            href="tel:+448000373792"
            className=" text-blue-600 font-medium mb-2"
          >
            +44 0800 373792
          </a>
        </div>
        <div className="border-t pt-4">
          <h2 className="text-2xl font-semibold mb-2">Visit Us</h2>
          <p className="text-gray-600 mb-4">
            4 Reservation Road, Kenema, Sierra Leone
          </p>
        </div>
        <div className="border-t pt-4">
          <h2 className="text-2xl font-semibold mb-2">Working Hours</h2>
          <p className="text-gray-600 mb-4">
            Mondays - Fridays (8:00am - 4:00pm)
          </p>
        </div>
        
      </div> */}
    </section>
  );
};

export default TalkToUs;
