/* eslint-disable require-jsdoc */
'use strict';

// vendors
import 'babel-polyfill';

// components

document.addEventListener('DOMContentLoaded', () => {
  console.log(11);
  const parentRow = document.querySelector('.about-us__row');

  class AboutUsCard {
    constructor(src, name, position, number, href) {
      this.src = src;
      this.name = name;
      this.position = position;
      this.number = number;
      this.href = href;
    }

    render() {
      const element = document.createElement('div');
      element.classList.add('col', 'about-us__card');

      element.innerHTML = `
        <div class="about-us__photo">
          <img src=${this.src} alt="photo">
        </div>
          <div class="about-us__description">
          <h3 class="about-us__name">${this.name}</h3>
          <p class="about-us__position">${this.position}</p>
          <span class="about-us__tel">${this.number}</span>
          <span class="about-us__tel">${this.number}</span>
          <a class="about-us__email" href=${this.href}>Написать письмо</a>
        </div>`;

      parentRow.append(element);
    }
  }

  for (let i = 0; i < 4; i++) {
    new AboutUsCard(
        '"/src/images/bg_photo.jpg"',
        'Иванов Алексей',
        'Ведущий менеджер отдела продаж',
        '+7 (343) 123-45-67 (вн. 102)',
        '#'
    ).render();
  }
});
