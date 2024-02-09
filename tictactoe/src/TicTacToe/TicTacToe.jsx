import React, { useState } from "react";
import "./TicTacToe.css";
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";

const TicTacToe = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".Block"), {
      max: 5,
      speed: 10,
      glare: true,
      "max-glare": 1,
    });
  }, []); // Empty dependency array to ensure it runs once
  return (
    <div className="container">
      <div className="board">
        <Board />
      </div>
      <button className="reset">Reset</button>
    </div>
  );
};

function Board({ dot, cross }) {
  const [marks, setMarks] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [player, setPlayer] = useState(1);

  //   const reset = () => {
  //     const [marks, setMarks] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  //   };

  useEffect(() => {
    const combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let c of combination) {
      if (marks[c[0]] === 1 && marks[c[1]] === 1 && marks[c[2]] === 1) {
        console.log("Player 1 Wins");
      }
      if (marks[c[0]] === 2 && marks[c[1]] === 2 && marks[c[2]] === 2) {
        console.log("Player 2 Wins");
      }
    }
  }, [marks]);

  const changeMark = (i) => {
    const m = [...marks];
    if (m[i] === 0) {
      m[i] = player;
      setMarks(m);
      setPlayer(player === 1 ? 2 : 1);
    } else {
      alert("Please Click on Another Block");
    }
  };
  return (
    <div className="board">
      <div>
        <Block changeMark={changeMark} mark={marks[0]} position={0}></Block>
        <Block changeMark={changeMark} mark={marks[1]} position={1}></Block>
        <Block changeMark={changeMark} mark={marks[2]} position={2}></Block>
      </div>
      <div>
        <Block changeMark={changeMark} mark={marks[3]} position={3}></Block>
        <Block changeMark={changeMark} mark={marks[4]} position={4}></Block>
        <Block changeMark={changeMark} mark={marks[5]} position={5}></Block>
      </div>
      <div>
        <Block changeMark={changeMark} mark={marks[6]} position={6}></Block>
        <Block changeMark={changeMark} mark={marks[7]} position={7}></Block>
        <Block changeMark={changeMark} mark={marks[8]} position={8}></Block>
      </div>
    </div>
  );
}

function Block({ mark, changeMark, position }) {
  return (
    <div className="imgContainer">
      <div
        className={`Block mark${mark}`}
        onClick={(e) => changeMark(position)}
      ></div>
    </div>
  );
}

export default TicTacToe;
