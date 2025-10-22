"use client"

import { GenerateGameOutput } from '@/utils/courtRoom/generation';
import { useState } from 'react';


export interface GameEvent {
  from?: string;
  court?: string;
  isRevision?: boolean;
  text?: string;
  repeat?: string;
}

export interface Task {
  tabId: number;
  tabName: string;
  tabBody: string;
  isEvent: false;
  edited: boolean;
}

export interface CourtRoomModel {
  events: GameEvent[];
  tasks: Task[];
}

export default function CourtRoomForm() {
  const [timer, setTimer] = useState<{ min: number; sec: number }>({ min: 5, sec: 30 });
  const [difficulty, setDifficulty] = useState<{ scale: number; interval: number }>({ scale: 1.25, interval: 30 });
  const [initialTask, setInitialTask] = useState<string>("Generate me a next.js page that shows card components for a product class");

  const [events, setEvents] = useState<GameEvent[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [generatedModel, setGeneratedModel] = useState<string | null>(null);

  const addEvent = () => {
    setEvents([...events, { from: '', court: '', isRevision: false, text: '', repeat: '' }]);
  };

  const updateEvent = (index: number, field: keyof GameEvent, value: any) => {
    const newEvents = [...events];
    newEvents[index] = { ...newEvents[index], [field]: value };
    setEvents(newEvents);
  };

  const removeEvent = (index: number) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  const addTask = () => {
    const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.tabId)) + 1 : 1;
    setTasks([...tasks, { tabId: newId, tabName: '', tabBody: '', isEvent: false, edited: false }]);
  };

  const updateTask = (index: number, field: keyof Task, value: any) => {
    const newTasks = [...tasks];
    newTasks[index] = { ...newTasks[index], [field]: value };
    setTasks(newTasks);
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleGenerate = () => {
    const model: CourtRoomModel = { events, tasks };
    const generated = GenerateGameOutput(model.tasks, model.events, ((timer.min * 60) + timer.sec))
    setGeneratedModel(generated);
    console.log('Generated Court Room Model:', model);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Court Room Generator</h1>

        <div className="space-y-6">
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Configuration</h2>

            <div className="flex gap-6 mb-4">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-600">Minutes:</label>
                <input
                  type="number"
                  min={0}
                  max={15}
                  value={timer.min}
                  onChange={e => setTimer({ ...timer, min: Number(e.target.value) })}
                  className="w-20 px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-600">Seconds:</label>
                <input
                  type="number"
                  min={0}
                  max={59}
                  value={timer.sec}
                  onChange={e => setTimer({ ...timer, sec: Number(e.target.value) })}
                  className="w-20 px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">Initial Task:</label>
              <input
                type="text"
                value={initialTask}
                onChange={e => setInitialTask(e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter initial task description"
              />
            </div>

            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-600">Difficulty Scale:</label>
                <input
                  type="number"
                  value={difficulty.scale}
                  min={0.75}
                  max={2.50}
                  step={0.05}
                  onChange={e => setDifficulty({ ...difficulty, scale: Number(e.target.value) })}
                  className="w-24 px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-600">Difficulty Interval:</label>
                <input
                  type="number"
                  value={difficulty.interval}
                  onChange={e => setDifficulty({ ...difficulty, interval: Number(e.target.value) })}
                  className="w-24 px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="border-b pb-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Game Events</h2>
              <button
                onClick={addEvent}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                +
                Add Event
              </button>
            </div>

            <div className="space-y-4">
              {events.map((event, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm font-medium text-gray-500">Event {index + 1}</span>
                    <button
                      onClick={() => removeEvent(index)}
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      -
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">From:</label>
                      <input
                        type="text"
                        value={event.from || ''}
                        onChange={e => updateEvent(index, 'from', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., Judge, Lawyer"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">Court:</label>
                      <input
                        type="text"
                        value={event.court || ''}
                        onChange={e => updateEvent(index, 'court', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., Supreme, District"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">Repeat:</label>
                      <input
                        type="text"
                        value={event.repeat || ''}
                        onChange={e => updateEvent(index, 'repeat', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., daily, weekly"
                      />
                    </div>
                    <div className="flex items-center pt-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={event.isRevision || false}
                          onChange={e => updateEvent(index, 'isRevision', e.target.checked)}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Is Revision</span>
                      </label>
                    </div>
                  </div>

                  <div className="mt-3">
                    <label className="block text-xs font-medium text-gray-600 mb-1">Text:</label>
                    <textarea
                      value={event.text || ''}
                      onChange={e => updateEvent(index, 'text', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      placeholder="Event description or message"
                    />
                  </div>
                </div>
              ))}

              {events.length === 0 && (
                <div className="text-center py-8 text-gray-400">
                  No events added yet. Click "Add Event" to create one.
                </div>
              )}
            </div>
          </div>

          <div className="pb-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Tasks</h2>
              <button
                onClick={addTask}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                +
                Add Task
              </button>
            </div>

            <div className="space-y-4">
              {tasks.map((task, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm font-medium text-gray-500">Task {index + 1}</span>
                    <button
                      onClick={() => removeTask(index)}
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      -
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">Tab ID:</label>
                      <input
                        type="number"
                        value={task.tabId}
                        onChange={e => updateTask(index, 'tabId', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">Tab Name:</label>
                      <input
                        type="text"
                        value={task.tabName}
                        onChange={e => updateTask(index, 'tabName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., Documentation, Code"
                      />
                    </div>
                  </div>

                  <div className="mt-3">
                    <label className="block text-xs font-medium text-gray-600 mb-1">Tab Body:</label>
                    <textarea
                      value={task.tabBody}
                      onChange={e => updateTask(index, 'tabBody', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={4}
                      placeholder="Task content or instructions"
                    />
                  </div>

                  <div className="mt-3 flex items-center">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={task.edited}
                        onChange={e => updateTask(index, 'edited', e.target.checked)}
                        className="w-4 h-4 text-green-600 rounded focus:ring-2 focus:ring-green-500"
                      />
                      <span className="text-sm text-gray-700">Edited</span>
                    </label>
                  </div>
                </div>
              ))}

              {tasks.length === 0 && (
                <div className="text-center py-8 text-gray-400">
                  No tasks added yet. Click "Add Task" to create one.
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={handleGenerate}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium text-lg"
            >
              Generate Court Room Model
            </button>
          </div>

          {generatedModel && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Generated Model Preview:</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-scroll max-h-96 text-xs">
                {generatedModel}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
