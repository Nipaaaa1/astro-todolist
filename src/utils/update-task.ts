import { db } from "../db"
import type { UpdateTaskParams } from "./types/task-type"

export const updateTask = async ({ taskId, taskTitle, taskCompletedStatus }: UpdateTaskParams) => {
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
      title: taskTitle ? taskTitle : currentTask?.title,
      completedStatus: taskCompletedStatus ? taskCompletedStatus : currentTask?.completedStatus
    }
  })
}
