import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "프론트엔드",
    text: `HTML, CSS, Javascript를 다룹니다. 최근에는 Next.js를 기반으로 하고 React를 사용하여 개발합니다.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "데이터베이스",
    text: `MSSQL을 주로 다룹니다. 쿼리를 이용하여 데이터 분석을 하거나, 데이터를 추출하여 웹 상에서 차트나 테이블로 나타냅니다. Stored Procedure와 Job Scheduling을 사용합니다.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "클라우드",
    text: `AWS와 Azure 서버 구축경험이 있습니다. 보안 그룹 및 방화벽 설정, Apache와 IIS 서버 설정을 합니다. 웹 프로젝트 배포 및 보안 설정을 합니다.`,
  },
]
