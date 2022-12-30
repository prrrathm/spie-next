import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<nav className="navigation z-40">
			<input type="checkbox" name="" id="" className="check" />
			<ul className="menu-items">
				<li>
					<Link href="/">Home</Link>
					{/* <a >Home</a> */}
				</li>
				<li>
					<a href="#about">About Us</a>
				</li>
				<li>
					<a href="#team">Our Team</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<div className="ham-menu">
				<span className="line line1"></span>
				<span className="line line2"></span>
				<span className="line line3"></span>
			</div>
		</nav>
	);
};

export default Navbar;
