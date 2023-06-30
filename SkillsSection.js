import React from "react";
import { data } from "./Data";


const SkillsSection = () => {
  const { skills } = data;

  return (
    <><h2 style={{ fontFamily: 'Arial', fontSize: '32px', color: '#2d3654' }}>{skills.title}</h2><div style={{
      background: 'rgb(2, 0, 36)',
      background: 'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(157, 203, 227, 1) 95%, rgba(0, 212, 255, 1) 100%)',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      animation: 'fade-in 1s ease'
    }}>

      <ul style={{ fontFamily: 'Arial', fontSize: '18px', color: '#8aadbf' }}>
        {skills.list.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div></>
  );
  
};

export default SkillsSection;
