import { db } from "../db"

interface updateTaskProps {
  taskId: string,
  taskTitle?: string,
  taskCompleted?: boolean
}

export const updateTask = async ({ taskId, taskTitle, taskCompleted }: updateTaskProps) => {
  const currentTask = await db.task.findUnique({
    where: {
      id: taskId
    }
  })

  await db.task.update({
    where: {
      id: taskId
    },
    data: {
      title: taskTitle ? taskTitle : currentTask?.title,
      completedStatus: taskCompleted ? taskCompleted : currentTask?.completedStatus
    }
  })
}
