import React from "react"
import SSS from "./showcasesubsection.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ShowcaseSubSection = () => {
  const data = useStaticQuery(graphql`
    query {
      profilePic: file(relativePath: { eq: "profile-pic.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const getAge = (dateString = "1994/06/22") => {
    var today = new Date()
    var birthDate = new Date(dateString)
    var age = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  return (
    <div className={SSS.container}>
      <Img
        fluid={data.profilePic.childImageSharp.fluid}
        className={SSS.sub_image}
      />
      <p className={SSS.sub_content}>
        I am a {getAge()} year old self-taught freelance front end web
        developer. I am a web-development convert having previously worked in
        professional sport.
        <br />
        <br />
        Making the transition in to web development has been exciting,
        fulfilling and challenging. I currently work full-time for MongoDB in
        Cloud Support. Please see my projects below, I hope you enjoy!
      </p>
    </div>
  )
}

export default ShowcaseSubSection
