# Week 1 Exercises

The mandatory exercises are:

1. **Chicken Peanut Stew**: In this exercise, you'll take a recipe that's written in text and turn it into an HTML page. You'll practice choosing the 
appropriate elements for different pieces of information and writing the HTML from scratch.

2. **Shirt City**: Here, your task is to identify and fix errors in a given html file to obtain the desired result, as specified.

To solve each exercise, navigate to the exercise folder and follow the instructions in the README.md file.

## Testing

You can use the automated tests to check that your work is valid.

1. Navigate your terminal to the parent exercise folder for the week (not the individual exercise).

2. Install the project dependencies by running `pnpm install`

3. To run all tests for the week, run `pnpm run test`

4. To run the test for a specific exercise, you need to specify the path to the exercise folder, run `pnpm run test exercise-folder`. For example, run `pnpm run test chicken-peanut-stew`

If your solution has all the required elements it should say something like:

```txt
 PASS  ./html-elements.test.js
  The recipe page has the required HTML elements
    ✓ uses at least one heading element (50 ms)
    ✓ uses at least three heading elements (18 ms)
    ✓ uses at least two heading elements (10 ms)
    ✓ uses at least one image element (5 ms)
    ✓ index.html is a valid html doc (193 ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        2.104 s
Ran all test suites.
```

If it does not pass one of the tests, you should get some feedback about what is wrong or missing in your solution.

### Valid HTML

The last test for each exercise is that your HTML follows all of the recommended rules for an HTML document.

[Here is a list](https://html-validate.org/rules/index.html) of all the rules that will be automatically checked. You don't have to memorize this list or check each rule yourself. Instead, if you get feedback that your HTML breaks one of the rules, you can find an explanation of the rule from that list.

Once you have passed all tests for the week, then you are ready to submit to Gradescope.

## Submission

In order to get credit for your project, you must:

- push your code to Github Classroom
- submit your work in Gradescope
- submit your project in Woolf

Note that this assignment is automatically graded and you will see your grade shortly after submitting to Gradescope. You have unlimited number of attempts, therefore you are enouraged to modify your work and resubmit as much as possible, before the due date.
