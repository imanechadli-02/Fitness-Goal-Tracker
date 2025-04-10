import { useState } from 'react';

function ProgressForm({ goals, onUpdate }) {
  const [selectedGoalId, setSelectedGoalId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(selectedGoalId, parseInt(amount));
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={e => setSelectedGoalId(e.target.value)}>
        <option value="">Choisir un objectif</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>{goal.name}</option>
        ))}
      </select>
      <input type="number" placeholder="Progression du jour" value={amount} onChange={e => setAmount(e.target.value)} />
      <button type="submit">Ajouter progression</button>
    </form>
  );
}
export default ProgressForm;

