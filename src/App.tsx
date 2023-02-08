import React from "react"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import PokemonList from "./components/List/PokemonList"
import { HumanSizeProvider } from "./context/humanSize"
import { Active, PokemonProvider } from "./context/activePokemon"

const MemoizedPokemonList = React.memo(PokemonList)

function App() {
  const [activePokemon, setActivePokemon] = useState<Active>(undefined)
  const [humanSize, setHumanSize] = useState(175)
  return (
    <Layout>
      <HumanSizeProvider setHumanSize={setHumanSize} humanSize={humanSize}>
        <PokemonProvider
          activePokemon={activePokemon}
          setActivePokemon={setActivePokemon}
        >
          <MemoizedPokemonList />
          <Outlet />
        </PokemonProvider>
      </HumanSizeProvider>
    </Layout>
  )
}

export default App
