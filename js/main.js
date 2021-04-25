const links = [{
    label: "Week 01: Create a portfolio",
    url: "week01/index.html"
  },
  {
    label: "Week 02",
    url: "week02/index.html"
  },
  {
    label: "Week 03",
    url: "week03/index.html"
  }
]

const createContent = () => {
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