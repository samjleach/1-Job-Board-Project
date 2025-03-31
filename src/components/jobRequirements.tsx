import React from "react";

interface Requirements {
  requirements: string[];
}

function JobRequirements({ requirements }: Requirements) {
  const listOfRequirements = () => {
    return requirements.map((item: string, index: number) => {
      return <li key={index}>{item}</li>;
    });
  };

  return (
    <div>
      <ul>{listOfRequirements()}</ul>
    </div>
  );
}

export default JobRequirements;
