import Image from "next/image";

export const BuiltSection = () => {
  return (
    <div className='flex flex-col items-start justify-center mt-32 font-inter'>
      <h2 className='text-5xl font-bold text-blue-950'>Built for the way you work</h2>
      <div className="flex flex-col items-start justify-center mt-10">
        <ul className='flex gap-2'>
          <li>
            <a href="" className="bg-white border border-gray-200 px-4 py-3 hover:bg-gray-300 rounded-3xl">Brainstorming</a>
          </li>
          <li>
            <a href="" className="bg-white border border-gray-200 px-4 py-3 hover:bg-gray-300 rounded-3xl">Diagramming</a>
          </li>
          <li>
            <a href="" className="bg-white border border-gray-200 px-4 py-3 hover:bg-gray-300 rounded-3xl">Meetings & Workshops</a>
          </li>
          <li>
            <a href="" className="bg-white border border-gray-200 px-4 py-3 hover:bg-gray-300 rounded-3xl">Scrum Events</a>
          </li>
          <li>
            <a href="" className="bg-white border border-gray-200 px-4 py-3 hover:bg-gray-300 rounded-3xl">Mapping</a>
          </li>
          <li>
            <a href="" className="bg-white border border-gray-200 px-4 py-3 hover:bg-gray-300 rounded-3xl">Research & Design</a>
          </li>
          <li>
            <a href="" className="bg-white border border-gray-200 px-4 py-3 hover:bg-gray-300 rounded-3xl">Strategic Planning</a>  
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-2 auto-cols-max md:auto-cols-max mt-10 justify-items-stretch  items-start">
        <div>
          <h3 className="text-xl font-medium text-blue-950 mt-5">Brainstorming</h3>
          <p className="text-gray-500 mt-5 mb-10">Unleash creative ideas and build on <br/> them with the help of sticky notes <br/> images, mind maps, videos, drawing <br/> capabilities — the list goes on.</p>
          <a href="" className="text-blue-500 hover:text-blue-600 hover:font-extrabold hover:underline">Learn more</a>
        </div>
        <div className="flex justify-center items-center">
            <Image src="/images/built1.png" alt="built1" width={500} height={500} className="mt-5 w-full" />
          </div>
      </div>
    </div>
  )
}
