import React, { useState } from "react";

export function Todo() {
  const [myTask1, setMyTask1] = useState("");

  function collectTheTask(event) {
    //Logic to collect the task
    console.log(event.target.value);
    setMyTask1(event.target.value);
  }

  function handleSubmit() {
    // Logic to handle task submission, you can use `myTask1` here
    console.log("Task submitted:", myTask1);
  }

  return (
    <div>
      Enter Task: <input type="text" onChange={collectTheTask} />
      <button onClick={handleSubmit}>Submit</button>
      <h1>{myTask1}</h1>
    </div>
  );
}
