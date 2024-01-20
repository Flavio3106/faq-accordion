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
