import Image from "next/image";
import { TiTick } from "react-icons/ti"; 
export const BuiltKindsSection = () => {
  return (
    <div className='flex flex-col items-start justify-center mt-32 font-inter'>
      <h2 className='text-5xl font-bold text-blue-950'>Built for all kinds of teams</h2>
      <div className="flex flex-col items-start justify-center mt-10">
        <ul className='flex gap-2'>
          <li>
            <a href="" className="bg-white border border-gray-200 px-4 py-3 hover:bg-gray-300 rounded-3xl">UX & Design</a>
          </li>
          <li>
            <a href="" className="bg-white border border-gray-200 px-4 py-3 hover:bg-gray-300 rounded-3xl">Marketing</a>
          </li>
          <li>
            <a href="" className="bg-white border border-gray-200 px-4 py-3 hover:bg-gray-300 rounded-3xl">Product Management</a>
          </li>
          <li>
            <a href="" className="bg-white border border-gray-200 px-4 py-3 hover:bg-gray-300 rounded-3xl">Engineering</a>
          </li>
          <li>
            <a href="" className="bg-white border border-gray-200 px-4 py-3 hover:bg-gray-300 rounded-3xl">Consultants</a>
          </li>
          <li>
            <a href="" className="bg-white border border-gray-200 px-4 py-3 hover:bg-gray-300 rounded-3xl">Agile Coaches</a>
          </li>
          <li>
            <a href="" className="bg-white border border-gray-200 px-4 py-3 hover:bg-gray-300 rounded-3xl">Sales</a>  
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-2 auto-cols-max md:auto-cols-max mt-12 justify-items-stretch  items-start">
        <div>
          <div className="flex items-center gap-2">
            <TiTick size={20} className="text-gray-950 mt-8 justify-center " />
            <p className="text-gray-500 mt-8 justify-center text-lg">Build low-fi wireframes</p>
          </div>
          <div className="flex items-center gap-2">
            <TiTick size={20} className="text-gray-950 mt-8 justify-center" />
            <p className="text-gray-500 mt-8 justify-center text-lg">Involve stakeholders in the <br/> design process</p>
          </div>
          <div className="flex items-center gap-2 mb-8">
            <TiTick size={20} className="text-gray-950 mt-8 justify-center " />
            <p className="text-gray-500 mt-8 justify-center text-lg">Run engaging design <br/> workshops</p>
          </div>
          <a href="" className="text-blue-500 hover:text-blue-600 hover:font-extrabold hover:underline">Learn more</a>
          <p className="text-gray-500 mt-10 justify-center text-md">Integrate your favorite tools</p>
          <div className="mt-3 justify-center items-center">
            <ul className="flex gap-5">
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
        <div className="flex justify-center items-center">
            <Image src="/images/built-kinds.png" alt="built1" width={500} height={500} className="mt-5 w-full" />
          </div>
      </div>
    </div>
  )
}
