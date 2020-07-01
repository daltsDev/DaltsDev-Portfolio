import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const CardImg = styled(Img)`
  display: block;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
`

const CardContent = styled.p`
  font-size: 18px;
`
const CardLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: #ef516d;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: 0.5px;
  padding-bottom: 0.3rem;
  transition: 0.2s all cubic-bezier(0.17, 0.67, 0.83, 0.67);
  &:before {
    display: block;
    content: "";
    height: 3px;
    width: 20%;
    background-color: #ef516d;
    position: relative;
    top: 30px;
    transform: scaleX(0);
    transform-origin: right;
    transition: cubic-bezier(0.694, 0, 0.335, 1) transform 0.3s;
  }
  &:after {
    content: "→";
    margin-left: 5px;
    display: inline-block;
    transition: 0.2s border-bottom cubic-bezier(0, 0, 1, 1);
  }
  &:hover:after {
    transform: translateX(10px);
  }
`
const CardLinkGitHub = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(73, 73, 73);
  font-size: 19px;
  font-weight: 700;
  letter-spacing: 0.5px;
  padding-bottom: 0.3rem;
  margin-left: 3rem;
  transition: 0.2s all cubic-bezier(0.17, 0.67, 0.83, 0.67);
  &:after {
    content: "→";
    margin-left: 5px;
    display: inline-block;
    transition: 0.2s all cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }
  &:hover:after {
    transform: translateX(10px);
  }
`
const CardWrapper = styled.div`
  min-width: 310px;
  max-width: 540px;
  height: fit-content;
  font-family: "Muli", sans-serif;
  color: rgb(73, 73, 73);
  :hover {
    ${CardLink}:before {
      transform: scaleX(1);
      transform-origin: left;
    }
    ${CardLink}:after {
      transform: translateX(10px);
    }
    ${CardImg} {
      transform: scale(1.03);
    }
  }
`

const Card = ({ data }) => {
  const { image, headline, content, url, github_url = null } = data
  return (
    <CardWrapper>
      <a href={url}>
        <CardImg fluid={image.childImageSharp.fluid} />
      </a>
      <h2>{headline}</h2>
      <CardContent>{content}</CardContent>
      <CardLink href={url} target="_blank">
        View Site
      </CardLink>
      {github_url != null ? (
        <CardLinkGitHub href={github_url} target="_blank">
          View Code
        </CardLinkGitHub>
      ) : null}
    </CardWrapper>
  )
}

export default Card
