import { ReactNode } from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import Footer from "./Footer"
import Header from "./Header"
import PokeballBackground from "./PokeballBackground"

const Layout = ({ children }: { children: ReactNode }) => {
  const activePokemon = useAppSelector((state) => state.activePokemon)

  return (
    <>
      <Header></Header>

      <main>
        <PokeballBackground></PokeballBackground>
        {children}
      </main>
      <Footer></Footer>
    </>
  )
}

export default Layout
