import { countComments } from './counters.js';

export const getLikes = async (element, identifier) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/K0EaQXGcHFVimQravHDE/likes/');
  const data = await response.json();
  if (data.length) {
    for (let i = 0; i < data.length; i += 1) {
      if (data[i].item_id === identifier) {
        element.innerText = data[i].likes;
      }
    }
  }
};

export const postLikes = async (identifier) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/K0EaQXGcHFVimQravHDE/likes/',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: identifier,
      }),
    });
};

export const postComment = async (identifier, name, message) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/K0EaQXGcHFVimQravHDE/comments/',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: identifier,
        username: name,
        comment: message,
      }),
    });
  const commentsContainer = document.querySelector('.comments-container');
  commentsContainer.innerHTML = '';
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/K0EaQXGcHFVimQravHDE/comments?item_id=${identifier}`);
  const info = await response.json();
  for (let i = 0; i < info.length; i += 1) {
    commentsContainer.innerHTML += `<p class="m-0 p-1">${info[i].creation_date}-${info[i].username}: ${info[i].comment}</p>`;
  }
  document.querySelector('.commentsheader').innerText = `Comments(${countComments(info)})`;
};

export const getComment = async (container, childCount, identifier) => {
  container.innerHTML = '';
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/K0EaQXGcHFVimQravHDE/comments?item_id=${identifier}`);
  if (response.ok) {
    const data = await response.json();
    for (let i = 0; i < data.length; i += 1) {
      container.innerHTML += `<p class="m-0 p-1">${data[i].creation_date}-${data[i].username}: ${data[i].comment}</p>`;
    }
    childCount.innerText = `Comments(${countComments(data)})`;
  } else {
    childCount.innerText = 'Comments(0)';
  }
};
