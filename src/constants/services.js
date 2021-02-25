import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Software Development",
    text: `Develop software using React in front-end and NodeJS in back-end. Recently I usually use NextJS to do static or server side rendering. `,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "Data Analysis",
    text: `Mainly deal with MSSQL. Use queries to analyze data, or extract data and represent it as a chart or table on the web with Stored Procedure or Job Scheduling.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "Cloud",
    text: `Have experience building AWS and Azure servers. Set up security groups and firewall settings, Apache and IIS servers. Web project deployment and security management.`,
  },
]
