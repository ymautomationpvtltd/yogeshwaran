import React, { useState } from 'react';
import { Bot, Cpu, Network, LayoutGrid } from 'lucide-react';
import './WhatIBuild.css';

const capabilities = [
  {
    id: 'mechatronics',
    icon: Bot,
    title: 'Mechatronics',
    description: 'Special purpose machines, robotics, smart factory systems.',
  },
  {
    id: 'automation',
    icon: Cpu,
    title: 'Automation',
    description: 'PLC, SCADA, industrial networks, control panels.',
  },
  {
    id: 'iiot',
    icon: Network,
    title: 'IIoT',
    description: 'Sensor systems, edge computing, smart connectivity.',
  },
  {
    id: 'digital',
    icon: LayoutGrid,
    title: 'Digital Systems',
    description: 'Enterprise software, digital twins, real-time analytics.',
  },
];

const WhatIBuild = () => {
  const [activeCard, setActiveCard] = useState('mechatronics');

  return (
    <section id="ventures" className="what-i-build-section">
      <div className="container-wide">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-tag">
            <span>WHAT I BUILD</span>
          </div>
          <h2 className="section-main-title">What I Build</h2>
        </div>

        {/* 4 Interactive Cards Grid */}
        <div className="capabilities-grid">
          {capabilities.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeCard === item.id;

            return (
              <div
                key={item.id}
                className={`capability-card ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setActiveCard(item.id)}
                onClick={() => setActiveCard(item.id)}
              >
                <div className="capability-icon-container">
                  <IconComponent size={28} className="capability-icon" />
                </div>

                <h3 className="capability-title">{item.title}</h3>
                <p className="capability-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuild;
