import { db } from "../db"

interface deleteTaskProps {
  taskId: string
}

export const deleteTask = async ({ taskId }: deleteTaskProps) => {
  await db.task.delete({
    where: {
      id: taskId
    }
  })
}
