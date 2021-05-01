// This module creates a Header section

const headerTitle = document.createElement('h1');
headerTitle.className = 'header__title';
headerTitle.textContent = 'WDD 330 Assignments';

const headerSubtitle = document.createElement('p');
headerSubtitle.className = 'header__subtitle';
headerSubtitle.textContent = 'Web Frontend Development II';

document.querySelector('header.header').appendChild(headerTitle);
document.querySelector('header.header').appendChild(headerSubtitle);