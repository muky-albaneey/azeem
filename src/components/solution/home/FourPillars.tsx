// components/FourPillars.tsx
import Image from 'next/image';

const pillars = [
  {
    title: 'Develop Infrastructure',
    description:
      'Housing, transportation, energy, digital, and industrial projects across Africa.',
    image: '/images/lightbulb.png',
  },
  {
    title: 'Drive Economic Growth',
    description:
      ' Enable trade, industry, and local enterprise through strategic development.',
    image: '/images/chart.png',
  },
  {
    title: 'Empower Communities',
    description:
      'Improve quality of life through job creation, access, and social impact.',
    image: '/images/market.png',
  },
  {
    title: 'Promote Innovation',
    description:
      'Introduce modern technologies and sustainable models that shape Africa’s future.',
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
