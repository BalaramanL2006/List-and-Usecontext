
import { useContext } from "react";
import { AppContext } from "./AppContext";

function StudentCard() {
    
  const { theme, cohortName} = useContext(AppContext);


  return (
    <div
      className={`card mt-3 p-4 ${
        theme === "dark"
          ? "bg-dark text-white"
          : "bg-light text-dark"
      }`}
    >
      <div className="card-body">
        <h4 className="card-title">Student Card</h4>

        <p className="card-text">Name: Bala</p>

        <p className="card-text">
          Cohort: {cohortName}
        </p>

        <p className="card-text">
          Theme: {theme}
        </p>
      </div>
    </div>
  );
}

export default StudentCard;
