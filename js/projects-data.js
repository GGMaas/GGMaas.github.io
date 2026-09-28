
const create_collegeProject = (name, description, img, link, year) => ({
  name,
  description,
  img,
  link,
  year
});

const projects = [
  create_collegeProject(
    "Security Center Operation",
    "Project is being worked on!",
    "../img/project3-preview.webp",
    null,
    2
  ),
  create_collegeProject(
    "Unknown",
    "Stay tuned?!",
    "../img/project4-preview.webp",
    null,
    2
  ),
  create_collegeProject(
    "Sustainable locker",
    "A discreet locker designed to combat famine in the Netherlands",
    "../img/project1-preview.webp",
    "https://www.youtube.com/watch?v=v8YRUdYvR-w",
    1
  ),
  create_collegeProject(
    "Hotelator",
    "A simple hotel simulation",
    "../img/project2-preview.webp",
    "https://www.youtube.com/watch?v=6V74E_lxJOQ",
    1
  )
];

function sortProjects(projectList, sortBy) {
  const sorted = [...projectList];

  if (sortBy === 'year-desc') {
      return sorted.sort((a,b) => b.year - a.year);

  } else if (sortBy === ('year-asc')) {
      return sorted.sort((a,b) => a.year - b.year);

  } else if (sortBy === ('name-asc')) {
    return sorted.sort((a,b) => a.name.localeCompare(b.name));

  } else if (sortBy === ('name-desc')) {
    return sorted.sort((a,b) => b.name.localeCompare(a.name));

  } else if (sortBy === 'random') {
    for (let i = sorted.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sorted[i], sorted[j]] = [sorted[j], sorted[i]];
    }
  }
    return sorted;
  }


function renderProjects(projectsList) {
    const years_wrapper = document.getElementById('years-wrapper');
    if (!years_wrapper) return;
    
    const years = [...new Set(projectsList.map(p => p.year))];

    years_wrapper.innerHTML = years.map(year => {
        const yearsProjects = projectsList.filter(p => p.year === year);

        return `
        <div class="year-block">
        <h3 class="year-title">Year ${year}</h3>
        <div class="projects-grid">
          ${yearsProjects.map(p => `
            <article class="project-card">
              <div class="project-image">
                <img src="${p.img}" loading="lazy" alt="Preview van ${p.name}" />
              </div>
              <div class="project-info">
                <h4>${p.name}</h4>
                <p>${p.description}</p>${p.link ? `<a href="${p.link}" target="_blank" class="project-link">Check video</a>` : ''}
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    `;
    }).join('');
}

const sortSelect = document.getElementById('sort-select');
const randomButton = document.getElementById('randomize-btn');

function handleSort (value) {
  const sortedData = sortProjects(projects, value);
  renderProjects(sortedData);
}

handleSort('year-desc'); //initialisatie

if (sortSelect) {
  sortSelect.addEventListener('change', (e) => {
    const selectedValue = e.target.value;

if (randomButton) {
      if (selectedValue === 'random') {
        randomButton.classList.remove('hidden');
      } else {
        randomButton.classList.add('hidden');
      }
    } 
    handleSort(e.target.value);
  });
}

if (randomButton) {
  randomButton.addEventListener('click', () => {
    handleSort('random'); 
  });
}



