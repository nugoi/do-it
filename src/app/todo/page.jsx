"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasksArray, setTasksArray] = useState([]);

  const onChange = (e) => {
    setTask(e.target.value);
    console.log(task);
  };

  const addTask = () => {
    setTasksArray((prevTasks) => {
      return [
        ...prevTasks,
        { task: task, completed: false, id: crypto.randomUUID() },
      ];
    });
    setTask("");
  };

  useEffect(() => {
    console.log(tasksArray);
  }, [tasksArray]);

  return (
    <div className={styles.todoCont}>
      <input type="text" onChange={onChange} value={task}/>
      <button onClick={addTask}>Add Task</button>
      <ol className={styles.listCont}>
        {tasksArray.map((t,i,a) => (
          <li key={t.id}>{t.task}</li>
        ))}
      </ol>
    </div>
  );
};

export default Todo;