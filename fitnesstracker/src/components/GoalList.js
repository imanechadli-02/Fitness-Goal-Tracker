function GoalList({ goals, onDelete, onUpdate }) {
    return (
      <div>
        {goals.map(goal => (
          <div key={goal.id}>
            <h4>{goal.name}</h4>
            <p>{goal.progress}/{goal.target}</p>
            <progress value={goal.progress} max={goal.target}></progress>
            <button onClick={() => onDelete(goal.id)}>Supprimer</button>
          </div>
        ))}
      </div>
    );
  }
  export default GoalList;
  