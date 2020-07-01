import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.div`
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
const FooterFlex = styled.div`
  display: flex;
  flex-direction: row wrap;
  align-items: center;
  justify-content: space-between;
  margin: 4rem 0;
`
const Para = styled.p`
  font-size: 18px;
  color: rgb(73, 73, 73);
`
const ParaA = styled.a`
  font-size: 18px;
  color: rgb(73, 73, 73);
`
const Footer = () => {
  return (
    <FooterWrapper>
      <h1>Get In Touch</h1>
      <Para>
        Please reach out if you're looking for a developer, have a question, or
        just want to connect.
      </Para>
      <FooterFlex>
        <ParaA href="mailto:stephen@stephen-dalton.com">
          stephen@stephen-dalton.com
        </ParaA>
        <Para>Made with Gatsby | {new Date().getFullYear()}</Para>
      </FooterFlex>
    </FooterWrapper>
  )
}

export default Footer
