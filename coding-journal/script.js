const form = document.getElementById('journal-form');
const entriesDiv = document.getElementById('journal-entries');

function loadEntries() {
  const entries = JSON.parse(localStorage.getItem('codingJournal')) || [];
  entriesDiv.innerHTML = '';
  entries.forEach((entry, index) => {
    const div = document.createElement('div');
    div.className = 'entry';
    div.innerHTML = `
      <p><strong>Date:</strong> ${entry.date}</p>
      <p><strong>Worked on:</strong> ${entry.work}</p>
      <p><strong>Learned:</strong> ${entry.learned}</p>
      <p><strong>Mood:</strong> ${entry.mood}</p>
      <button onclick="shareEntry('${entry.date}', '${entry.work}', '${entry.learned}')">📤 Share</button>
      <button onclick="deleteEntry(${index})">🗑️ Delete</button>
    `;
    entriesDiv.appendChild(div);
  });
}

function deleteEntry(index) {
  const entries = JSON.parse(localStorage.getItem('codingJournal')) || [];
  entries.splice(index, 1);
  localStorage.setItem('codingJournal', JSON.stringify(entries));
  loadEntries();
}


function shareEntry(date, work, learned) {
  const text = `Coding Journal Entry\nDate: ${date}\nWorked on: ${work}\nLearned: ${learned}`;
  navigator.clipboard.writeText(text).then(() => {
    alert("Entry copied to clipboard!");
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const entry = {
    date: document.getElementById('date').value,
    work: document.getElementById('work').value,
    learned: document.getElementById('learned').value,
    mood: document.getElementById('mood').value
  };
  const entries = JSON.parse(localStorage.getItem('codingJournal')) || [];
  entries.push(entry);
  localStorage.setItem('codingJournal', JSON.stringify(entries));
  form.reset();
  loadEntries();
});

loadEntries();
