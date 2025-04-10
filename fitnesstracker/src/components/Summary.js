function Summary({ goals }) {
    const total = goals.length;
    const completed = goals.filter(g => g.progress >= g.target).length;
    const avgProgress = goals.length ? (goals.reduce((sum, g) => sum + (g.progress / g.target) * 100, 0) / total).toFixed(1) : 0;
  
    return (
      <div>
        <h3>Résumé</h3>
        <p>Objectifs complétés : {completed}/{total}</p>
        <p>Progression moyenne : {avgProgress}%</p>
      </div>
    );
  }
  export default Summary;
  