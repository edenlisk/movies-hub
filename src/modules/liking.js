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