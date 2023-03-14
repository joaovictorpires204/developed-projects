import { Task, Tasks } from "../../types/types"
import { DIRECTIONS } from "../../contants/task"
import { CardItem } from "../card-item"


type Props = {
    tasks: Tasks,
    moveTo: (task: Task, position: DIRECTIONS) => void
    deleteTask: (task: Task) => void
    editTask: (task: Task) => void
}


export const Card = ({ tasks, moveTo, deleteTask, editTask }: Props) => {
    return (
        <>
            {tasks.map(task => (
                <CardItem
                    key={task.id}
                    task={task}
                    {...{moveTo, deleteTask, editTask}}
                />
            ))
            }
        </>


    )
}