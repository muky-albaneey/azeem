// components/FourPillars.tsx
import Image from 'next/image';

const pillars = [
  {
    title: 'Develop Better Technologies',
    description:
      'Develop, identify, and test technologies and innovations to improve soil health and plant nutrition.',
    image: '/images/lightbulb.png',
  },
  {
    title: 'Catalyze Farm Productivity',
    description:
      'Increase farm productivity, profitability, and sustainability of target smallholder agricultural systems.',
    image: '/images/chart.png',
  },
  {
    title: 'Strengthen Markets',
    description:
      'Strengthen input and output market systems to scale technologies and improve livelihoods, environmental outcomes, and climate resilience.',
    image: '/images/market.png',
  },
  {
    title: 'Enable Impact',
    description:
      'Enable impact by improving policies, strengthening capacity, and sharing knowledge.',
    image: '/images/impact.png',
  },
];

export default function FourPillars() {
  return (
    <div className="px-4 py-12 sm:px-8 lg:px-24 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {pillars.map((pillar, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src={pillar.image}
                alt={pillar.title}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {pillar.title}
            </h3>
            <p className="text-gray-600 text-base max-w-md mx-auto">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
