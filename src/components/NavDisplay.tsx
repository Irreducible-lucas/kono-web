import { useState, useEffect } from "react";

const NavDisplay = () => {
  const text = "Hello world"; // Correct text
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        currentIndex++; // Increment index after using it
      } else {
        clearInterval(interval); // Stop when finished
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="border-y-[.5px] border-slate-300 p-3 hidden lg:flex">
      <span className="transition-all ease-in duration-500">
        {displayedText}
      </span>
    </div>
  );
};

export default NavDisplay;
