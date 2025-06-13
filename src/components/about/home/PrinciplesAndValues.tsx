import Image from 'next/image';

export default function PrinciplesAndValues() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Principles and Values Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Principles and Values</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Throughout the world, at IFDC offices, and with all our staff and project beneficiaries, IFDC embraces principles and values that are woven thoroughly into everything we do.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Principles of Engagement</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Science-backed Innovation</li>
                <li>International Stewardship</li>
                <li>Locally Driven Solutions</li>
                <li>Gender and Youth Equity</li>
                <li>Private Sector Engagement</li>
                <li>Impact-driven Approaches</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Organizational Values</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Inclusivity and Improvement</li>
                <li>Transparency and Accountability</li>
                <li>Collaboration and Cooperation</li>
                <li>Efficiency and Effectiveness</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Initiatives Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Initiatives</h2>
          <div className="flex flex-wrap md:items-center gap-8">
            <div className="flex-1">
              <p className="text-gray-700 text-lg mb-4">
                IFDC partners with international research institutions, governments, and non-governmental organizations to reduce hunger, improve soil processes, and promote food nutrition security.
              </p>
              <a href="#" className="text-yellow-500 font-medium underline">A Range of Partners</a>
            </div>
            <Image src="/a_pro1.jpeg" alt="Initiatives" width={400} height={300} className="rounded" />
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <div className="flex flex-wrap md:items-center gap-8">
            <Image src="/a_pro2.jpeg" alt="Team" width={300} height={200} className="rounded" />
            <div className="flex-1">
              <p className="text-gray-700 text-lg mb-4">
                Our team of scientists, agricultural experts, economists, and more make achieving our vision possible.
              </p>
              <a href="#" className="text-yellow-500 font-medium underline">Meet Our Team</a>
            </div>
          </div>
        </div>

        {/* Board Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Board</h2>
          <div className="flex flex-wrap md:items-center gap-8">
            <div className="flex-1">
              <p className="text-gray-700 text-lg mb-4">
                IFDC is a public international organization governed by a board of directors with global representation.
              </p>
              <a href="#" className="text-yellow-500 font-medium underline">Meet Our Board Members</a>
            </div>
            <Image src="/azim1.jpeg" alt="Board" width={400} height={300} className="rounded" />
          </div>
        </div>

        {/* History Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Our History</h2>
          <div className="flex flex-wrap md:items-center gap-8">
            <Image src="/azim1.jpeg" alt="History" width={400} height={300} className="rounded" />
            <div className="flex-1">
              <p className="text-gray-700 text-lg mb-4">
                View our interactive timeline to learn more about IFDC’s 45-year history.
              </p>
              <a href="#" className="text-yellow-500 font-medium underline">Explore Our History</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Cloud Decoration */}
      {/* <div className="bg-cover bg-bottom h-96" style={{ backgroundImage: 'url(/clouds.jpg)' }}></div> */}
    </div>
  );
}
