// This code adds content to Index Main section

const links = [{
    label: "Week 01: Weekly Report / LocalStorage",
    url: "week01/index.html"
  },
  {
    label: "Week 02: Weekly Report / Team Activity",
    url: "week02/index.html"
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