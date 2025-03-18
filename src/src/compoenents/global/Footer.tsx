import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-4">ABOUT US</h2>
          <div className="space-y-2">
            <p className="flex items-center">
              <Phone className="mr-2 h-4 w-4" /> +61 3 8376 6284
            </p>
            <p className="flex items-center">
              <Mail className="mr-2 h-4 w-4" /> contact@gmail.com
            </p>
            <p className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" /> Kathmandu, Nepal
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">MY ACCOUNT</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                My account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">POLICIES</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Nutrition business
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Gift Vouchers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Delivery Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">NEWSLETTER SIGNUP</h2>
          <form className="mb-4">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 text-indigo-900 bg-white rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
              >
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </form>
          <div>
            <p className="mb-2">Follow us</p>
            <div className="flex space-x-2">
              <a href="#" className="text-white hover:text-blue-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-pink-400">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>Copyright © 2025 Bishnu Bishowkarma. All rights reserved.</p>
      </div>
    </footer>
  );
}
