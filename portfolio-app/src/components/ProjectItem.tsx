import React from "react";

export default function ProjectItem({ image, name } : {image: string, name: string;}) {
  return (
    <div className="projectItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h2> {name} </h2>
    </div>
  );
}
