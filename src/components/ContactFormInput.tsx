const ContactFormInput = ({
  placeholder,
  type = "text",
  style = "px-4 py-3 w-full bg-[#f7f7f7]",
}: {
  placeholder: string;
  type?: string;
  style?: string;
}) => {
  return <input type={type} placeholder={placeholder} className={style} />;
};

export default ContactFormInput;
