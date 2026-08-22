import React from "react";
import { ArrowUpRight } from "lucide-react";
import "./Projects.css";

const projectsList = [
	{
		id: "01",
		title: "Industrial Automation",
		summary: "Automated assembly and testing lines.",
		detail: "Full lifecycle engineering for high-speed manufacturing.",
		category: "Robotics & Assembly",
	},
	{
		id: "02",
		title: "IIoT Systems",
		summary: "Smart machine monitoring & control.",
		detail: "Real-time sensor telemetry and cloud dashboards.",
		category: "Industry 4.0 Telemetry",
	},
	{
		id: "03",
		title: "Digital Platforms",
		summary: "High performance interfaces.",
		detail: "SCADA and Enterprise software integrations.",
		category: "Software & Cloud",
	},
];

const Projects = () => {
	return (
		<section id="projects" className="projects-section">
			<div className="container-wide">
				{/* Section Header */}
				<div className="section-header-block">
					<div className="section-tag">
						<span>FEATURED WORKS</span>
					</div>
					<h2 className="section-main-title">Projects</h2>
				</div>

				{/* Project Table / Clean List */}
				<div className="projects-list-wrapper">
					{projectsList.map((project) => (
						<div key={project.id} className="project-row-item">
							<div className="project-id-col">
								<span className="project-number">
									{project.id}
								</span>
							</div>

							<div className="project-title-col">
								<h3 className="project-row-title">
									{project.title}
								</h3>
							</div>

							<div className="project-summary-col">
								<p className="project-row-summary">
									{project.summary}
								</p>
								<p className="project-row-detail">
									{project.detail}
								</p>
							</div>

							<div className="project-action-col">
								<div className="project-action-circle">
									<ArrowUpRight
										size={18}
										className="project-action-icon"
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
