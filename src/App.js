import { useReducer, useState } from "react";
import { render } from "react-dom";
import "./styles.css";

export default function ReducerHook() {
  function reducer(state, action) {
    switch (action.type) {
      case "inc": {
        return state + 1;
      }
      case "dec": {
        return state - 1;
      }
      case "reset": {
        return 0;
      }
      default: {
        return state;
      }
    }
  }
  const [teamOneScore, dispatchTeamOne] = useReducer(reducer, 0);
  const [teamTwoScore, dispatchTeamTwo] = useReducer(reducer, 0);
  const [teamOneName, setTeamOneName] = useState("");
  const [teamTwoName, setTeamTwoName] = useState("");

  const handleTeamOne = () => {
    const t1 = prompt("Enter Team 1");
    if (t1) {
      setTeamOneName(t1);
    }
  };

  const handleTeamTwo = () => {
    const t2 = prompt("Enter Team 2");
    if (t2) {
      setTeamTwoName(t2);
    }
  };

  const handleReset = () => {
    dispatchTeamOne({ type: "reset" });
    dispatchTeamTwo({ type: "reset" });
  };

  return (
    <div>
      <h2>Soccer Score Board</h2>
      <div>
        <h2>TEAM 1</h2>
        <h2>{teamOneName}</h2>
        <h2>GOAL - {teamOneScore}</h2>
        <button onClick={() => dispatchTeamOne({ type: "inc" })}>
          +1
        </button>{" "}
        <button onClick={() => dispatchTeamOne({ type: "dec" })}>-1</button>
      </div>
      <div>
        <h2>TEAM 2</h2>
        <h2>{teamTwoName}</h2>
        <h2>GOAL - {teamTwoScore}</h2>
        <button onClick={() => dispatchTeamTwo({ type: "inc" })}>
          +1
        </button>{" "}
        <button onClick={() => dispatchTeamTwo({ type: "dec" })}>-1</button>
      </div>
      <br />
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
      <br />
      <div>
        <button onClick={handleTeamOne}>Enter Team 1 Name</button>{" "}
        <button onClick={handleTeamTwo}>Enter Team 2 Name</button>
      </div>
    </div>
  );
}
