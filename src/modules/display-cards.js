import { openmodal } from './render-popup.js';
import movieName from './movieName.js';
import { getLikes, postLikes } from './liking.js';
import { countCards } from './counters.js';

const AddLike = (identifier) => {
  const likeBtns = document.querySelectorAll('.bi-heart');
  likeBtns.forEach((lk, index) => {
    lk.addEventListener('click', () => {
      if (identifier === index) {
        lk.classList.add('d-none');
        lk.nextElementSibling.classList.remove('d-none');
        document.querySelector(`.likes${movieName(identifier)}`).innerText = Number(document.querySelector(`.likes${movieName(identifier)}`).innerText) + 1;
        postLikes(movieName(identifier));
      }
    });
  });
};

const row = document.querySelector('.row');

export const RenderCards = (movie, identifier) => {
  const grid = document.createElement('div');
  grid.classList.add('col', 'py-2', 'grid', 'col-md-4', 'movie-card');

  const body = document.createElement('div');
  body.classList.add('card', 'border-0', 'h-100', 'body');
  body.style = 'width: 100%';

  const cardImg = document.createElement('img');
  cardImg.classList.add('p-2', 'card-img-top', 'img-fluid');
  cardImg.src = movie.image.medium; // medium image from tvmaze API

  const likeAndSvg = document.createElement('div');
  likeAndSvg.classList.add('card-body', 'd-flex', 'p-2', 'likeAndSvg');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title', 'container', 'text-start');
  cardTitle.innerHTML = movie.name; // Movie title

  const svgOnly = document.createElement('div');
  svgOnly.classList.add('container', 'text-end', 'svgOnly');
  svgOnly.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-heart text-end"
    viewBox="0 0 16 16"
    >
    <path
      d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
    />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill d-none " viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
    </svg>`;
  const likes = document.createElement('p');
  likes.classList.add('container', 'text-end', 'mb-0', 'p-1', `likes${movieName(identifier)}`);
  likes.innerText = 0; // Card likes
  getLikes(likes, movieName(identifier));

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add(
    'container',
    'd-flex',
    'flex-column',
    'gap-2',
    'px-3',
    'pb-4',
    'buttonsContainer',
  );
  buttonsContainer.innerHTML = `<button id="${movieName(identifier)}" class="btn comments popupOpener border-1 border-dark rounded-0" type="button" ">
    Comments
  </button>
  <button class="btn border-1 border-dark rounded-0" type="button">
    Reservations
  </button>`;

  likeAndSvg.append(cardTitle, svgOnly);
  body.append(cardImg, likeAndSvg, likes, buttonsContainer);

  grid.appendChild(body);
  row.appendChild(grid);
  openmodal(identifier);
  AddLike(identifier);
};

export const retrieveMovie = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const data = await response.json();
  data.forEach((dt, index) => {
    if (dt.id < 10) {
      RenderCards(dt, index);
    }
  });
  countCards(document.querySelectorAll('.movie-card'));
};

export const navigation = () => {
  document.querySelector('.nav-home').addEventListener('click', () => {
    document.querySelector('.home-section').classList.remove('d-none');
    document.querySelector('.about-section').classList.add('d-none');
  });

  document.querySelector('.nav-about').addEventListener('click', () => {
    document.querySelector('.about-section').classList.remove('d-none');
    document.querySelector('.home-section').classList.add('d-none');
  });
};
