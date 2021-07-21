// This code adds content to Index Main section

const links = [{
    label: "Week 01: LocalStorage / Weekly Report",
    url: "week01/index.html"
  },
  {
    label: "Week 02: Team Activity / Weekly Report",
    url: "week02/index.html"
  },
  {
    label: "Week 03: Quiz Ninja / Weekly Report",
    url: "week03/index.html"
  },
  {
    label: "Week 04: Tic-Tac-Toe / Weekly Report",
    url: "week04/index.html"
  },
  {
    label: "Week 05: Hikes App / Weekly Report",
    url: "week05/index.html"
  },
  {
    label: "Week 06: ToDo App",
    url: "todo-app/index.html"
  },
  {
    label: "Week 07: Empty (Midterm check)",
    url: "#"
  },
  {
    label: "Week 08: SWAPI (under construction yet)",
    url: "week08/index.html"
  },
  {
    label: "Week 09: Drums / Weekly Report",
    url: "week09/index.html"
  },
  {
    label: "Week 10: Fetch Practice / Weekly Report",
    url: "week10/index.html"
  },
  {
    label: "Week 11: Authentication with JWT / Weekly Report",
    url: "week11/index.html"
  },
  {
    label: "Week 12: Weekly Report",
    url: "week12/index.html"
  },
  {
    label: "Week 13: Weekly Report",
    url: "week13/index.html"
  },
  {
    label: "Week 14: Final Project => Find Words Definitions",
    url: "final-project/index.html"
  }

]

function createContent() {
  let olLinks = document.createElement('ol');
  olLinks.setAttribute('class', 'ol')
  links.forEach(link => {
    let listItem = document.createElement('li');
    let aItem = document.createElement('a');
    aItem.setAttribute('href', `${link.url}`);
    aItem.textContent = `${link.label}`;
    listItem.appendChild(aItem);
    olLinks.appendChild(listItem);
  })
  document.querySelector('section.section').appendChild(olLinks);
}

createContent();