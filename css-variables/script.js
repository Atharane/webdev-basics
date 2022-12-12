// access CSS variables from JavaScript
// https://css-tricks.com/how-to-access-css-variables-with-javascript/

const styles = getComputedStyle(document.documentElement);
const color = styles.getPropertyValue("--trypan-blue");

// change color to blue
// document.documentElement.style.setProperty("--trypan-blue", "blue");

console.log(color);