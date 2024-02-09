import logo from "./logo.svg";
import "./App.css";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";
import TicTacToe from "./TicTacToe/TicTacToe";

function App() {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 1,
      speed: 1,
      glare: true,
      "max-glare": 0.5,
    });
  }, []); // Empty dependency array to ensure it runs once on mount

  return (
    <section>
      <div className="card">
        <TicTacToe />
      </div>
      <button className="reset">Reset</button>
    </section>
  );
}

export default App;
