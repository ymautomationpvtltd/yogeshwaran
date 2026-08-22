import React, { useState } from "react";
import {
	Mail,
	Phone,
	MapPin,
	User,
	MessageSquare,
	Calendar,
	Clock,
	Shield,
	CheckCircle2,
	Send,
	ArrowRight,
	PenLine,
} from "lucide-react";
import "./Contact.css";

const appointmentTypes = [
	"Turnkey SPM Machine Consultation",
	"Robotics & Automated Assembly Lines",
	"IIoT & Smart Factory Telemetry",
	"PLC / SCADA Control Architecture",
	"30-Min Strategy & Technical Advisory",
];

const Contact = () => {
	const [activeTab, setActiveTab] = useState("letsTalk"); // 'letsTalk' | 'appointment'

	// Let's Talk Form State
	const [talkForm, setTalkForm] = useState({
		name: "",
		email: "",
		discussion: "",
	});

	// Book an Appointment Form State
	const [appointmentForm, setAppointmentForm] = useState({
		name: "",
		email: "",
		appointmentType: appointmentTypes[0],
		date: "",
		time: "",
	});

	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submittedData, setSubmittedData] = useState(null);

	const handleTalkChange = (e) => {
		setTalkForm({ ...talkForm, [e.target.name]: e.target.value });
	};

	const handleAppointmentChange = (e) => {
		setAppointmentForm({
			...appointmentForm,
			[e.target.name]: e.target.value,
		});
	};

	const handleTalkSubmit = (e) => {
		e.preventDefault();
		if (!talkForm.name || !talkForm.email || !talkForm.discussion) return;

		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);
			setSubmittedData({
				type: "talk",
				name: talkForm.name,
				email: talkForm.email,
			});
			setTalkForm({ name: "", email: "", discussion: "" });
			setTimeout(() => {
				setIsSubmitted(false);
				setSubmittedData(null);
			}, 6000);
		}, 600);
	};

	const handleAppointmentSubmit = (e) => {
		e.preventDefault();
		if (
			!appointmentForm.name ||
			!appointmentForm.email ||
			!appointmentForm.date ||
			!appointmentForm.time
		)
			return;

		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);
			setSubmittedData({
				type: "appointment",
				name: appointmentForm.name,
				email: appointmentForm.email,
				date: appointmentForm.date,
				time: appointmentForm.time,
				appointmentType: appointmentForm.appointmentType,
			});
			setAppointmentForm({
				name: "",
				email: "",
				appointmentType: appointmentTypes[0],
				date: "",
				time: "",
			});
			setTimeout(() => {
				setIsSubmitted(false);
				setSubmittedData(null);
			}, 7000);
		}, 600);
	};

	return (
		<section id="contact" className="contact-section">
			<div className="container">
				{/* Main Dual-Pane Card */}
				<div className="contact-card-wrapper">
					<div className="contact-main-card">
						{/* LEFT COLUMN: FORM */}
						<div className="contact-left-col">
							{/* Card Title & Accent Bars */}
							<div className="contact-title-group">
								<h2 className="card-heading">
									Let’s talk<span className="dot-gold">.</span>
								</h2>
								<div className="heading-accent-bars">
									<span className="accent-bar-gold" />
									<span className="accent-bar-gray" />
								</div>
							</div>

							{/* Pill Switcher */}
							<div className="contact-switcher-pill">
								<button
									type="button"
									className={`switch-tab-btn ${activeTab === "letsTalk" ? "active" : ""}`}
									onClick={() => {
										setActiveTab("letsTalk");
										setIsSubmitted(false);
									}}
								>
									<MessageSquare
										size={16}
										className="switch-icon"
									/>
									<span>Let’s Talk</span>
								</button>
								<button
									type="button"
									className={`switch-tab-btn ${activeTab === "appointment" ? "active" : ""}`}
									onClick={() => {
										setActiveTab("appointment");
										setIsSubmitted(false);
									}}
								>
									<Calendar
										size={16}
										className="switch-icon"
									/>
									<span>Book an Appointment</span>
								</button>
							</div>

							{/* FORM VIEW OR CONFIRMATION */}
							{isSubmitted && submittedData ?
								<div className="form-success-state">
									<CheckCircle2
										size={48}
										className="success-check-icon"
									/>
									{submittedData.type === "appointment" ?
										<>
											<h3>Appointment Requested!</h3>
											<p className="success-meta-line">
												{submittedData.appointmentType}{" "}
												on {submittedData.date} at{" "}
												{submittedData.time}
											</p>
											<p>
												A calendar invite and
												confirmation has been sent to{" "}
												<strong>
													{submittedData.email}
												</strong>
												.
											</p>
										</>
									:	<>
											<h3>Message Sent Successfully!</h3>
											<p>
												Thank you,{" "}
												<strong>
													{submittedData.name}
												</strong>
												. I’ll review your project
												requirements and respond within
												24 hours.
											</p>
										</>
									}
								</div>
							: activeTab === "letsTalk" ?
								/* TAB 1: LET'S TALK FORM */
								<form
									onSubmit={handleTalkSubmit}
									className="contact-actual-form"
								>
									<div className="form-field-block">
										<label
											htmlFor="talk-name"
											className="field-label"
										>
											Your Name *
										</label>
										<div className="input-with-icon-wrap">
											<User
												size={18}
												className="input-leading-icon"
											/>
											<input
												type="text"
												id="talk-name"
												name="name"
												value={talkForm.name}
												onChange={handleTalkChange}
												placeholder="Enter your name"
												required
												className="custom-form-input with-icon"
											/>
										</div>
									</div>

									<div className="form-field-block">
										<label
											htmlFor="talk-email"
											className="field-label"
										>
											Email *
										</label>
										<div className="input-with-icon-wrap">
											<Mail
												size={18}
												className="input-leading-icon"
											/>
											<input
												type="email"
												id="talk-email"
												name="email"
												value={talkForm.email}
												onChange={handleTalkChange}
												placeholder="Enter your email"
												required
												className="custom-form-input with-icon"
											/>
										</div>
									</div>

									<div className="form-field-block">
										<label
											htmlFor="talk-discuss"
											className="field-label"
										>
											What would you like to discuss? *
										</label>
										<div className="input-with-icon-wrap textarea-icon-wrap">
											<PenLine
												size={18}
												className="input-leading-icon textarea-icon"
											/>
											<textarea
												id="talk-discuss"
												name="discussion"
												rows={4}
												value={talkForm.discussion}
												onChange={handleTalkChange}
												placeholder="Tell me a little about your project..."
												required
												className="custom-form-textarea with-icon"
											/>
										</div>
									</div>

									<button
										type="submit"
										disabled={isSubmitting}
										className="custom-submit-btn"
									>
										<span className="btn-icon-send">
											<Send size={15} />
										</span>
										<span className="btn-text">
											{isSubmitting ?
												"Sending..."
											:	"Send Message"}
										</span>
										<span className="btn-icon-arrow">
											<ArrowRight size={16} />
										</span>
									</button>
								</form>
							:	/* TAB 2: BOOK AN APPOINTMENT FORM */
								<form
									onSubmit={handleAppointmentSubmit}
									className="contact-actual-form"
								>
									<div className="form-field-block">
										<label
											htmlFor="apt-name"
											className="field-label"
										>
											Your Name *
										</label>
										<div className="input-with-icon-wrap">
											<User
												size={18}
												className="input-leading-icon"
											/>
											<input
												type="text"
												id="apt-name"
												name="name"
												value={appointmentForm.name}
												onChange={
													handleAppointmentChange
												}
												placeholder="Enter your name"
												required
												className="custom-form-input with-icon"
											/>
										</div>
									</div>

									<div className="form-field-block">
										<label
											htmlFor="apt-email"
											className="field-label"
										>
											Email *
										</label>
										<div className="input-with-icon-wrap">
											<input
												type="email"
												id="apt-email"
												name="email"
												value={appointmentForm.email}
												onChange={
													handleAppointmentChange
												}
												placeholder="Enter your email"
												required
												className="custom-form-input"
											/>
										</div>
									</div>

									<div className="form-field-block">
										<label
											htmlFor="apt-type"
											className="field-label"
										>
											Appointment type *
										</label>
										<select
											id="apt-type"
											name="appointmentType"
											value={
												appointmentForm.appointmentType
											}
											onChange={handleAppointmentChange}
											className="custom-form-select"
										>
											{appointmentTypes.map((type) => (
												<option
													key={type}
													value={type}
												>
													{type}
												</option>
											))}
										</select>
									</div>

									<div className="form-row-grid-2">
										<div className="form-field-block">
											<label
												htmlFor="apt-date"
												className="field-label"
											>
												Date *
											</label>
											<div className="input-with-icon-wrap right-icon-wrap">
												<input
													type="date"
													id="apt-date"
													name="date"
													value={appointmentForm.date}
													onChange={
														handleAppointmentChange
													}
													required
													className="custom-form-input has-right-icon"
												/>
												<Calendar
													size={17}
													className="input-trailing-icon"
												/>
											</div>
										</div>

										<div className="form-field-block">
											<label
												htmlFor="apt-time"
												className="field-label"
											>
												Time *
											</label>
											<div className="input-with-icon-wrap right-icon-wrap">
												<input
													type="time"
													id="apt-time"
													name="time"
													value={appointmentForm.time}
													onChange={
														handleAppointmentChange
													}
													required
													className="custom-form-input has-right-icon"
												/>
												<Clock
													size={17}
													className="input-trailing-icon"
												/>
											</div>
										</div>
									</div>

									<button
										type="submit"
										disabled={isSubmitting}
										className="custom-submit-btn"
									>
										<span className="btn-icon-send">
											<Send size={15} />
										</span>
										<span className="btn-text">
											{isSubmitting ?
												"Booking..."
											:	"Submit"}
										</span>
										<span className="btn-icon-arrow">
											<ArrowRight size={16} />
										</span>
									</button>
								</form>
							}
						</div>

						{/* RIGHT COLUMN: VALUE PROPOSITION */}
						<div className="contact-right-col">
							{/* Large overlapping chat bubbles badge */}
							<div className="chat-bubbles-badge">
								<div className="bubble-shape bubble-yellow">
									<span className="bubble-dots">•••</span>
								</div>
								<div className="bubble-shape bubble-white">
									<span className="bubble-lines">
										<span />
										<span />
									</span>
								</div>
							</div>

							<h3 className="right-col-heading">
								Let’s build something great{" "}
								<span className="gold-text">together.</span>
							</h3>

							<p className="right-col-subtext">
								Share your ideas or project requirements, I’ll
								get back to you as soon as possible.
							</p>

							<div className="contact-features-list">
								<div className="contact-feature-row">
									<div className="feature-circle-icon">
										<Clock size={16} />
									</div>
									<div className="feature-desc-wrap">
										<strong className="feature-main-text">
											Quick Response
										</strong>
										<span className="feature-sub-text">
											Usually replies within 24 hours
										</span>
									</div>
								</div>

								<div className="contact-feature-row">
									<div className="feature-circle-icon">
										<Shield size={16} />
									</div>
									<div className="feature-desc-wrap">
										<strong className="feature-main-text">
											Confidential
										</strong>
										<span className="feature-sub-text">
											Your information is safe with me
										</span>
									</div>
								</div>

								<div className="contact-feature-row">
									<div className="feature-circle-icon">
										<CheckCircle2 size={16} />
									</div>
									<div className="feature-desc-wrap">
										<strong className="feature-main-text">
											No Commitment
										</strong>
										<span className="feature-sub-text">
											Let’s talk and explore possibilities
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* 3 Contact Badges */}
				<div className="contact-badges-grid">
					<a
						href="mailto:ym@ymautomation.com"
						className="contact-badge-item"
					>
						<div className="contact-badge-circle">
							<Mail size={20} />
						</div>
						<span className="contact-badge-title">Email</span>
						<span className="contact-badge-value">
							ym@ymautomation.com
						</span>
					</a>

					<a href="tel:+919489023450" className="contact-badge-item">
						<div className="contact-badge-circle">
							<Phone size={20} />
						</div>
						<span className="contact-badge-title">Call</span>
						<span className="contact-badge-value">
							+91 94890 23450
						</span>
					</a>

					<div className="contact-badge-item">
						<div className="contact-badge-circle">
							<MapPin size={20} />
						</div>
						<span className="contact-badge-title">Location</span>
						<span className="contact-badge-value">
							Coimbatore, Tamil Nadu, India
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
