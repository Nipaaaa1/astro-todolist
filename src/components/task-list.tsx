import { Button } from '@/components/ui/button'
import { useStore } from '@nanostores/react'
import { $tasks, getAllClientTasks } from '@/store/store'
import { useEffect } from 'react'
import { TaskItem } from './task-item'

export const TaskList = () => {
  const Tasks = useStore($tasks)

  useEffect(() => {
    getAllClientTasks()
  }, [])

  return (
    <ul className="w-full h-auto flex flex-col gap-2">
      {Tasks ? Tasks.map((value) => (
        <TaskItem key={value.id} id={value.id} />
      )) : null}
    </ul>
  )
}
