import { db } from "../db"

export const createNewTask = async (newTaskTitle: string) => {
  await db.task.create({
    data: {
      title: newTaskTitle
    }
  })
}
