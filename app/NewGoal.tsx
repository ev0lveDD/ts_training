import { useRef, type FormEvent } from "react";

interface NewGoalProps {
    onAdd: (text: string, summary: string) => void;
}

export default function NewGoal({ onAdd }: NewGoalProps) {

    const goalRef = useRef<HTMLInputElement>(null); // explicit generic type assignment
    const summaryRef = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const enteredGoal = goalRef.current!.value; // value is the entire input element to which ref was attached, .value because input is represented with the object with value property
        // added ! before . so that we let the function know, that on submit it won't be null

        const enteredSummary = summaryRef.current!.value;

        // validation ...

        onAdd(enteredGoal, enteredSummary);
    }

    return(
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input id="goal" type="text" ref={goalRef}></input>
            </p>
            <p>
                <label htmlFor="summary">Short summary</label>
                <input id="summary" type="text" ref={summaryRef}></input>
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    );
}