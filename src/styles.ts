export const styles = {
  boxWidth: "lg:max-w-[1900px] w-full",

  heroHeading: "font-manrope text-3xl font-bold",

  heading1: "font-barlow lg:text-5xl text-3xl font-bold",

  heading2: "font-manrope text-2xl font-bold",

  heading2Barlow: "font-barlow text-2xl font-bold",

  heading3: "font-barlow text-xl font-bold",

  heading3Manrope: "font-manrope text-lg lg:text-xl font-bold",

  heading4: "font-barlow text-lg font-bold",
  heading5: "leading-normal font-semibold tracking-wide font-nunito",

  paragraph: "font-manrope text-lg",

  paragraph2: "font-manrope text-base",

  paragraph3: "font-manrope text-sm",
  paragraph4: "font-nunito font-normal text-sm",

  paragraph3Barlow: "font-barlow text-sm",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  textSize: "text-[14px] sm:text-md lg:text-lg font-manrope",
  clipPathSquare:
    "[clip-path:polygon(20%_0%,_100%_0,_100%_80%,_80%_100%,_0_100%,_0%_20%)]",
  clipPathRect:
    "[clip-path:polygon(15%_0%,_100%_0,_100%_75%,_85%_100%,_0_100%,_0%_25%)]",
};

export const layout = {
  section: `mx-2 lg:mx-10 py-[40px] px-5 lg:px-6 lg:py-3 my-5 `,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter}  relative`,

  sectionInfo: `flex-[1] ${styles.flexStart} flex-col`,
};

export default styles;
