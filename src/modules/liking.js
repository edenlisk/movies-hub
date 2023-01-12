import { countComments } from './counters.js';

export const getLikes = async (element, identifier) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/StwCMkXg71NHo1x5MJEP/likes/');
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
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/StwCMkXg71NHo1x5MJEP/likes/',
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
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/StwCMkXg71NHo1x5MJEP/comments/',
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
};

export const getComment = async (container, childCount, identifier) => {
  container.innerHTML = '';
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/StwCMkXg71NHo1x5MJEP/comments?item_id=${identifier}`);
  const data = await response.json();
  for (let i = 0; i < data.length; i += 1) {
    container.innerHTML += `<p class="m-0 p-1">${data[i].creation_date}-${data[i].username}: ${data[i].comment}</p>`;
  }
  childCount.innerText = `Comments(${countComments(data)})`;
};
