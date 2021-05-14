// This code adds content to Index Main section

const links = [{
    label: "Week 01: LocalStorage",
    url: "week01/index.html"
  },
  {
    label: "Week 02: Team Activity",
    url: "week02/index.html"
  },
  {
    label: "Week 03: Quiz Ninja",
    url: "week03/index.html"
  },
  {
    label: "Week 04: Team Activity",
    url: "week04/index.html"
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