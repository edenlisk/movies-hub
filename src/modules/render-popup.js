// import { movieName } from './display-cards.js';
import movieName from './movieName.js';

const modalContent = document.querySelector('.modal-content');
const updatePopup = async (uniqueId) => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const data = await response.json();
  await data.forEach((dt, index) => {
    if (index === uniqueId) {
      document.querySelector('.itemNAme').innerHTML = dt.name;
      document.querySelector('.popup-image').src = dt.image.original;
      document.querySelector('.movie-duration').innerText = `Duration: ${dt.averageRuntime} minutes`;
      document.querySelector('.movie-status').innerText = `Status: ${dt.status}`;
      document.querySelector('.movie-type').innerText = `Type: ${dt.type}`;
      document.querySelector('.movie-language').innerText = `Language: ${dt.language}`;
    }
  });
};

export const openmodal = (identifier) => {
  const commentsClick = document.querySelectorAll('.comments');
  commentsClick.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      if (movieName(identifier) === e.currentTarget.id) {
        document.querySelector('.modal-content').classList.remove('d-none');
        // update content of popup
        updatePopup(index);
      }
    });
  });
};

const closeModal = () => {
  document.querySelector('.bi-type-bold').addEventListener('click', () => {
    document.querySelector('.modal-content').classList.add('d-none');
  });
  document.querySelector('.desktopclose').addEventListener('click', () => {
    document.querySelector('.modal-content').classList.add('d-none');
  });
};

export const RenderpopUp = () => {
  const modalBody = document.createElement('div');
  modalBody.classList.add(
    'modal-body',
    'border',
    'border-4',
    'border-dark',
    'justify-content-center',
  );

  const imgAndcls = document.createElement('div');
  imgAndcls.classList.add(
    'container',
    'd-block',
    'd-md-flex',
    'p-3',
    'justify-content-center',
    'imgAndcls',
  );
  imgAndcls.innerHTML = ` 
  <div class="d-flex d-md-none  container justify-content-end">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    fill="currentColor"
    class="bi bi-type-bold d-flex d-md-none "
    viewBox="0 0 16 16"
    data-bs-dismiss="modal"
    >
    <path class="container-fluid closeMobile"
      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
    />
    </svg>
    </div>
    <img
    src="#"
    alt=""
    class="img-fluid popup-image"
    style="max-height: 30rem; width: 65%"
    />
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="67"
    height="67"
    fill="currentColor"
    class="bi bi-type-bold d-none d-md-flex desktopclose"
    viewBox="0 0 16 16"
    >
    <path
      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
    />
    </svg>`;

  const itemNAme = document.createElement('h2');
  itemNAme.classList.add('text-center', 'itemNAme');
  itemNAme.innerHTML = 'space 3';

  const itemDetails = document.createElement('div');
  itemDetails.classList.add('container', 'text-center', 'details');
  itemDetails.innerHTML = `   <div class="row row2">
    <div class="col py-2">
      <p class="mb-0 movie-type">Fuel: titanium</p>
    </div>
    <div class="col py-2">
      <p class="mb-0 movie-language">Fuel: titanium</p>
    </div>
    </div>
    <div class="row row2">
    <div class="col py-2">
      <p class="mb-0 movie-duration">Fuel: titanium</p>
    </div>
    <div class="col py-2">
      <p class="mb-0 movie-status">Fuel: titanium</p>
    </div>
    </div>`;

  modalBody.append(
    imgAndcls,
    itemNAme,
    itemDetails,

  );
  modalContent.appendChild(modalBody);
  closeModal();
  // openmodal(identifier)
};