import React, { useState } from "react";

function Motivation() {
  const [quote, setQuote] = useState(`"If you want to be happy, 
                                set a goal that commands your thoughts, 
                                liberates your energy and inspires your hopes."`);
  const [author, setAuthor] = useState("— Andrew Carnegie.");

  return (
    <div className="mx-8 p-2 bg-white border border-black">
      <div className="text-sm md:text-lg">{quote}</div>
      <div className="text-sm md:text-lg italic">{author}</div>
    </div>
  );
}

export default Motivation;
