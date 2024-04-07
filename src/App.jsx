import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./theme/themeprovider";

function App() {
  const [mode, setMode] = useState("b");
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar setMode={setMode} mode={mode}/>
      <main className="p-2 overflow-y-auto mx-auto md:mx-12 lg:mx-24 xl:mx-44 2xl:mx-60">
        <Home mode={mode}/>
      </main>
    </ThemeProvider>
  );
}

export default App;
