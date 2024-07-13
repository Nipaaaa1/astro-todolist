import { atom } from 'nanostores'

// Types
interface TaskTypes {
  id: string,
  title: string,
  completedStatus: boolean,
  createdAt: Date
}


export const $tasks = atom<TaskTypes[]>([])

// methods
export const getAllClientTasks = async () => {
  const response = await fetch('/api/tasks')
  const result = await response.json()
  $tasks.set(result.data)
}

export const createClientTask = async (title: string) => {
  const response = await fetch('/api/tasks', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      title
    })
  })
  const result = await response.json()
  $tasks.set([...$tasks.get(), result.data])
}

export const deleteClientTask = async (id: string) => {
  const response = await fetch(`/api/tasks/${id}`, {
    method: 'DELETE'
  })
  const result = await response.json()
  $tasks.set($tasks.get().filter(task => task.id != result.data.id))
}

export const updateClientTask = async (id: string, completedStatus?: boolean, title?: string) => {
  const task = $tasks.get().find(task => task.id == id)
  if (!task) return null
  const response = await fetch(`/api/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      title: title ? title : task.title,
      completedStatus: completedStatus !== undefined ? completedStatus : task.completedStatus
    })
  })
  const result = await response.json()

  $tasks.set($tasks.get().map(task => {
    if (task.id != id) return task
    return {
      id: task.id,
      title: result.data.title,
      completedStatus: result.data.completedStatus,
      createdAt: task.createdAt
    }
  }))
}
