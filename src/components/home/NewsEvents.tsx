// import { Link } from 'lucide-react';
import Image from 'next/image';

export default function NewsEvents() {
const news = [
  {
    type: 'Project Launch',
    date: 'May 8, 2025',
    title: 'Azmico Construction Unveils Smart Housing Project in Abuja',
    image: '/a_pro1.jpeg',
  },
  {
    type: 'Azimco News',
    date: 'May 1, 2025',
    title: 'Expanding Infrastructure in Northern Nigeria: New Roads and Bridges Underway',
    image: '/a_pro2.jpeg',
  },
  {
    type: 'Project Recap',
    date: 'April 28, 2025',
    title: 'Urban Renewal Initiative Breaks Ground in Lagos Mainland',
    image: '/transform.jpg',
  },
];


  return (
    <section className="px-4 py-12 md:px-20 bg-[url('/bg-watercolor.jpg')] bg-no-repeat bg-cover">
      <h2 className="text-4xl md:text-5xl font-bold mb-10">News and Events</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {news.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <div className="h-56 w-full relative">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute top-0 left-0 h-full w-1 bg-[#D4ADFC]" />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">{item.type}</span> | {item.date}
              </p>
              <h3 className="mt-2 font-bold text-lg text-gray-900 leading-snug">
                {item.title}
              </h3>
              <div className="mt-4 text-[#D4ADFC] font-semibold flex items-center gap-2">
                <span className="text-xl">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h5 className='text-center underline'>      <a href='/news-events'>View all News & Events</a> </h5>
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 rotate-180 bg-[#1D267D] text-white px-3 py-1 font-bold text-sm cursor-pointer">
        Share
      </div>
    </section>
  );
}
