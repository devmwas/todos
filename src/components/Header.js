import React from "react";

function Header({ tasks }) {
  return (
    <div className="flex justify-between text-2xl p-4 bg-sky-700 text-white">
      <div>Todos</div>
      {/* We only show the number of todos when we have at least one todo */}
      <div className="text-green-400">
        {tasks.length == 0 ? "" : tasks.length}
      </div>
    </div>
  );
}

export default Header;
