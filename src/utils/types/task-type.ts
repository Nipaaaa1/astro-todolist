interface UpdateTaskParams {
  taskId: string,
  title: string,
  completedStatus: boolean
}

interface DeleteTaskParams {
  taskId: string
}

export type { UpdateTaskParams, DeleteTaskParams }
