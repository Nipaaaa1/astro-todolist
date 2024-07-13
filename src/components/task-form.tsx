import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { createClientTask } from '@/store/store'

export const TaskForm = () => {
  const [input, setInput] = useState('')

  const handleSubmit = async () => {
    if (!input) return null
    await createClientTask(input)
    setInput('')
  }

  return (
    <div className="w-full flex gap-2">
      <Input value={input} onChange={(e) => setInput(e.target.value)} className='flex-1' placeholder='Enter new task' />
      <Button onClick={handleSubmit} className='px-4 py-2' type='submit'>Add Task </Button>
    </div>
  )
}
