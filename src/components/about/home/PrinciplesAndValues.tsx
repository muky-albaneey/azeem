import Image from 'next/image';

export default function PrinciplesAndValues() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Principles and Values Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Principles and Values</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
Throughout the regions we serve, at Azimco offices, and across all our construction sites and partnerships, we uphold principles and values that are deeply embedded in every project we deliver.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Principles of Engagement</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
               <li>Engineering Excellence and Innovation</li>
<li>Global Standards, Local Execution</li>
<li>Community-Centered Infrastructure Solutions</li>
<li>Inclusive Workforce Development</li>
<li>Public-Private Sector Collaboration</li>
<li>Results-Oriented Project Delivery</li>

              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Organizational Values</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Inclusive Workforce and Continuous Development</li>
<li>Transparent Operations and Responsible Management</li>
<li>Strong Partnerships and Team Synergy</li>
<li>Operational Efficiency and High-Quality Execution</li>

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
  Azimco collaborates with governments, development agencies, and private sector partners to deliver impactful infrastructure projects that enhance community resilience, boost economic growth, and improve quality of life.
</p>

              <a href="#" className="text-[#D4ADFC] font-medium underline">A Range of Partners</a>
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
  Our team of engineers, project managers, architects, and construction professionals work together to bring our vision to life.
</p>

              <a href="#" className="text-[#D4ADFC] font-medium underline">Meet Our Team</a>
            </div>
          </div>
        </div>

        {/* Board Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Board</h2>
          <div className="flex flex-wrap md:items-center gap-8">
            <div className="flex-1">
             <p className="text-gray-700 text-lg mb-4">
  Azimco is a privately held construction and infrastructure firm guided by a diverse board of industry experts and global advisors.
</p>

              <a href="#" className="text-[#D4ADFC] font-medium underline">Meet Our Board Members</a>
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
  Explore our interactive timeline to discover Azimco’s legacy of over 45 years in delivering transformative infrastructure projects.
</p>

              <a href="#" className="text-[#D4ADFC] font-medium underline">Explore Our History</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Cloud Decoration */}
      {/* <div className="bg-cover bg-bottom h-96" style={{ backgroundImage: 'url(/clouds.jpg)' }}></div> */}
    </div>
  );
}
