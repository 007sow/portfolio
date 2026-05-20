import React from "react";
import "./InfiniteSkills.css";
import {
  FaDatabase,
  FaGithub,
  FaMicrosoft,
  FaPython,
  FaAws,
  FaChartBar,
} from "react-icons/fa";
import {
  SiMongodb,
  SiGit,
  SiApacheairflow,
  SiApachespark,
  SiDatabricks,
  SiDocker,
  SiPostgresql,
  SiSnowflake,
  SiTerraform,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const skills = [
  { name: "Python", icon: <FaPython size={22} color="#3776AB" /> },
  { name: "SQL", icon: <FaDatabase size={22} color="#336791" /> },
  { name: "PySpark", icon: <SiApachespark size={22} color="#E25A1C" /> },
  { name: "Azure", icon: <FaMicrosoft size={22} color="#0078D4" /> },
  { name: "Azure Data Factory", icon: <FaMicrosoft size={22} color="#0078D4" /> },
  { name: "Synapse Analytics", icon: <FaMicrosoft size={22} color="#0078D4" /> },
  { name: "ADLS Gen2", icon: <FaMicrosoft size={22} color="#0078D4" /> },
  { name: "AWS Glue", icon: <FaAws size={22} color="#FF9900" /> },
  { name: "Redshift", icon: <FaAws size={22} color="#FF9900" /> },
  { name: "Kinesis", icon: <FaAws size={22} color="#FF9900" /> },
  { name: "Databricks", icon: <SiDatabricks size={22} color="#FF3621" /> },
  { name: "Delta Lake", icon: <SiDatabricks size={22} color="#FF3621" /> },
  { name: "Power BI", icon: <FaChartBar size={22} color="#F2C811" /> },
  { name: "Airflow", icon: <SiApacheairflow size={22} color="#017CEE" /> },
  { name: "Terraform", icon: <SiTerraform size={22} color="#844FBA" /> },
  { name: "Snowflake", icon: <SiSnowflake size={22} color="#29B5E8" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={22} color="#4169E1" /> },
  { name: "MongoDB", icon: <SiMongodb size={22} color="#47A248" /> },
  { name: "MySQL", icon: <GrMysql size={22} color="#4479A1" /> },
  { name: "Docker", icon: <SiDocker size={22} color="#2496ED" /> },
  { name: "Git", icon: <SiGit size={22} color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub size={22} color="#000000" /> },
];

const InfiniteSkills = () => {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="scroller-container w-full">
      <div className="scroller" style={{ "--duration": "40s" }}>
        {duplicatedSkills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill.icon}
            <span className="ml-2 font-satoshi">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSkills;
