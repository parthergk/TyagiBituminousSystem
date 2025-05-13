import React from 'react';

const Achievement = () => {
  const achievements = [
    { count: '25k', cont: 'Project Completed' },
    { count: '23k', cont: 'Satisfied Clients' },
    { count: '46+', cont: 'Years Of Experience' },
    { count: '57k', cont: 'Total Branches' }
  ];

  return (
    <div className="w-full bg-primary text-white py-5 px-2">
      <div className="flex flex-wrap gap-4 justify-around">
        {achievements.map((item, index) => (
          <div key={index} className="text-2xl sm:text-4xl md:text-5xl flex flex-col items-center justify-center gap-1 sm:gap-2">
            {item.count}
            <span className="text-sm sm:text-lg md:text-xl">{item.cont}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
