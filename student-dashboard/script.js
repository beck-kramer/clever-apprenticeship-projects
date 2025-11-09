const streakCount = document.getElementById('streak-count');
const incrementBtn = document.getElementById('increment');
const resetBtn = document.getElementById('reset');

let streak = localStorage.getItem('studyStreak') || 0;
streakCount.textContent = streak;

incrementBtn.addEventListener('click', () => {
  streak++;
  streakCount.textContent = streak;
  localStorage.setItem('studyStreak', streak);
});

resetBtn.addEventListener('click', () => {
  streak = 0;
  streakCount.textContent = streak;
  localStorage.setItem('studyStreak', streak);
});
