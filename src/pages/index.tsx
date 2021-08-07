import { Container } from "../styles/home"
import Header from "../components/Header"
import User from "../components/User"
import About from "../components/About"
import Skills from "../components/Skills"
import { useRef } from "react"
export default function Home() {
  return (
  <>
    <Container>
      <Header />
      <User />
    </Container>
    <About />
    <Skills />
  </>
  )
}
