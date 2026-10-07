# Full Stack Open - Submissions

My solutions for the [Full Stack Open](https://fullstackopen.com/en/) course by the University of Helsinki.

## Part 0 - Fundamentals of Web Apps

* [Exercise 0.4: New note diagram](./part0/0.4.md)
* [Exercise 0.5: Single page app diagram](./part0/0.5.md)
* [Exercise 0.6: New note in Single page app diagram](./part0/0.6.md)

## Part 1 

### Introduction to React.js

[Exercises 1.1 to 1.5: Course Information](./part1/courseinfo/src/App.jsx)

### A more complex state, debugging React apps

- [Exercises 1.6 to 1.11: Unicafe](./part1/unicafe/src/App.jsx)
- [Exercises 1.12 to 1.14: Anecdotes](./part1/anecdotes/src/App.jsx)

#### Anecdotes

In this project I've learnt more in React.js in my own so I can make the project more real world, here is what I've done so far beyond the exercises:

1. I created `tempArr` state variable that keeps tracking of all generated indexes so we don't see the same anecdote multiple times and then when it's length is equal to anecdotes length, we simply clean it (using `useEffect` because it tracks it in every change) so we start with a clean *tempArr* and new random indexes.
2. I developed `MostVotedAnecdote` that first checks if `votes` state variable (array) is all zeros, if yes then **return** immediately, however, if it has any value that is > 0 then render the header text with that anecdote.