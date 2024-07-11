import { atom } from 'nanostores'

type TaskStoreTypes = {
  id: string,
  title: string,
  completedStatus: boolean,
  createdAt: Date
}[]

export const $tasks = atom<TaskStoreTypes>([])
