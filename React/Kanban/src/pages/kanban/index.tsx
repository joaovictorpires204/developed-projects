import { useCallback, useState } from "react"
import S from "../../assets/styles/grid"
import { Card } from "../../components/card"
import { Column } from "../../components/columns"
import { NewTask } from "../../components/new-task"
import { TASK_STATUS } from "../../contants/task"
import { Task, Tasks } from "../../types/types"
import { DIRECTIONS } from "../../contants/task"

export const Kanban = () => {
    const [tasks, setTasks] = useState<Tasks>([])

    const addTask = useCallback((task: Task): void => {
        setTasks(prevTasks => [...prevTasks, task])
    }, [])

    const uptadeTask = useCallback((taskUptaded: Task) => {
        setTasks(prevValue => prevValue.map(task => (task.id === taskUptaded.id ? taskUptaded : task)))
    }, [])

    const deleteTask = useCallback((task: Task) => {
        setTasks(preValues => preValues.filter(item => item.id !== task.id))
    }, [])

    const moveTo = useCallback((task: Task, position: DIRECTIONS): void => {
        if ([TASK_STATUS.DONE, TASK_STATUS.TODO].includes(task.status)) {
            uptadeTask({
                ...task,
                status: TASK_STATUS.DOING
            })
            return
        }

        if (position === DIRECTIONS.LEFT) {
            uptadeTask({
                ...task,
                status: TASK_STATUS.TODO
            })
            return
        }

        uptadeTask({
            ...task,
            status: TASK_STATUS.DONE
        })
    }, [uptadeTask])


    return (
        <S.Container>
            <S.Grid>
                <Column title="NEW" >
                    <NewTask addTask={addTask} />
                </Column>
                <Column title="TODO">
                    {/* <pre>{JSON.stringify(tasks, null, 2)}</pre> */}
                    <Card
                        tasks={tasks.filter(task => task.status === TASK_STATUS.TODO)}
                        moveTo={moveTo}
                        deleteTask={deleteTask} 
                        editTask={uptadeTask}
                        />
                </Column>
                <Column title="DOING">
                    <Card
                        tasks={tasks.filter(task => task.status === TASK_STATUS.DOING)}
                        moveTo={moveTo}
                        deleteTask={deleteTask} 
                        editTask={uptadeTask} />
                </Column>
                <Column title="DONE">
                    <Card
                        tasks={tasks.filter(task => task.status === TASK_STATUS.DONE)}
                        moveTo={moveTo}
                        deleteTask={deleteTask} 
                        editTask={uptadeTask} />
                </Column>
            </S.Grid>
        </S.Container>
    )
}