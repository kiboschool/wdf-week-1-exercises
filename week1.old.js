/* 
 * This file contains tests that check whether your solution in index.html is correct.
 * Run the tests with `npm run test`
 *
 * You can through this file to learn more about what is being tested, but do not modify it.
 *
 */

const fs = require('fs');
const path = require('path');
const { queries } = require('@testing-library/dom');
require("html-validate/jest");
const w = require('jest-autograding-reporter').weight

const html_shirt = fs.readFileSync(path.resolve(__dirname, './shirt-city/index.html'), 'utf8');
const html_recipe = fs.readFileSync(path.resolve(__dirname, './chicken-peanut-stew/index.html'), 'utf8');


jest.dontMock('fs');

describe('The recipe page has the required HTML elements', () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html_shirt.toString();
  });

  // console.log(queries.getAllByRole(document, 'heading'))


  test(w(3, 'uses the h2 heading'), function () {
    // queries.getAllByRole(document, 'heading' , { level: 2 , name: "WE'RE COMING SOON!" })
    queries.getAllByRole(document, 'heading' , { level: 2 })[0]
  });//get partiular heading used //how does test work? if no error is generated internally


  test(w(2, 'uses the appropriate image'), function () {
    let imageElement = queries.getByRole(document, 'img');
    // let imageElement = queries.getByRole(document, 'img')
    // console.log(imageElement.id)
    let imageElementSrc =  imageElement.getAttribute('src');
    expect(imageElementSrc).toBe('shirt.png');
    //expect(headings.length).toBeGreaterThanOrEqual(3)//confirm get hat I can do with the returned object
  });


  test(w(3, 'uses the  paragraph element for first line'), function () {
    // /queries.getByText("shirt") 
    let pElement = queries.getByText(document, /We are very excited/)
    expect(pElement.tagName.toLowerCase()).toBe('p')
    // expect(paragraphList.length).toBeGreaterThanOrEqual(2);
  });

  test(w(3, 'uses the  paragraph element for second line'), function () {
    // /queries.getByText("shirt") 
    let pElement = queries.getByText(document, /shirt city/)
    expect(pElement.tagName.toLowerCase()).toBe('p')
    // expect(paragraphList.length).toBeGreaterThanOrEqual(2);
  });


  // test(w(1, 'uses at least one image element'), function () {
  //   queries.getAllByRole(document, 'img')
  // });

  test(w(1, 'shirt.html is a valid html doc'), function () {
    expect(html_shirt).toHTMLValidate();
  })
})

/* 
 * This file contains tests that check whether your solution in index.html is correct.
 * Run the tests with `npm run test`
 *
 * You can through this file to learn more about what is being tested, but do not modify it.
 *
 */

// const fs = require('fs');
// const path = require('path');
// const { queries } = require('@testing-library/dom');
// require("html-validate/jest");
// const w = require('jest-autograding-reporter').weight


// jest.dontMock('fs');

describe('The recipe page has the required HTML elements', () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html_recipe.toString();
  });

  test(w(3, 'uses at least one heading element'), function () {
    queries.getAllByRole(document, 'heading')
  });

  test(w(2, 'uses at least three heading elements'), function () {
    let headings = queries.getAllByRole(document, 'heading')
    expect(headings.length).toBeGreaterThanOrEqual(3)
  });

  test(w(3, 'uses at least two list elements'), function () {
    let lists = queries.getAllByRole(document, 'list')
    expect(lists.length).toBeGreaterThanOrEqual(2)
  });

  test(w(1, 'uses at least one image element'), function () {
    queries.getAllByRole(document, 'img')
  });

  test(w(1, 'recipe.html is a valid html doc'), function () {
    expect(html_recipe).toHTMLValidate();
  })
})

