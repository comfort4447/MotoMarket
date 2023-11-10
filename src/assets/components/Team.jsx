// Import necessary modules
import React from 'react';
import frsc from '../../assets/Images/Nabila.png';
import health from '../../assets/Images/Damilola.png';
import visit from '../../assets/Images/Alamin.png';
import visit1 from '../../assets/Images/Khalthum.png';

// Sample team members data
const teamMembers = [
  {
    name: 'John Doe',
    title: 'Founder',
    introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: frsc,
  },
  {
    name: 'Jane Smith',
    title: 'Designer',
    introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: health,
  },
  {
    name: 'Bob Johnson',
    title: 'Developer',
    introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: visit,
  },
  {
    name: 'Alice Williams',
    title: 'Marketing',
    introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: visit1,
  },
  {
    name: 'John Doe',
    title: 'Founder',
    introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: frsc,
  },
  {
    name: 'Jane Smith',
    title: 'Designer',
    introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: health,
  },
  {
    name: 'Bob Johnson',
    title: 'Developer',
    introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: visit,
  },
  {
    name: 'Alice Williams',
    title: 'Marketing',
    introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: visit1,
  },
];

// TeamMember component
const TeamMember = ({ name, title, introduction, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg p-4 w-full md:w-1/2 lg:w-48 xl:w-96 m-4 h-auto flex-shrink-0 overflow-hidden team-member">
      <div className="flex flex-row gap-16 items-center">
        <div className="relative rounded-full overflow-hidden mb-4">
          <img
            src={imageUrl}
            alt={name}
            className="w-32 h-32 object-cover rounded-full flex-shrink-0"
            style={{ minWidth: '32px', minHeight: '32px' }}
          />
        </div>
        <div className="text-left">
          <h2 className="text-md font-semibold mb-2 mt-2">{name}</h2>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
      <div className="text-left">
        <p>{introduction}</p>
      </div>
    </div>
  );
};

// Team component
const Team = () => {
  return (
    <div className="container mx-auto py-8 flex flex-nowrap team-container">
      <style>{`
        @keyframes scrollAnimation {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .team-container {
          display: flex;
          animation: scrollAnimation 20s linear infinite;
        }
        .team-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      {teamMembers.map((data, index) => (
        <TeamMember key={index} {...data} />
      ))}
    </div>
  );
};

export default Team;
