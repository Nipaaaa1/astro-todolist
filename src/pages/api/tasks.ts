import type { APIRoute } from "astro";
import { getAllTask } from "../../utils/get-task";
import { createNewTask } from "../../utils/create-task";

export const GET: APIRoute = async () => {
  try {
    const tasks = await getAllTask()
    return new Response(JSON.stringify({
      status: 200,
      data: tasks
    }))
  } catch (error) {
    return new Response(JSON.stringify({
      status: 500,
      message: error
    }))
  }
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json()

    const newTask = await createNewTask(body.title)
    return new Response(JSON.stringify({
      data: newTask,
      status: 200
    }))
  } catch (error) {
    return new Response(JSON.stringify({
      message: error,
      status: 500
    }))
  }
}
