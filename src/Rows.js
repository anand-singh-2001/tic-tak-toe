import React, { useState } from "react";

const Rows = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  const handeClick = (e, index) => {
    // e.preventDefault()
    const copyState = [...state];
    copyState[index] = xTurn ? "X" : "0";
    setState(copyState);
    setXTurn(!xTurn);
    // console.log(index)
  };

  const newGame = () => {
    setState(Array(9).fill(null));
  };
  const getWinner = () => {
    const winSituations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 6],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let ele of winSituations) {
      const [a, b, c] = ele; //destructuring
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return `${state[a]} won`;
      }
    }

    let filled;
    for (let i in state) {
      // console.log(i);
      if (state[i] !== null) {
        filled = false;
      } else {
        filled = true;
      }
    }
    if (!filled) {
      return `Nobody wins`;
    }

    return false;
  };

  const isWinner = getWinner();

  return (
    <>
      {!isWinner ? (
        <div className="rows">
          {state.map((ele, index) => (
            <div
              className="boxes"
              key={index}
              onClick={(e) => handeClick(e, index)}>
              {ele}
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <h1
            style={{
              fontSize: "100px",
              textShadow: "0 0 3px black",
              color: "white",
            }}>
            {isWinner}
          </h1>
          <button
            onClick={newGame}
            className="restart"
            style={{
              height: "30px",
              width: "200px",
              borderRadius: "5px",
              fontSize: "15px",
              cursor: "pointer",
            }}>
            Restart game
          </button>
        </div>
      )}
    </>
  );
};

export default Rows;
