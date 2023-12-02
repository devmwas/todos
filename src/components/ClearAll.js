import { Button } from "@mui/material";
import React from "react";

function ClearAll({ setTasks, setShowCongrats }) {
  return (
    <div className="mx-8 mb-1 mt-4">
      <Button
        variant="contained"
        color="primary"
        sx={{ width: "100%" }}
        onClick={() => {
          setTasks([]);
          setShowCongrats(true);
        }}
      >
        Clear All Tasks
      </Button>
    </div>
  );
}

export default ClearAll;
