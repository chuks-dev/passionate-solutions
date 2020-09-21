const dollar = document.querySelector("#dollar");
const naira = document.querySelector("#naira");

const currentRate = 387.35;

naira.value = (dollar.value * currentRate).toFixed(2);

dollar.addEventListener("input", () => {
  naira.value = (dollar.value * currentRate).toFixed(2);
});

naira.addEventListener("input", () => {
  dollar.value = (naira.value / currentRate).toFixed(2);
});

// input Events
/*change
keyup
input

*/
