//process.stdout.write('hello from spinner1.js... \rnottt\n');

const spinnerString = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let delay = 0;
for (let i = 0; i < 10; i++) {
  for (let str of spinnerString) {
    setTimeout(() => {
      process.stdout.write(str);
    }, delay += 200);
  }
}

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\   ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1700);