import Link from "next/link";
import React from "react";
import website from "../pages/teams/website";

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
				<li> <a href="#" >Our Teams</a>
					<ul className="submenu">
						<li><Link href="/teams/website">Website team</Link></li>
						<li><a>Graphics Team</a></li>
						<li><a>Content Team</a></li>
					</ul>

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
