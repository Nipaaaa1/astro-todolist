import type { APIRoute } from "astro";
import { updateTask } from "../../../utils/update-task";
import { deleteTask } from "../../../utils/delete-task";

export const PUT: APIRoute = async ({ params, request }) => {

  try {
    const taskId = params.taskId
    const newTaskData = await request.json()

    if (!newTaskData) {
      throw "Please add a data"
    }

    const newTask = await updateTask({
      taskId,
      ...newTaskData
    })

    return new Response(JSON.stringify({
      data: newTask,
      status: 200
    }))
  } catch (error) {
    return new Response(JSON.stringify({
      message: error,
      status: 500
    })
    )
  }
}

export const DELETE: APIRoute = async ({ params }) => {
  try {
    const taskId = params.taskId
    if (!taskId) {
      throw new Error
    }
    const deletedTask = await deleteTask({
      taskId
    })
    return new Response(JSON.stringify({
      data: deletedTask,
      status: 200
    }))
  } catch (error) {
    return new Response(JSON.stringify({
      message: error,
      status: 500
    }))
  }
}
