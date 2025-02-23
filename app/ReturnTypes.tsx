'use client';
import { useState } from "react";

export default function ReturnTypes(){

function add(num1: number, num2: number) {
    return num1 + num2;
  }

  function addAndHandle(n1: number, n2: number, cb: (num: number) => void) { //cb - callback function
    const result = n1 + n2;
    cb(result);
  }

  let combineValues: (a: number, b: number) => number; // Function type
  combineValues = add;

  console.log(combineValues(8, 16));

    const [num1, setNum1] = useState<number>(0);
    const [num2, setNum2] = useState<number>(0);

    const hobbies =['Sports', 'Cooking'];
    const activeHobbies = ['Hiking'];

    activeHobbies.push(...hobbies); // zamiast push można napisać -> const activeHobbies = ['Hiking', ...hobbies]
    console.log(activeHobbies);

    const person = {
        firstName: 'Max',
        age: 30
    };

    const copiedPerson = {...person};
    console.log(copiedPerson);

    const addRest = (...numbers: number[]) => {
        return numbers.reduce((curResult, curValue) => {
            return curResult + curValue;
        }, 0);
    };

    const addedNumbers = addRest(5, 10, 2, 3.7);
    console.log(addedNumbers);

    const [hobby1, hobby2, ...remainingHobbies] = hobbies; // destrukturyzacja tablicy
    console.log(hobbies, hobby1, hobby2);

    const { firstName, age } = person; // destrukturyzacja obiektu
    console.log(firstName, age, person);

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <input className="text-black" name="First value" onChange={e=>setNum1(+e.currentTarget.value)! as HTMLInputElement}></input>
        <input className="text-black" name="Second value" onChange={e=>setNum2(+e.currentTarget.value)! as HTMLInputElement}></input>
        <button onClick={() => addAndHandle(num1, num2, (result) => console.log(result))}>CHECK</button>
  </main>
  )
}
