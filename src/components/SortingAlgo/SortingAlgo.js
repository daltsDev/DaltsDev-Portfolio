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

const SortingAlgo = () => {
  const SortingAlgoData = useStaticQuery(graphql`
    {
      dataJson {
        Sorting_Algorithms {
          Bubble_Sort {
            content
            headline
            url
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            github_url
          }
        }
      }
    }
  `)
  {
    console.log(SortingAlgoData)
  }
  return (
    <ClientWrapper>
      <h1>Sorting Algorithm Visualisers</h1>
      <CardWrapper>
        <Card data={SortingAlgoData.dataJson.Sorting_Algorithms.Bubble_Sort} />
      </CardWrapper>
    </ClientWrapper>
  )
}

export default SortingAlgo
