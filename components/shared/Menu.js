import React from 'react';
import {
	RiDiscordFill,
	RiYoutubeFill
} from 'react-icons/ri';

const Menu = () => {
	return (
		<header className="flex justify-around w-full py-2 pl-2 md:pl-8 fixed top-0 bg-gray-900 z-10">
			<div className="flex items-center">
				<img
					src="logo.svg"
					className="w-16 h-16 md:w-20 md:h-20"
				/>

				<div className="pl-2 md:pl-4 text-lg uppercase text-pink-300">
					Gentleman Programming
				</div>
				<div />
			</div>

			<div className="flex items-center">
				<a
					href="https://discord.gg/XwuSp9XzjN"
					target="blank"
				>
					<RiDiscordFill className="w-8 h-8 md:h-10 md:w-10 text-indigo-300 hover:text-indigo-400 cursor-pointer mr-2" />
				</a>

				<a
					href="https://www.youtube.com/channel/UCbx_d228PdYwgB4Jz202SIQ"
					target="blank"
				>
					<RiYoutubeFill className="w-8 h-8 md:h-12 md:w-12 text-red-500 hover:text-red-600 cursor-pointer" />
				</a>
			</div>
		</header>
	);
};

export default Menu;
