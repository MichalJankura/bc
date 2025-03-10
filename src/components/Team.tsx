import React from 'react';

import config from '../config/index.json';

const Team = () => {
  const { team } = config;

  return (
    <section className="bg-yellow-400" id="team">
      {/* Container */}
      <div
        className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20"
        id="team"
      >
        {/* Title */}
        <h1 className="text-center text-3xl font-bold md:text-5xl pb-20">
          Predsedníctvo
        </h1>
        {/* Content */}
        <div className="text-2xl grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:justify-items-stretch md:grid-cols-3 md:gap-4 lg:gap-6">
          {team.members.map((member) => (
            <div
              key={member.name}
              className="mx-auto flex w-full flex-col items-center gap-4 py-8 text-center md:px-8 md:py-4 lg:px-12"
            >
              <img
                src={member.image}
                alt={member.name}
                className="mb-4 inline-block h-40 w-40 rounded-full object-cover transform transition-transform duration-300 hover:scale-125 hover:shadow-lg hover:rotate-12"
              />
              <p className="font-bold">{member.name}</p>
              <p className="text-center text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
