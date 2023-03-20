import React from "react";

function TeamCard({name, role, image, github, linkedin}) {
  return (
    <div className="mt-4 card w-96 bg-base-100 shadow-2xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-accent">{role}</p>
        <div className="card-actions">
          <a className="text-4xl" href={linkedin} target="_blank"><i class="fa-brands fa-linkedin"></i></a>
          <a className="text-4xl" href={github} target="_blank"><i class="fa-brands fa-github"></i></a>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
