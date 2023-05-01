import { AiOutlineMenu } from "react-icons/ai";
import { FaFacebook, FaStar, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="px-4 py-2 flex-column items-center w-1/5 justify-between h-20">
      <nav className="flex justify-between items-center h-20">
        <div className="flex items-center">
          <div className="ml-1">
            <h1 className="text-secondary-gray text-sm font-bold">
              Social Planning
            </h1>
          </div>
        </div>
        <div className="mr-4 md:hidden">
          <AiOutlineMenu />
        </div>
      </nav>
      <div className="h-screen flex flex-row">
        <div className="h-screen w-1/5 flex flex-row">
          <ul className="flex-column space-y-4 h-full">
            <li className="flex justify-center items-center w-12 h-12 rounded-lg cursor-pointer bg-white">
              <img src="./Facebook.png" className="w-6 h-6" />
            </li>
            <li className="flex justify-center items-center w-12 h-12 rounded-lg cursor-pointer bg-white">
              <img src="./Instagram.png" className="w-6 h-6" />
            </li>
            <li className="flex justify-center items-center w-12 h-12 rounded-lg cursor-pointer bg-white">
              <img src="./Twitter.png" className="w-5 h-4" />
            </li>
            <li className="flex justify-center items-center w-12 h-12 rounded-lg cursor-pointer bg-white">
              <img src="./Pinterest.png" className="w-5 h-6" />
            </li>
          </ul>
        </div>
        <div className="h-screen w-4/5 flex flex-row">
          <ul className="flex-column space-y-4 ml-4 h-full w-full text-third-gray font-bold">
            <li className="flex justify-center items-center w-full h-12 rounded-lg text-white cursor-pointer bg-gradient-to-b from-cyan-500 to-blue-500">
              <p>Posts</p>
            </li>
            <li className="flex justify-center items-center w-full h-12 rounded-lg cursor-pointer">
              <p>Accounts</p>
            </li>
            <li className="flex justify-center items-center w-full h-12 rounded-lg cursor-pointer">
              <p>Analytics</p>
            </li>
            <li className="flex justify-center items-center w-full h-12 rounded-lg cursor-pointer">
              <p>Settings</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
