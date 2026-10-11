
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentDetails = ({ name, track, score }) => {
  return (
    <div>
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <h3 className="card-title">{name}</h3>

          <p className="text-muted mb-2">
            Track: {track}
          </p>

          <p className="mb-0">
              Score:{score}
          </p>
        </div>
      </div>
    </div>
  );
};

function List() {
  const students = [
    {
      id: "s1",
      name: "Arun",
      track: "React",
      score: 85,
    },
    {
      id: "s2",
      name: "Priya",
      track: "React",
      score: 92,
    },
    {
      id: "s3",
      name: "Kumar",
      track: "React",
      score: 76,
    },
  ];

  const Sortlist = [...students].sort(
    (a, b) => b.score - a.score
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        Student Directory
      </h1>

      <div className="row">
        {Sortlist.map((student) => (
          <StudentDetails
            key={student.id}
            name={student.name}
            track={student.track}
            score={student.score}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
