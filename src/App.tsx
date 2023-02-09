import React from "react"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import PokemonList from "./components/List/PokemonList"
import { Provider } from "react-redux"
import store from "./redux/store"

const MemoizedPokemonList = React.memo(PokemonList)

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <MemoizedPokemonList />
        <Outlet />
      </Layout>
    </Provider>
  )
}

export default App
