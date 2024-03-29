import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { TbArrowWaveLeftDown } from "react-icons/tb";
import {
	BsLinkedin,
	BsTwitter,
	BsInstagram,
	BsFillTelephoneFill,
} from "react-icons/bs";
// import { MdAlternateEmail } from "react-icons/md";
// import Marquee from "react-fast-marquee";
// import andcLogo from "../public/image/logos/andc.png";
// import spieLogo from "../public/image/logos/SPIE_Logo.png";
import teamData from "../../public/data/graphic.json";
import socials from "../../public/data/socials.json";
import next from "next";
export default function Home() {
	return (
		<div className="bg-[#101010] z-10">
			<Head>
				<title>SPIE ANDC</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="../favicon.ico" />
			</Head>
			<main className="m-0">
				{/* HOME PAGE */}
				<section
					id="home"
					className="flex justify-center p-[0.8rem] md:p-[3.125rem] md:py-32 items-end"
					style={{
						background: 'url("../image/banner.svg")',
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundAttachment: "fixed",
					}}
				>
					<div className="inline-flex flex-col gap-5 bg-black/70 md:w-[90%] rounded-xl items-center p-10 pt-6 min-h-[80vh] drop-shadow-2xl">
						<h1 className="text-6xl font-bold">
							Meet our Graphic Team
						</h1><br></br>
						<h3 className="text-2xl ">
							Our Graphic and Social Media Team is responsible for creating visually appealing
							and engaging content for our brand&apos;s social media platforms. They work closely with
							our content team to develop a cohesive and impactful social media strategy that drives
							engagement and reaches our target audience. Our graphic designers use their creative
							skills to design eye-catching graphics, images, and videos that convey our brand&apos;s
							messaging and values. Our social media specialists then use these assets to curate and
							publish content across various social media platforms, monitor engagement, and interact
							with our followers. Together, our Graphic and Social Media Team plays a critical role in
							enhancing our brand&apos;s online presence and engaging with our audience in meaningful ways.
						</h3>
					</div>
				</section>

				{/* Team section start */}

				<div className="flex flex-col justify-start items-start text-white min-h-screen px-10 py-20">
					<h2 className="block sticky top-0 text-[5rem] md:text-[6rem] w-full text-center">
						MEET OUR GRAPHIC TEAM
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-20 justify-center items-center my-20">
						{teamData["team"].map((item, iter) => {
							return (
								<div key={iter}>
									<div className="card">
										<div className="imgBx">

											<img src={item.img} alt="" />
										</div>
										<div className="content">
											<div className="details">
												<h2>
													{item.name} <br />
													<span>{item.position}</span>
												</h2>
												<div className="data grid grid-cols-3">
													<a href={item.linkedin} target={next}>
														<h3>
															<BsLinkedin className="h-10 w-10" />
															Linkedin
														</h3>
													</a>
													<a href={item.instagram} target={next}>
														<h3>
															<BsInstagram className="h-10 w-10" />
															Instagram
														</h3>
													</a>
													<a href={item.twitter} target={next}>
														<h3>
															<BsTwitter className="h-10 w-10" />
															Twitter
														</h3>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</main>
		</div>
	);
}
