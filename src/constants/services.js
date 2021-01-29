import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Front-End",
    text: `It covers HTML, CSS, and Javascript. Recently, it is based on Next.js and is developed using React.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "Database",
    text: `Mainly deal with MSSQL. Use queries to analyze data, or extract data and represent it as a chart or table on the web. Use Stored Procedure and Job Scheduling.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "Cloud",
    text: `Have experience building AWS and Azure servers. Set up security groups and firewall settings, Apache and IIS servers. Web project deployment and security management.`,
  },
]
