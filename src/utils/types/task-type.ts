interface UpdateTaskParams {
  taskId: string,
  taskTitle: string,
  taskCompletedStatus: boolean
}

interface DeleteTaskParams {
  taskId: string
}

export type { UpdateTaskParams, DeleteTaskParams }
