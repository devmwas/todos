import React from "react";

function Congratulations() {
  return (
    <div className="text-md md:text-xl p-4 md:p-6 mt-6 bg-sky-700 text-white text-center">
      <div className="font-bold text-green-400">CONGRATULATIONS!</div>
      <div className="pt-1 md:pt-2">You have completed all your Todos.</div>
    </div>
  );
}

export default Congratulations;
