import React from "react"
import sk from "./skills.module.css"

const Skills = () => {
  return (
    <div className={sk.container}>
      <h1 className={sk.header}>My Skills</h1>
      <div className={sk.skill_inner}>
        <div className={sk.skill_para}>
          <p>
            Through my personal studies I have developed an understanding of
            Computer Science and Web Development Fundementals. I have applied
            these learnings in my work and various projects. Skills I have
            devloped and aim to continuously improve are below:
          </p>
        </div>
        <div className={sk.skill_list}>
          <ul className={sk.skill_list_inner}>
            <li className={sk.skill_list_item}>ES6 Javascript</li>
            <li className={sk.skill_list_item}>HTML & CSS</li>
            <li className={sk.skill_list_item}>React & Gastby</li>
            <li className={sk.skill_list_item}>MongoDB</li>
            <li className={sk.skill_list_item}>SEO</li>
            <li className={sk.skill_list_item}>Git & Github</li>
            <li className={sk.skill_list_item}>Electron</li>
            <li className={sk.skill_list_item}>NodeJS & Express</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
