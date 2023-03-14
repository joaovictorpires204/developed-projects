import { TASK_STATUS } from "../contants/task"

export type NewTaksProps = {
    title: string,
    content: string
}

export type TaskStatus = TASK_STATUS.TODO | TASK_STATUS.DOING | TASK_STATUS.DONE

export type Task = NewTaksProps & {
    status: TaskStatus,
    id: string
}

export type Tasks = Task[]




