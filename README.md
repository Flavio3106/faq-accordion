# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/responsive-faq-accordion-page-with-html-css-and-js-TTHCTkQEpm)
- Live Site URL: [Add live site URL here](https://flavio3106.github.io/faq-accordion/)

### My process

### Built with

- Semantic HTML5 markup
- CSS custom properties

### What I learned

I feel proud of this js solution I used for the expanding areas, it is really simple and elegant.

```js
//*buttons
const buttons = document.querySelectorAll(".answerExpander");
//*answers
const answers = document.querySelectorAll(".answer");
//*plusIcons
const plusIcons = document.querySelectorAll(".plusIcons");
//*minusIcons
const minusIcons = document.querySelectorAll(".minusIcons");

for (let index = 0; index < buttons.length; index++) {
  const btn = buttons[index];
  const ans = answers[index];
  const plus = plusIcons[index];
  const minus = minusIcons[index];
  btn.addEventListener("click", (e) => {
    ans.toggleAttribute("hidden");
    plus.toggleAttribute("hidden");
    minus.toggleAttribute("hidden");
  });
}
```

## Author

- Frontend Mentor - [@Flavio3106](https://www.frontendmentor.io/profile/Flavio3106)
