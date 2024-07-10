import { db } from "../db"

export const getAllTask = async () => {
  const tasks = {
    data: await db.task.findMany()
  }

  return tasks
}
