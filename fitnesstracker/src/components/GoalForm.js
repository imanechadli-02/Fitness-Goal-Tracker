import { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [name, setName] = useState("");
  const [target, setTarget] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddGoal({ id: Date.now(), name, target: parseInt(target), progress: 0 });
    setName("");
    setTarget("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Nom de l'objectif" />
      <input type="number" value={target} onChange={e => setTarget(e.target.value)} placeholder="Objectif (ex: 10000)" />
      <button type="submit">Ajouter</button>
    </form>
  );
}
export default GoalForm;
