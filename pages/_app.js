import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";
import React from "react";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }, AppProps ) {
	return (
		<>
			<Cursor />
			<Navbar />
			<Component {...pageProps} />
			
			<Footer />
			

		</>
		
	);
}

export default MyApp;


