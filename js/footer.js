// This module creates a Footer section

const footerText = document.createElement('p');
footerText.className = 'footer__text';
footerText.textContent = 'Gonzalo Palacios © 2021';

const textSeparator = document.createElement('span');
textSeparator.textContent = " | ";

const breakLine = document.createElement('br');

const homePage = document.createElement('a');
homePage.setAttribute('href', 'https://gnzlplcs.github.io/portfolio/');
homePage.textContent = "Home";

const telegramLink = document.createElement('a');
telegramLink.setAttribute('href', 'https://t.me/gnzlplcs');
telegramLink.setAttribute('target', '_blank');
telegramLink.setAttribute('rel', 'noopener noreferrer');
telegramLink.textContent = "Send me a message by Telegram";

footerText.appendChild(textSeparator);
footerText.appendChild(homePage);
footerText.appendChild(breakLine);
footerText.appendChild(telegramLink)

document.querySelector('footer.footer').appendChild(footerText);