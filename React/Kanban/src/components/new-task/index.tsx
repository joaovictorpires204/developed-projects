import S from "../../assets/styles/card"
import Add from '../../assets/images/add.png'
import { useState } from "react"
import { NewTaksProps, Task } from "../../types/types"
import { TASK_STATUS } from "../../contants/task"

type Props = {
    addTask: (task: Task) => void
}

const DEFAULT_VALUE = {
    title: '',
    content: ''
}

export const NewTask = ({ addTask }: Props) => {
    const [task, setTask] = useState<NewTaksProps>(DEFAULT_VALUE)

    const handleClick = () => {
        addTask({
            ...task,
            id: crypto.randomUUID(),
            status: TASK_STATUS.TODO
        })
        setTask(DEFAULT_VALUE)
    }

    return (
        <>
            <S.Card>
                <S.Input type="text"
                    name="title"
                    placeholder="Title"
                    value={task.title}
                    onChange={event => setTask(prev => ({
                        ...prev,
                        title: event.target.value
                    }))} />
                <S.Input
                    as="textarea"
                    name="content"
                    placeholder="Content"
                    value={task.content}
                    onChange={event => setTask(prev => ({
                        ...prev,
                        content: event.target.value
                    }))}></S.Input>
                <S.FooterCardAdd onClick={handleClick} src={Add} alt="" />
            </S.Card>
            {/* <pre>{JSON.stringify(task, null, 2)}</pre> */}
        </>
    )
}