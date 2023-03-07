import {
  COMPANY_EMAIL,
  COMPANY_FB,
  COMPANY_INSTAGRAM,
  COMPANY_PHONE,
} from "@/config";
import Link from "next/link";
import {
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer bg-[#121423] mt-[200px] px-20 pt-16 pb-4 text-white">
      <div className="flex justify-between">
        <div>
          <ul className="flex flex-col gap-6">
            <li>
              <a href="#" className="flex gap-2 items-center group">
                <AiOutlineWhatsApp className="group-hover:text-[#FFC700]" />
                <span className="group-hover:text-[#FFC700]">
                  {COMPANY_PHONE}
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex gap-2 items-center group">
                <AiOutlineMail className="group-hover:text-[#FFC700]" />
                <span className="group-hover:text-[#FFC700]">
                  {COMPANY_EMAIL}
                </span>
              </a>
            </li>
            <li className="flex gap-6 items-center">
              <a href={COMPANY_FB} target="_blank">
                <AiOutlineFacebook size={20} />
              </a>
              <a href={COMPANY_INSTAGRAM} target="_blank">
                <AiOutlineInstagram size={20} />
              </a>
              {/* <a href="#">
                <FaTiktok size={16} />
              </a> */}
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-6">
            <li>
              <Link href="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:underline">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-6">
            <li>
              <Link href="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:underline">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full mt-20">
        <p className="text-center">© 2022 Aimet. All rights reserved.</p>
      </div>
    </footer>
  );
}
