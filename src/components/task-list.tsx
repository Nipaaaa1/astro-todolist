import { Button } from '@/components/ui/button'
import { useStore } from '@nanostores/react'
import { $tasks } from '@/store/store'
import { useEffect } from 'react'

export const TaskList = () => {
  const Tasks = useStore($tasks)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('/api/tasks')
      const jsonData = await response.json()
      $tasks.set(jsonData.data)
    }
    getData()
  }, [])
  return (
    <ul className="w-full h-auto flex flex-col gap-2">
      {Tasks ? Tasks.map((value) => (
        <li className="p-2 flex gap-2 w-full items-center rounded-md shadow-md">
          <span>X</span>
          <p className="flex-1">{value.title}</p>
          <Button variant="secondary">Edit</Button>
        </li>
      )) : null}
    </ul>
  )
}
