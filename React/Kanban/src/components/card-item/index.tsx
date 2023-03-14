import S from "../../assets/styles/card"
import Edit from '../../assets/images/edit.png'
import Left from '../../assets/images/left-arrow.png'
import Trash from '../../assets/images/trash.png'
import Right from '../../assets/images/right-arrow.png'
import Cancel from '../../assets/images/cancel.png'
import Save from '../../assets/images/save.png'
import { DIRECTIONS, TASK_STATUS } from "../../contants/task"
import { NewTaksProps, Task } from "../../types/types"
import { ChangeEvent, useState } from "react"

type Props = {
    task: Task
    moveTo: (task: Task, position: DIRECTIONS) => void
    deleteTask: (task: Task) => void
    editTask: (task: Task) => void
}

export const CardItem = ({ task, moveTo, deleteTask, editTask }: Props) => {
    const [showEditableTask, setShowEditableTask] = useState(false)
    const [card, setCard] = useState<NewTaksProps>({
        title: task.title,
        content: task.content
    })

    const moveToRight = () => {
        moveTo(task, DIRECTIONS.RIGHT)
    }

    const moveToLeft = () => {
        moveTo(task, DIRECTIONS.LEFT)
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = event.target

        setCard(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    const handleCancel = () => {
        setShowEditableTask(false)
        setCard({
            title: task.title,
            content: task.content
        })
    }

    const hnadleSave = (): void => {
        editTask({
            ...task,
            title: card.title,
            content: card.content
        })
        setShowEditableTask(false)
    }


    return (
        <S.Card>
            <div>
                {showEditableTask ? (
                    <div>
                        <S.Input name="title" value={card.title} onChange={handleChange} />
                        <S.Input name="content" value={card.content} onChange={handleChange} as="textarea" />
                        <div>
                            <S.FooterCard
                                onClick={handleCancel}
                                src={Cancel}
                                style={{ marginLeft: "10px" }} />
                            <S.FooterCard
                                src={Save}
                                style={{ marginLeft: "220px" }}
                                onClick={hnadleSave} />
                        </div>
                    </div>

                ) : (
                    <>
                        <S.CardHeader>
                            <h4>{task.title}</h4>
                            <S.CardHeaderEdit
                                onClick={() => setShowEditableTask(true)}
                                src={Edit} alt="" height={"20px"} />
                        </S.CardHeader>
                        <p>{task.content}</p>
                        <div>
                            {task.status !== TASK_STATUS.TODO && <S.FooterCard
                                onClick={moveToLeft}
                                src={Left} alt="" style={{ marginLeft: "10px" }} />}
                            <S.FooterCard
                                onClick={() => deleteTask(task)}
                                src={Trash} alt="" style={{ marginLeft: "115px" }} />
                            {task.status !== TASK_STATUS.DONE && <S.FooterCard
                                onClick={moveToRight}
                                src={Right} alt="" style={{ marginLeft: "220px" }} />}
                        </div>
                    </>
                )}
            </div>
        </S.Card>
    )
}