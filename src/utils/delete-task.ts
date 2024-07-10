import { db } from "../db"
import type { DeleteTaskParams } from "./types/task-type"

export const deleteTask = async ({ taskId }: DeleteTaskParams) => {
  return await db.task.delete({
    where: {
      id: taskId
    }
  })
}
