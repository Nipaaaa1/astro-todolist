import { db } from "../db"

export const getAllTask = async () => {
  return await db.task.findMany()
}
