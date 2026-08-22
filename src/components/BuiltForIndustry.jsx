import React from "react";
import { Factory, Cog, Radio, Layers } from "lucide-react";
import "./BuiltForIndustry.css";

const industryAreas = [
	{
		id: "mfg",
		title: "Manufacturing",
		desc: "Custom SPM machines & automated production lines.",
		icon: Factory,
	},
	{
		id: "ie",
		title: "Industrial Engineering",
		desc: "End-to-end control logic, PLC & SCADA integration.",
		icon: Cog,
	},
	{
		id: "sf",
		title: "Smart Factory",
		desc: "Sensor networks, IoT telemetry & dashboarding.",
		icon: Radio,
	},
	{
		id: "is",
		title: "Integration & Software",
		desc: "Modern web platforms bridging hardware & software.",
		icon: Layers,
	},
];

const BuiltForIndustry = () => {
	return (
		<section id="impact" className="industry-section">
			<div className="container-wide">
				{/* Section Header */}
				<div className="industry-header">
					<div className="section-tag industry-tag">
						<span>PROVEN IMPACT</span>
					</div>
					<h2 className="industry-title">Built for Industry</h2>
				</div>

				{/* 4 Cards Grid */}
				<div className="industry-grid">
					{industryAreas.map((area) => {
						const Icon = area.icon;
						return (
							<div key={area.id} className="industry-card">
								<div className="industry-card-icon-wrap">
									<Icon size={24} className="industry-icon" />
								</div>
								<h3 className="industry-card-title">
									{area.title}
								</h3>
								<p className="industry-card-desc">
									{area.desc}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default BuiltForIndustry;
