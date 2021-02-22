import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import {
  FaGithubSquare,
  FaShareSquare,
  FaLink,
  FaYoutube,
} from "react-icons/fa"
const Project = ({ description, title, github, stack, url, image, index }) => {
  console.log({ title, url, github, image })
  return (
    <article className="project">
      {image && (
        <Image fluid={image.childImageSharp.fluid} className="project-img" />
      )}
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title || "default title"}</h3>

        {description.split("\n").map((item, i) => (
          <p className="project-desc" key={i}>
            {item}
          </p>
        ))}

        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          {title === "Daily Report - Web Program" && (
            <>
              <a href={github}>
                <FaGithubSquare className="project-icon" />
              </a>
              <a href={url}>
                <FaLink className="project-icon" />
              </a>
            </>
          )}
          {title === "Material Management System - Web Program" && (
            <>
              <a href={github}>
                <FaGithubSquare className="project-icon" />
              </a>
              <a href={url}>
                <FaLink className="project-icon" />
              </a>
            </>
          )}
          {title === "Lunch Order System - Web Program" && (
            <>
              <a href={url}>
                <FaLink className="project-icon" />
              </a>
            </>
          )}
          {title === "Agreement Management System" && (
            <>
              <a href={github}>
                <FaGithubSquare className="project-icon" />
              </a>
            </>
          )}
          {title === "Visual Radio - Web Program" && (
            <>
              <a href={url}>
                <FaYoutube className="project-icon" />
              </a>
            </>
          )}
          {title === "Stop Addiction - Smartphone Application" && (
            <>
              <a href={url}>
                <FaYoutube className="project-icon" />
              </a>
            </>
          )}
          {title === "Automatic Trash Can - Embedded System" && (
            <>
              <a href={url}>
                <FaYoutube className="project-icon" />
              </a>
            </>
          )}
          {title === "Escape Room Game - Windows Program" && (
            <>
              <a href={url}>
                <FaYoutube className="project-icon" />
              </a>
            </>
          )}
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
