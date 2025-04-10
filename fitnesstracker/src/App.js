import { useState, useEffect } from 'react';
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';
import ProgressForm from './components/ProgressForm';
import Summary from './components/Summary';
import { saveGoals, loadGoals } from './utils/localStorage';

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    setGoals(loadGoals());
  }, []);

  useEffect(() => {
    saveGoals(goals);
  }, [goals]);

  const addGoal = (goal) => setGoals([...goals, goal]);

  const deleteGoal = (id) => setGoals(goals.filter(g => g.id !== id));

  const updateProgress = (id, amount) => {
    setGoals(goals.map(g =>
      g.id === parseInt(id) ? { ...g, progress: g.progress + amount } : g
    ));
  };

  return (
    <div className="App">
      <h1>🎯 Fitness Goal Tracker</h1>
      <GoalForm onAddGoal={addGoal} />
      <ProgressForm goals={goals} onUpdate={updateProgress} />
      <GoalList goals={goals} onDelete={deleteGoal} />
      <Summary goals={goals} />
    </div>
  );
}

export default App;
