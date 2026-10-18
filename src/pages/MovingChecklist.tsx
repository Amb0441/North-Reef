import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Circle, Home, Truck, Box, Key } from 'lucide-react';

type Task = { id: string; text: string; completed: boolean };
type Category = { title: string; icon: React.ReactNode; tasks: Task[] };

const initialData: Category[] = [
  {
    title: "4 Weeks Before Moving",
    icon: <Home className="w-6 h-6" />,
    tasks: [
      { id: '1', text: "Book a moving company or hire a truck", completed: false },
      { id: '2', text: "Start decluttering: sell, donate, or throw away unwanted items", completed: false },
      { id: '3', text: "Order moving boxes, tape, and bubble wrap", completed: false },
      { id: '4', text: "Notify your current landlord of your move-out date (if renting)", completed: false },
    ]
  },
  {
    title: "2 Weeks Before",
    icon: <Box className="w-6 h-6" />,
    tasks: [
      { id: '5', text: "Start packing non-essential items (books, out-of-season clothes)", completed: false },
      { id: '6', text: "Arrange transfer of utilities (power, internet, gas, water)", completed: false },
      { id: '7', text: "Update your address with banks, insurance, and subscriptions", completed: false },
      { id: '8', text: "Plan your meals to empty the freezer and pantry", completed: false },
    ]
  },
  {
    title: "Moving Day",
    icon: <Truck className="w-6 h-6" />,
    tasks: [
      { id: '9', text: "Pack an 'essentials' box (kettle, mugs, toilet paper, chargers)", completed: false },
      { id: '10', text: "Record utility meter readings at both old and new properties", completed: false },
      { id: '11', text: "Do a final sweep and clean of all rooms", completed: false },
      { id: '12', text: "Lock all doors, windows, and return the keys", completed: false },
    ]
  }
];

export function MovingChecklist() {
  const [categories, setCategories] = useState<Category[]>(initialData);

  const toggleTask = (catIndex: number, taskId: string) => {
    const newCategories = [...categories];
    const task = newCategories[catIndex].tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      setCategories(newCategories);
    }
  };

  const calculateProgress = () => {
    let total = 0;
    let completed = 0;
    categories.forEach(cat => {
      cat.tasks.forEach(t => {
        total++;
        if (t.completed) completed++;
      });
    });
    return Math.round((completed / total) * 100);
  };

  const progress = calculateProgress();

  return (
    <div className="w-full bg-slate-50 min-h-screen pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-6">
            Interactive <span className="text-brand">Moving Checklist</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Moving house can be stressful. Use our interactive timeline to keep track of what you need to do, and when you need to do it.
          </p>

          {/* Progress Bar */}
          <div className="bg-white p-6 rounded-sm shadow-sm border border-slate-200">
            <div className="flex justify-between items-end mb-2">
              <span className="font-bold text-slate-700 uppercase tracking-wider text-sm">Overall Progress</span>
              <span className="font-bold text-brand text-xl">{progress}%</span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-brand"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          {categories.map((cat, catIdx) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-sm shadow-md border border-slate-200 overflow-hidden"
            >
              <div className="bg-slate-900 text-white p-5 flex items-center gap-3">
                <div className="text-brand">{cat.icon}</div>
                <h2 className="text-xl font-bold font-outfit">{cat.title}</h2>
              </div>
              <div className="p-2">
                {cat.tasks.map(task => (
                  <button
                    key={task.id}
                    onClick={() => toggleTask(catIdx, task.id)}
                    className="w-full flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors text-left border-b border-slate-100 last:border-0 group"
                  >
                    <div className={`${task.completed ? 'text-green-500' : 'text-slate-300 group-hover:text-slate-400'} transition-colors shrink-0`}>
                      {task.completed ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                    </div>
                    <span className={`text-lg transition-colors ${task.completed ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                      {task.text}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
