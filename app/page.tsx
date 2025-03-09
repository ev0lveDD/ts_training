'use client';

import { useState } from "react";
import ComponentsProps from "./ComponentsProps";
import goalsImg from "../public/goals.jpg";
import CourseGoals from "./CourseGoals";
import NewGoal from "./NewGoal";

export default function Home() {

  const [goals, setGoals] = useState([
    {
      id: 1, 
      title: 'Learn TS', 
      description: 'Learn TS from the ground up'
    },
    {
      id: 2, 
      title: 'Practice TS', 
      description: 'Practice working with TypeScript'
    },
    ]);

    function handleDeleteGoal(id: number) {
      setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id)); // function must be passed so that it is based on the old version of the state
    }

    function handleAddGoal(text: string, summary: string) {
      setGoals((prevGoals) => 
        prevGoals.concat({id: Math.random(), title: text, description: summary})
      // concat add new array item, and returns new copy of the array
      );
    }

  return (
      <main>
        <ComponentsProps image={{src: goalsImg, alt: 'A list of goals'}}>
          <h1>Your Course Goals</h1>
        </ComponentsProps>
        <CourseGoals goals={goals} onDelete={handleDeleteGoal}/>
        <NewGoal onAdd={handleAddGoal}/>
      </main>
  );
}
