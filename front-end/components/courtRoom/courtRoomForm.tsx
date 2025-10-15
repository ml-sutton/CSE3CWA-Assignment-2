"use client"

import { useState } from "react"

export default function CourtRoomForm() {
  const [timer, setTimer] = useState<{ min: number, sec: number }>({ min: 5, sec: 30 });
  const [difficulty, setDifficulty] = useState<{ scale: number, interval: number }>({ scale: 1.25, interval: 30 });
  const [task, setTask] = useState<string>("Generate me a next.js page that shows card components for a product class");
  return (
    <div className="w-full">
      <div className="">
        <h1>Court Room generator</h1>
      </div>
      <form action="">
        <div className="flex gap-4">
          <label htmlFor="">minutes</label>
          <input type="number" min={0} max={15} value={timer.min} onChange={event => setTimer({ ...timer, min: Number(event.target.value) })} className="w-fit border-2" />
          <label htmlFor="">seconds</label>
          <input type="number" min={0} max={59} value={timer.sec} onChange={event => setTimer({ ...timer, sec: Number(event.target.value) })} className="w-fit border-2" />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <label htmlFor="initial-task">Initial task</label>
            <input type="text" id="initial-task" name="initial-task" placeholder="initial task" className="" value={task} onChange={event => setTask(event.target.value)} />
          </div>

          <label htmlFor="">Difficulty scaler</label>
          <input type="number" value={difficulty.scale} min={0.75} max={2.50} onChange={event => setDifficulty({ ...difficulty, scale: Number(event.target.value) })} className="w-fit border-2" />
          <label htmlFor="">Difficulty interval</label>
          <input type="number" value={difficulty.interval} onChange={event => setDifficulty({ ...difficulty, interval: Number(event.target.value) })} className="w-fit border-2" />
        </div>
      </form>
    </div>
  )
}
