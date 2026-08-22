import React, { useState } from 'react';
import { Lightbulb, Wrench, CheckCircle2, Sparkles } from 'lucide-react';
import './Leadership.css';

const leadershipPillars = [
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship',
    desc: 'Founded & scaled YM Automation into an innovative industrial automation leader.',
    icon: Lightbulb,
  },
  {
    id: 'engineering',
    title: 'Engineering',
    desc: 'Deep technical mastery in mechatronics, robotics, and digital factory architecture.',
    icon: Wrench,
  },
  {
    id: 'execution',
    title: 'Execution',
    desc: 'Delivering turnkey industrial projects on time, on budget, and beyond expectations.',
    icon: CheckCircle2,
  },
  {
    id: 'innovation',
    title: 'Innovation',
    desc: 'Pioneering next-gen smart manufacturing, IoT ecosystems, and connected machines.',
    icon: Sparkles,
  },
];

const Leadership = () => {
  const [activeItem, setActiveItem] = useState('entrepreneurship');

  return (
    <section id="leadership" className="leadership-section">
      <div className="container">
        <div className="leadership-container">
          {/* Left Column: Heading & Principles */}
          <div className="leadership-left">
            <div className="section-tag">
              <span>LEADERSHIP</span>
            </div>
            <h2 className="leadership-title">
              Think in systems. Build with purpose.
            </h2>
            <p className="leadership-subtitle">
              As a leader with engineering roots, people, vision and processes are central to my focus & principle.
            </p>
          </div>

          {/* Right Column: 4 Interactive Leadership Cards */}
          <div className="leadership-right">
            {leadershipPillars.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = activeItem === pillar.id;

              return (
                <div
                  key={pillar.id}
                  className={`leadership-card ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => setActiveItem(pillar.id)}
                  onClick={() => setActiveItem(pillar.id)}
                >
                  <div className="leadership-card-body">
                    <div className="leadership-card-header">
                      <Icon size={18} className="leadership-card-icon" />
                      <h3 className="leadership-card-title">{pillar.title}</h3>
                    </div>
                    <p className="leadership-card-desc">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
