import React from "react"
import Card from "../card"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const ClientWrapper = styled.div`
  margin: 10rem 1rem 0 1rem;
  max-width: 1440px;
  min-width: 310px;
  height: auto;
  font-family: "Muli", sans-serif;
  color: rgb(73, 73, 73);
  @media only screen and (min-width: 426px) {
    width: 80%;
    margin: 10rem auto;
  }
`
const CardWrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-gap: 3rem;
  @media only screen and (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    justify-content: center;
    align-items: center;
  }
`

const VanillaJSApps = () => {
  const VanillaJSApps = useStaticQuery(graphql`
    {
      dataJson {
        Vanilla_JS_Apps {
          Spotify_Clone {
            content
            github_url
            headline
            url
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          Hangman {
            content
            github_url
            headline
            url
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          Multi_Day_Weather {
            content
            github_url
            url
            headline
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  {
    console.log(VanillaJSApps)
  }
  return (
    <ClientWrapper>
      <h1>Vanilla JS Apps</h1>
      <CardWrapper>
        <Card data={VanillaJSApps.dataJson.Vanilla_JS_Apps.Multi_Day_Weather} />
        <Card data={VanillaJSApps.dataJson.Vanilla_JS_Apps.Spotify_Clone} />
        <Card data={VanillaJSApps.dataJson.Vanilla_JS_Apps.Hangman} />
      </CardWrapper>
    </ClientWrapper>
  )
}

export default VanillaJSApps
