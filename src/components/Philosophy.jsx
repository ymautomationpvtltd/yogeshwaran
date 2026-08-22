import React from 'react';
import './Philosophy.css';

const Philosophy = () => {
  return (
    <section id="philosophy" className="philosophy-section">
      <div className="philosophy-container container">
        {/* Left Column: Heading */}
        <div className="philosophy-left">
          <div className="section-tag">
            <span>PHILOSOPHY</span>
          </div>
          <h2 className="philosophy-title">
            Engineering beyond the machine.
          </h2>
        </div>

        {/* Right Column: Statement & Narrative */}
        <div className="philosophy-right">
          <p className="philosophy-lead">
            I engineer and build connected industrial systems where intelligence meets execution,
            delivering intelligent automation.
          </p>

          <p className="philosophy-body">
            With a strong foundation in Mechatronics, IoT, Sensor Systems, and Industrial
            Automation, I lead teams at YM Automation to build future-ready solutions.
          </p>

          <p className="philosophy-body">
            Co-founder & Managing Director of YM Automation. Passionate about building
            technologies and high-impact systems that help businesses scale, become more connected,
            customized, and efficient.
          </p>

          <p className="philosophy-closing">
            Join me on my journey designing engineering beyond the machines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
