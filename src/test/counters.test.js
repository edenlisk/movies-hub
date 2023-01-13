/**
 * @jest-environment jsdom
 */
import { countCards, RenderCards, countComments } from './__mock__/mock-functions.js';

describe('Counting number of movies on the page', () => {
  test('test number of items should return 4', async () => {
    const row = document.createElement('div');
    await RenderCards(row, 'movie1');
    await RenderCards(row, 'movie2');
    await RenderCards(row, 'movie3');
    await RenderCards(row, 'movie4');
    const result = await countCards(row);
    expect(result).toEqual(4);
  });

  test('test number of items should return 0', async () => {
    const row = document.createElement('div');
    const result = await countCards(row);
    expect(result).toEqual(0);
  });
});

describe('Testing number of comments', () => {
  test('Counting number of comments should return 3', async () => {
    const commentsContainer = document.createElement('div');
    commentsContainer.innerHTML = `
        <p>2023-01-20-Fabrice: Fantastic</p>
        <p>2023-01-20-Manzi: Very interesting</p>
        <p>2023-01-20-Joel: Best Video quality</p>
        `;
    const result = countComments(commentsContainer);
    expect(result).toEqual(3);
  });

  test('Counting number of comments should return 0', async () => {
    const commentsContainer = document.createElement('div');
    commentsContainer.innerHTML = '';
    const result = countComments(commentsContainer);
    expect(result).toEqual(0);
  });
});