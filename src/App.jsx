import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import WhatIBuild from "./components/WhatIBuild";
import Projects from "./components/Projects";
import BuiltForIndustry from "./components/BuiltForIndustry";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<div className="app-container">
			<Navbar />
			<main>
				<Hero />
				<Philosophy />
				<WhatIBuild />
				<Projects />
				<BuiltForIndustry />
				<Leadership />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
