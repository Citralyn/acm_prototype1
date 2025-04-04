import { Route, Routes, HashRouter } from "react-router";

import Layout from "./layouts/Layout.tsx"
import Home from "./pages/Home.tsx"

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
