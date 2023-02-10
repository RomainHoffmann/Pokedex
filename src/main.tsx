import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import Error from "./components/Pages/Error"
import PokemonView from "./components/View/PokemonView"
import "./index.css"

const router = createBrowserRouter(
  ["/"].map((path) => {
    return {
      path: path,
      element: <App />,
      errorElement: <Error />,
      children: [
        { path: "/:name", element: <PokemonView />, errorElement: <Error /> },
      ],
    }
  })
)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
