export const saveGoals = (goals) => {
    localStorage.setItem('fitness_goals', JSON.stringify(goals));
  };
  
  export const loadGoals = () => {
    const data = localStorage.getItem('fitness_goals');
    return data ? JSON.parse(data) : [];
  };
  