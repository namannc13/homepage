import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="p-2 overflow-y-auto mx-auto md:mx-12 lg:mx-24 xl:mx-44 2xl:mx-60">
        <Home />
      </main>
    </>
  );
}

export default App;
