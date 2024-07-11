import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { $tasks } from '@/store/store'

export const TaskForm = () => {
  const [input, setInput] = useState<string>()

  const handleSubmit = async () => {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        title: input
      })
    })
    const data = await response.json()
    $tasks.set([...$tasks.get(), data.data])
    setInput('')
  }
  return (
    <div className="w-full flex gap-2">
      <Input value={input} onChange={(e) => setInput(e.target.value)} className='flex-1' placeholder='Enter new task' />
      <Button onClick={handleSubmit} className='px-4 py-2' type='submit'>Add Task </Button>
    </div>
  )
}
