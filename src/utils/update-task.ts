import { db } from "../db"
import type { UpdateTaskParams } from "./types/task-type"

export const updateTask = async ({ taskId, title, completedStatus }: UpdateTaskParams) => {
  const currentTask = await db.task.findUnique({
    where: {
      id: taskId
    }
  })

  return await db.task.update({
    where: {
      id: taskId
    },
    data: {
      title: title ? title : currentTask?.title,
      completedStatus
    }
  })
}
