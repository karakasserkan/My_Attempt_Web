import Image from "next/image";
import { TiTick } from "react-icons/ti"; 

export const BuiltKindsSection = () => {
  return (
    <div className='container mx-auto px-4'>
      <div className='flex flex-col items-center lg:items-start justify-center mt-16 md:mt-32 font-inter'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 text-center lg:text-left'>
          Built for all kinds of teams
        </h2>

        {/* Buttons container */}
        <div className="w-full overflow-x-auto lg:overflow-x-visible pb-4 mt-6 md:mt-10">
          <ul className='flex flex-nowrap lg:flex-wrap gap-2 min-w-max lg:min-w-0'>
            <li>
              <a href="" className="inline-block bg-white border border-gray-200 px-2.5 lg:px-3.5 py-2 md:py-2.5 hover:bg-gray-300 rounded-3xl text-sm transition-colors whitespace-nowrap">
                UX & Design
              </a>
            </li>
            <li>
              <a href="" className="inline-block bg-white border border-gray-200 px-2.5 lg:px-3.5 py-2 md:py-2.5 hover:bg-gray-300 rounded-3xl text-sm transition-colors whitespace-nowrap">
                Marketing
              </a>
            </li>
            <li>
              <a href="" className="inline-block bg-white border border-gray-200 px-2.5 lg:px-3.5 py-2 md:py-2.5 hover:bg-gray-300 rounded-3xl text-sm transition-colors whitespace-nowrap">
                Product Management
              </a>
            </li>
            <li>
              <a href="" className="inline-block bg-white border border-gray-200 px-2.5 lg:px-3.5 py-2 md:py-2.5 hover:bg-gray-300 rounded-3xl text-sm transition-colors whitespace-nowrap">
                Engineering
              </a>
            </li>
            <li>
              <a href="" className="inline-block bg-white border border-gray-200 px-2.5 lg:px-3.5 py-2 md:py-2.5 hover:bg-gray-300 rounded-3xl text-sm transition-colors whitespace-nowrap">
                Consultants
              </a>
            </li>
            <li>
              <a href="" className="inline-block bg-white border border-gray-200 px-2.5 lg:px-3.5 py-2 md:py-2.5 hover:bg-gray-300 rounded-3xl text-sm transition-colors whitespace-nowrap">
                Agile Coaches
              </a>
            </li>
            <li>
              <a href="" className="inline-block bg-white border border-gray-200 px-2.5 lg:px-3.5 py-2 md:py-2.5 hover:bg-gray-300 rounded-3xl text-sm transition-colors whitespace-nowrap">
                Sales
              </a>  
            </li>
          </ul>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mt-8 md:mt-10">
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Tick Items */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <TiTick size={20} className="text-gray-950" />
                <p className="text-gray-500 text-lg">Build low-fi wireframes</p>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <TiTick size={20} className="text-gray-950" />
                <p className="text-gray-500 text-lg">Involve stakeholders in the design process</p>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <TiTick size={20} className="text-gray-950" />
                <p className="text-gray-500 text-lg">Run engaging design workshops</p>
              </div>
            </div>

            <a href="" className="inline-block mt-8 text-blue-500 hover:text-blue-600 hover:font-extrabold hover:underline transition-colors">
              Learn more
            </a>

            {/* Integration Section */}
            <div className="mt-10">
              <p className="text-gray-500 text-md mb-4">Integrate your favorite tools</p>
              <ul className="flex gap-5 justify-center lg:justify-start">
                <li>
                  <Image src="/images/Vector1.png" alt="vector1" width={30} height={30} />
                </li>
                <li>
                  <Image src="/images/Vector2.png" alt="vector2" width={30} height={30} />
                </li>
                <li>
                  <Image src="/images/Vector3.png" alt="vector3" width={30} height={30} />
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center items-center order-1 lg:order-2">
            <Image 
              src="/images/built-kinds.png" 
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
