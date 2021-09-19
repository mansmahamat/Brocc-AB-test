# Brocc Front-end Coding Exercise

## Guidelines

- You must use React, Styled-Components and React Query
- We don't want you to spend more than a few hours on it

## Exercise

We would like you to create 2 buttons that increments and decrements a counter. Then using the counter value we would like you to use the GitHub API to cycle through the array of repository names below :

```js
[
  'eslint/eslint',
  'brocc-ab/test',
  'babel/babel',
  'webpack/webpack',
  'storybooks/storybook',
  'facebook/react',
  'tannerlinsley/react-query',
];
```

We would like you to display some data about the repositories. Use the counter as an index for the above array (`eslint/eslint` if the counter is 0, `brocc-ab/test` if it's 1, ...) and fetch information about the GitHub repository from GitHub's API: `https://api.github.com/repos/{repositoryName}`.

Display the following data and style it however you see fit:

- full name (`full_name`)
- description (`description`)
- amount of stars (`stargazers_count`)

Handle and display any errors the API might throw, also think about any other potential problems and how you could prevent them.

---

### Extra

Add a loading indication to the application: While new data is being fetched from the API, a loader should be displayed on the page.

It's enough to display a text such as "loading repository", but feel free to get creative!
