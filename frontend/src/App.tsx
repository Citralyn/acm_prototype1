import { Route, Routes, HashRouter } from "react-router";

import Layout from "./layouts/Layout.tsx"
import Home from "./pages/Home.tsx"
import Board from "./pages/Board.tsx";
import Compete from "./pages/Compete.tsx";
import Learn from "./pages/Learn.tsx";
import Practice from "./pages/Practice.tsx";

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
          </Route>

          <Route path="/board" element={<Layout />}>
            <Route index element={<Board />}></Route>
          </Route>

          <Route path="/compete" element={<Layout />}>
            <Route index element={<Compete />}></Route>
          </Route>

          <Route path="/practice" element={<Layout />}>
            <Route index element={<Practice />}></Route>
          </Route>

          <Route path="/learn" element={<Layout />}>
            <Route index element={<Learn />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
