import React from 'react';
import frsc from '../../assets/Images/frsc.png';
import health from '../../assets/Images/health.png';
import visit from '../../assets/Images/visit.png';

const cardsData = [
  {
    image: frsc,
    date: 'August 23, 2021',
    header: 'Motohub, NIA, and FRSC Launch',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, mattis dignissim purus cursus sollicitudin feugiat elementum quam suscipit. Adipiscing libero sit tellus facilisi.',
    text: 'Read full article',
    link: '/blog'
  },
  {
    image: health,
    date: 'August 23, 2021',
    header: 'Haima Health begins operations with MotoFit solution',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, mattis dignissim purus cursus sollicitudin feugiat elementum quam suscipit. Adipiscing libero sit tellus facilisi.',
    text: 'Read full article',
    link: '/blogDet'
  },
  {
    image: visit,
    date: 'August 23, 2021',
    header: 'Best places to visit in Nigeria and how to visit them',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, mattis dignissim purus cursus sollicitudin feugiat elementum quam suscipit. Adipiscing libero sit tellus facilisi.',
    text: 'Read full article',
    link: '/blog3'
  },
];

const Card = ({ image, date, header, details, text, link }) => {
  const secondaryTextColor100 = 'text-secondary-500';
  return (
    <div className="bg-white rounded-lg p-4 md:w-1/2 lg:w-96 m-4 h-auto">
      <div className="relative rounded-lg overflow-hidden">
        <img src={image} alt={header} className="w-full h-48 object-cover rounded-lg" />
      </div>
      <p className="text-sm text-gray-500 mt-4 text-left">{date}</p>
      <h2 className="text-md font-semibold mb-2 mt-4 text-left">{header}</h2>
      <p className="text-left">{details}</p>
      <p className={`text-sm mt-4 text-left cursor-pointer ${secondaryTextColor100}`}><a href={link}>{text}</a></p>
      {/* <Link to="/blog">
        <p className={`text-sm mt-4 text-left cursor-pointer ${secondaryTextColor100}`}></p>
      </Link> */}
    </div>
  );
};

const Cards = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap justify-center">
        {cardsData.map((data, index) => (
          <Card key={index} {...data} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
