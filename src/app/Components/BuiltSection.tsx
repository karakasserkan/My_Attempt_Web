import Image from "next/image";

export const BuiltSection = () => {
  return (
    <div className='container mx-auto px-4'>
      <div className='flex flex-col items-center lg:items-start justify-center mt-16 md:mt-32 font-inter'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 text-center lg:text-left'>
          Built for the way you work
        </h2>

        {/* Buttons container */}
        <div className="w-full overflow-x-auto lg:overflow-x-visible pb-4 mt-6 md:mt-10">
          <ul className='flex flex-nowrap lg:flex-wrap gap-2 min-w-max lg:min-w-0'>
            <li>
              <a href="" className="inline-block bg-white border border-gray-200 px-2.5 lg:px-3.5 py-2 md:py-2.5 hover:bg-gray-300 rounded-3xl text-sm transition-colors whitespace-nowrap">
                Brainstorming
              </a>
            </li>
            <li>
              <a href="" className="inline-block bg-white border border-gray-200 px-2.5 lg:px-3.5 py-2 md:py-2.5 hover:bg-gray-300 rounded-3xl text-sm transition-colors whitespace-nowrap">
                Diagramming
              </a>
            </li>
            <li>
              <a href="" className="inline-block bg-white border border-gray-200 px-2.5 lg:px-3.5 py-2 md:py-2.5 hover:bg-gray-300 rounded-3xl text-sm transition-colors whitespace-nowrap">
                Meetings & Workshops
              </a>
            </li>
            <li>
              <a href="" className="inline-block bg-white border border-gray-200 px-2.5 lg:px-3.5 py-2 md:py-2.5 hover:bg-gray-300 rounded-3xl text-sm transition-colors whitespace-nowrap">
                Scrum Events
              </a>
            </li>
            <li>
              <a href="" className="inline-block bg-white border border-gray-200 px-2.5 lg:px-3.5 py-2 md:py-2.5 hover:bg-gray-300 rounded-3xl text-sm transition-colors whitespace-nowrap">
                Mapping
              </a>
            </li>
            <li>
              <a href="" className="inline-block bg-white border border-gray-200 px-2.5 lg:px-3.5 py-2 md:py-2.5 hover:bg-gray-300 rounded-3xl text-sm transition-colors whitespace-nowrap">
                Research & Design
              </a>
            </li>
            <li>
              <a href="" className="inline-block bg-white border border-gray-200 px-2.5 lg:px-3.5 py-2 md:py-2.5 hover:bg-gray-300 rounded-3xl text-sm transition-colors whitespace-nowrap">
                Strategic Planning
              </a>  
            </li>
          </ul>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mt-8 md:mt-10">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h3 className="text-lg md:text-xl font-medium text-blue-950">Brainstorming</h3>
            <p className="text-gray-500 mt-3 md:mt-5">
              Unleash creative ideas and build on them with the help of sticky notes,
              images, mind maps, videos, drawing capabilities — the list goes on.
            </p>
            <a href="" className="inline-block mt-4 text-blue-500 hover:text-blue-600 hover:font-extrabold hover:underline transition-colors">
              Learn more
            </a>
          </div>
          <div className="flex justify-center items-center order-1 lg:order-2">
            <Image 
              src="/images/built1.png" 
              alt="built1" 
              width={500} 
              height={500} 
              className="w-full max-w-[500px] h-auto" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}
