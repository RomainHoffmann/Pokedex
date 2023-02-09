import React from "react"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import PokemonList from "./components/List/PokemonList"
import { Provider } from "react-redux"
import store from "./redux/store"

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <PokemonList />
        <Outlet />
      </Layout>
    </Provider>
  )
}

export default App
