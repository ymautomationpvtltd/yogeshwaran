import React from "react";
import { ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import YogeshImage from "../assets/yogesh.svg";
import "./Hero.css";

const Hero = () => {
	const handleScrollTo = (e, targetId) => {
		e.preventDefault();
		const target = document.querySelector(targetId);
		if (target) {
			target.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section id="about" className="hero-section">
			<div className="hero-container container-wide">
				{/* Left Column: Hero Copy */}
				<div className="hero-content">
					<div className="section-tag hero-badge">
						<span>
							INNOVATOR • ENTREPRENEUR • AUTOMATION PIONEER
						</span>
					</div>

					<h1 className="hero-headline">Hello</h1>

					<div className="hero-author-info">
						<h2 className="hero-author-name">I'm Yogeshwaran</h2>
						<p className="hero-author-role">
							Managing Director & Founder – YM Automation Private
							Limited
						</p>
					</div>

					<p className="hero-description">
						A passionate advocate for Autonomous Manufacturing,
						Industry 4.0, and Digital Transformation. Dedicated to
						engineering the next generation of smart factories and
						intelligent automation ecosystems.
					</p>

					<div className="hero-actions">
						<a
							href="#ventures"
							className="hero-primary-btn"
							onClick={(e) => handleScrollTo(e, "#ventures")}
						>
							<span>Explore My Work</span>
							<ArrowRight size={18} className="btn-arrow" />
						</a>
					</div>
				</div>

				{/* Right Column: Hero Portrait Sketch touching the bottom */}
				<div className="hero-image-wrapper">
					<div className="hero-portrait-container">
						<img
							src={YogeshImage}
							alt="Yogeshwaran Muralidharan - Managing Director and Founder of YM Automation Private Limited"
							className="hero-portrait-img"
							loading="eager"
							decoding="async"
							fetchPriority="high"
						/>
					</div>

					{/* Vertical Floating Social Strip */}
					<div className="hero-social-strip">
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="social-icon-link"
							aria-label="Facebook"
						>
							<FaFacebookF size={15} />
						</a>
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="social-icon-link"
							aria-label="Instagram"
						>
							<FaInstagram size={16} />
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="social-icon-link"
							aria-label="LinkedIn"
						>
							<FaLinkedinIn size={16} />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
