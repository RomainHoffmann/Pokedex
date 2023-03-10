import { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"
import PokeballBackground from "./PokeballBackground"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header></Header>
      <main style={{ flex: 1 }}>
        <PokeballBackground></PokeballBackground>
        {children}
      </main>
      <Footer></Footer>
    </>
  )
}

export default Layout
