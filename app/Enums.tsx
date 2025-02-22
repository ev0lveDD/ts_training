'use client';
import { useState } from "react";

export default function Enums(){

enum Role { ADMIN, READ_ONLY, AUTHOR }

const person = {
  name: 'Thorfinn',
  age: 30,
  hobbies: ['Sports', 'Cooking', 'Web-Dev'],
  role: Role.ADMIN
}

function add(num1: number, num2: number, showResult: boolean, resultPhrase: string) {
    const result = num1 + num2;
    if(showResult) {
      console.log(resultPhrase + result);
      console.log(person.name);

      for (const hobby of person.hobbies) {
        console.log(hobby.toUpperCase());
      }

      if (person.role === Role.ADMIN) {
        console.log('Is Admin!')
      }
     } 
     return resultPhrase + result;
  }

    const [num1, setNum1] = useState<number>(0);
    const [num2, setNum2] = useState<number>(0);
    const printResult = true;
    const phrase = "The Result is: ";

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <input name="First value" onChange={e=>setNum1(+e.currentTarget.value)! as HTMLInputElement}></input>
        <input name="Second value" onChange={e=>setNum2(+e.currentTarget.value)! as HTMLInputElement}></input>
        <button onClick={() => add(num1, num2, printResult, phrase)}>CHECK</button>
  </main>
  )
}
