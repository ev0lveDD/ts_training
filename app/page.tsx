'use client'
import { useState } from "react";

export default function Home() {

  function add(num1: number, num2: number, showResult: boolean, resultPhrase: string) {
    const result = num1 + num2;
    if(showResult) {
      console.log(resultPhrase + result);
    } 
     return resultPhrase + result;
  }
  const [num1, setNum1] = useState<number | undefined>();
  const [num2, setNum2] = useState<number | undefined>();
  const printResult = true;
  const phrase = "The Result is: ";

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <input name="First value" onChange={e=>setNum1(+e.currentTarget.value)! as HTMLInputElement}></input>
        <input name="Second value" onChange={e=>setNum2(+e.currentTarget.value)! as HTMLInputElement}></input>
        <button onClick={() => add(num1, num2, printResult, phrase)}>CHECK</button>
      </main>
    </div>
  );
}
