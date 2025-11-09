const tools = [
    {
  name: "Kahoot!",
  category: "Math", // You can change this to "All Subjects" or "Engagement"
  grade: "K-12",
  description: "Game-based learning platform that makes quizzes fun and interactive.",
  url: "https://kahoot.com"
},
  {
    name: "Khan Academy",
    category: "Math",
    grade: "K-12",
    description: "Free online courses and practice in math and more.",
    url: "https://www.khanacademy.org"
  },
  {
    name: "Scratch",
    category: "Coding",
    grade: "3-8",
    description: "Creative coding platform for kids.",
    url: "https://scratch.mit.edu"
  },
  {
    name: "Newsela",
    category: "Reading",
    grade: "3-12",
    description: "Engaging nonfiction texts at different reading levels.",
    url: "https://newsela.com"
  },
  {
    name: "PhET Simulations",
    category: "Science",
    grade: "6-12",
    description: "Interactive science and math simulations.",
    url: "https://phet.colorado.edu"
  },
  {
    name: "Code.org",
    category: "Coding",
    grade: "K-12",
    description: "Learn computer science with fun activities.",
    url: "https://code.org"
  },
  {
    name: "IXL",
    category: "Math",
    grade: "K-12",
    description: "Personalized learning in math and language arts.",
    url: "https://www.ixl.com"
  },
  {
    name: "Epic!",
    category: "Reading",
    grade: "K-6",
    description: "Digital library for kids with thousands of books.",
    url: "https://www.getepic.com"
  },
  {
    name: "Mystery Science",
    category: "Science",
    grade: "K-5",
    description: "Hands-on science lessons for elementary students.",
    url: "https://mysteryscience.com"
  },
  {
  name: "National Geographic Education",
  category: "Science",
  grade: "3-12",
  description: "Explore geography, science, and conservation through videos, articles, and interactive maps.",
  url: "https://education.nationalgeographic.org"
},
{
  name: "PBS LearningMedia",
  category: "Reading",
  grade: "PreK-12",
  description: "Thousands of free videos, lesson plans, and interactive tools from PBS and partner stations.",
  url: "https://www.pbslearningmedia.org"
},
{
  name: "Smithsonian Learning Lab",
  category: "History",
  grade: "K-12",
  description: "Access millions of digital resources from the Smithsonian’s museums, research centers, and libraries.",
  url: "https://learninglab.si.edu"
}

];


const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('category-filter');
const toolList = document.getElementById('tool-list');

function renderTools(filteredTools) {
  toolList.innerHTML = '';
  filteredTools.forEach(tool => {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.innerHTML = `
  <h3>${tool.name}</h3>
  <p><strong>Category:</strong> ${tool.category}</p>
  <p><strong>Grade:</strong> ${tool.grade}</p>
  <p>${tool.description}</p>
  <a href="${tool.url}" target="_blank">
    <button>🔗 Visit Site</button>
  </a>
  <button onclick="alert('Favorited ${tool.name}!')">⭐ Favorite</button>
`;

    toolList.appendChild(card);
  });
}

function filterTools() {
  const searchTerm = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const filtered = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm) || tool.description.toLowerCase().includes(searchTerm);
    const matchesCategory = category === '' || tool.category === category;
    return matchesSearch && matchesCategory;
  });
  renderTools(filtered);
}

searchInput.addEventListener('input', filterTools);
categoryFilter.addEventListener('change', filterTools);

// Initial render
renderTools(tools);
