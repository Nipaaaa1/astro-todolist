import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { $tasks, deleteClientTask, updateClientTask } from "@/store/store"
import { cn } from "@/lib/utils"
import { useStore } from "@nanostores/react"
import { useEffect, useState } from "react"
import { useDebounce } from "@/utils/hooks"

interface TaskItemProps {
  id: string,
}

export const TaskItem = ({ id }: TaskItemProps) => {
  const Task = useStore($tasks).find(value => value.id == id)
  if (!Task) return null
  const [input, setInput] = useState(Task.title)
  const debounceValue = useDebounce(input)


  useEffect(() => {
    const updateTitle = async () => {
      await updateClientTask(id, undefined, debounceValue)
    }
    updateTitle()
  }, [debounceValue])

  return (
    <li className={cn("flex w-full gap-2 items-center border rounded-md p-2", Task.completedStatus && "border-emerald-600")}>
      <Input onChange={(e) => setInput(e.target.value)} value={input} />
      <div className="flex gap-1">
        <Button onClick={() => deleteClientTask(Task.id)} variant="destructive">
          X
          <span className="sr-only">
            Delete Task
          </span>
        </Button>
        <Button onClick={() => updateClientTask(Task.id, !Task.completedStatus)} variant="secondary" className="bg-emerald-600 text-white">
          √
          <span className="sr-only">
            Mark Task as Done
          </span>
        </Button>
      </div>
    </li>
  )
}
