import Image from "next/image";

export default function WorkWithUs() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            We Want to Work with You
          </h2>
          <p className="text-gray-600 mb-6">
            IFDC has built a reputation in developing major fertilizer products...
          </p>
          <a
            href="#"
            className="text-sm font-semibold text-gray-800 border-b-2 border-yellow-500"
          >
            Get in Touch with Us
          </a>
        </div>
        <Image
          src="/partner.jpg"
          alt="Working Together"
          width={250}
          height={200}
          className="rounded-md"
        />
      </div>
    </section>
  );
}
