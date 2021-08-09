import { Container } from "../styles/home"
import Header from "../components/Header"
import User from "../components/User"
import About from "../components/About"
import Skills from "../components/Skills"

export default function Home() {

  return (
  < >
    <Container>
      <Header />
      <User />
    </Container>
    <About />
    <Skills />
  </>
  )
}
