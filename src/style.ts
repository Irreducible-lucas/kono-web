const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold md:text-[33px] text-[25px] md:leading-[38.5px] leading-[30px]   w-full",

  heading3:
    "font-poppins font-semibold md:text-[28px] text-[20px] md:leading-[38.5px] leading-[25px]   w-full",

  paragraph:
    "font-poppins text-[15px]  md:text-[20px] leading-[30.8px] md:leading-[35.8px]",

  paragraph2:
    "font-poppins text-[13px]  md:text-[16px] leading-[30.8px] md:leading-[35.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex sm:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} sm:mr-10  ml-0 md:mt-0 mt-10 sm:mt-0 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
