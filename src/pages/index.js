import React from "react"
import Showcase from "../components/Showcase/Showcase"
import Skills from "../components/Skills/Skills"
import Client from "../components/Client/Client"
import SortingAlgo from "../components/SortingAlgo/SortingAlgo"
import VanillaJSApps from "../components/VanillaJSApps/VanillaJSApps"
import Footer from "../components/Footer/Footer"

const IndexPage = () => {
  return (
    <div>
      <Showcase />
      <Skills />
      <Client />
      <SortingAlgo />
      <VanillaJSApps />
      <Footer />
    </div>
  )
}
export default IndexPage
