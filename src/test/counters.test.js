import { countItems, countComments } from '../modules/counters.js';

describe('Counting number of movies on the page', () => {
  test('test number of items', () => {
    const cardsContainer = [
      {
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg',
        },
        title: 'Under the Dome',
        language: 'English',
        genres: ['Drama', 'Science-Fiction', 'Thriller'],
      },
      {
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/73.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/0/73.jpg',
        },
        title: 'Glee',
        language: 'English',
        genres: ['Drama', 'Music', 'Romance'],
      },
      {
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/82/206879.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/82/206879.jpg',
        },
        title: 'Revenge',
        language: 'English',
        genres: ['Drama', 'Thriller', 'Mystery'],
      },
    ];
    const result = countItems(cardsContainer);
    expect(result).toEqual(3);
  });
});

describe('Counting number of comments', () => {
  test('Return number of comments of specific identifier', () => {
    const commentList = [
      {
        username: 'Fabrice',
        creation_date: '2022-01-11',
        comment: 'Fantastic',
      },
      {
        comment: 'Nice Movie',
        username: 'Manzi',
        creation_date: '2022-01-11',
      },
      {
        creation_date: '2022-01-11',
        comment: 'Next release',
        username: 'David',
      },
      {
        creation_date: '2022-01-11',
        username: 'Bobo',
        comment: 'Nice video quality',
      },
    ];
    const result = countComments(commentList);
    expect(result).toBe(4);
  });
});