export const countCards = (cardsContainer) => {
  const navHome = document.querySelector('.nav-home');
  navHome.innerHTML = `Home(${cardsContainer.length})`;
};

export const countComments = (commentDescription) => {
  const commentsNumber = document.querySelector('.commentsheader');
  commentsNumber.innerHTML = `Comments(${commentDescription.length})`;
};
