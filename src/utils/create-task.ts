import { db } from "../db"

export const createNewTask = async (newTaskTitle: string) => {
  return await db.task.create({
    data: {
      title: newTaskTitle
    }
  })
}
