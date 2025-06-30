// app/resources/page.tsx (Next.js App Router)
export default function   ResourcesPage() {
    return (
      <div className="h-auto flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 text-center mb-8">
          Resources
        </h1>
  
        <div className="max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            How to Access Azeem Resources
          </h2>
  
          <p className="text-gray-700 text-lg md:text-xl">
            Visit our{' '}
            <a
              href="#"
              className="text-green-700 font-bold hover:underline"
            >
              virtual library
            </a>{' '}
            to search for Azim publications and materials.
          </p>
  
          <div className="text-left mt-6 text-gray-700 text-lg md:text-xl">
            <p className="mb-2">Available materials include:</p>
            <ul className="list-disc list-inside space-y-1">
             <li>Project Portfolio</li>
<li>Construction Progress Reports</li>
<li>Engineering & Design Documents</li>
<li>And many other construction resources</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  