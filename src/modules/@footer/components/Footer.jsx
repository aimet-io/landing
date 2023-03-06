import {AiOutlineMail,AiOutlineFacebook,AiOutlineWhatsApp,AiOutlineInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'


export default function Footer() {
	return (
		<footer className="footer bg-[#121423] mt-[200px] px-20 pt-16 pb-4 text-white">
			<div className="flex justify-between">
				<div>
					<ul className="flex flex-col gap-6">
						<li>
							<a href="#" className="flex gap-2 items-center group">
								<AiOutlineWhatsApp className='group-hover:text-[#FFC700]' />
								<span className="group-hover:text-[#FFC700]"
								 >99999999</span>
								</a>
						</li>
						<li>
							<a href="#" className="flex gap-2 items-center group">
								<AiOutlineMail className='group-hover:text-[#FFC700]' />
								<span className='group-hover:text-[#FFC700]'>trux@hotmail.com</span>
								</a>
						</li>
						<li className="flex gap-6 items-center">
							<a href="#">
								<AiOutlineFacebook size={20} />
							</a>
							<a href="#">
								<AiOutlineInstagram size={20} />
							</a>
							<a href="#">
								<FaTiktok  size={16}/>
							</a>
						</li>
					</ul>
				</div>

				<div>
					<ul className="flex flex-col gap-6">
						<li>
							<a href="#" className="hover:underline">About</a>
						</li>
						<li>
							<a href="#" className="hover:underline">Services</a>
						</li>
						<li>
							<a href="#" className="hover:underline">Projects</a>
						</li>
					</ul>
				</div>

				<div>
					<ul className="flex flex-col gap-6">
						<li>
							<a href="#" className="hover:underline">About</a>
						</li>
						<li>
							<a href="#" className="hover:underline">Services</a>
						</li>
						<li>
							<a href="#" className="hover:underline">Projects</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="w-full mt-20">
				<p className="text-center">© 2021 Trux. All rights reserved.</p>
			</div>
		</footer>
	)
}