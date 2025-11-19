import React from 'react'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
        <div className=" container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* about */}
            <div>
                <h2 className="text-lg font-semibold mb-4 ">About us</h2>
                <p className="text-gray-400 text-sm">We are committed to delivering the best services and information . Our mission is to enrich lives through exceptional digital experince .</p>
                
            </div>
            {/* Quick list  */}
            <div>
                <h2 className="text-lg font-semibold mb-4 ">Quick links</h2>
                <ul className="space-y-2 text-gray-500">
                    <li>
                        <Link to={"/"} className="hover:text-white">Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"} className="hover:text-white">About Us</Link>
                    </li>
                    <li>
                        <Link to={"/news"} className="hover:text-white">NewsArtical</Link>
                    </li>
                    <li>
                        <Link to={"/"} className="hover:text-white">Contact Us</Link>
                    </li>
                </ul>
            </div>
            {/*contact us*/}
            <div>
                <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                <p className="text-gray-400 text-sm">Peepli ka bas ,phulera , jaipur ,India</p>
                <p className="text-gray-400 text-sm">Email: kumarashwani62004@gmail.com</p>
                <p className="text-gray-400 text-sm">phone: +91 7891xxxxxx</p>
            </div>

        </div>
        {/* Social media link*/}
        <div className="mt-8 border-gray-700 pt-6 text-center text-gray-400 text-sm">
            <p>Follow us on</p>
            <div className="flex justify-center space-x-4 mt-3">
                <a href="#" className="hover:text-white">Facebook</a>
                <a href="#" className="hover:text-white">Twitter</a>
                <a href="#" className="hover:text-white">Instgram</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
            </div>
            <p className="mt-4">
                &copy; {new Date().getFullYear()} ThePublicPost. All rights reserved
            </p>
        </div>
      
    </div>
  )
}

export default Footer

