
type Goal = {
    id: number;
    title: string;
    description: string;
};

interface CourseGoalsProps {
    goals: Goal[]; // array of Goal type objects - We could use interface instead of type
    onDelete: (id: number) => void // Function type
}

export default function CourseGoals({ goals, onDelete }: CourseGoalsProps) {
// We could write this (export function) as const CourseGoals: FC<CourseGoalsProps> = (props) => { } // FC is functional component

    return(
        <ul>
            {goals.map(goal => (
                <li key={goal.id}>
                    <article>
                        <div>
                            <h2>{goal.title}</h2>
                            <p>{goal.description}</p>
                        </div>
                        <button onClick={() => onDelete(goal.id)}>Delete</button>
                    </article>
                </li>
            ))}
        </ul>
    );
}