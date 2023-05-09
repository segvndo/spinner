const spinnerString = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let delay = 0;
for (let i = 0; i < 10; i++) {
  for (let str of spinnerString) {
    setTimeout(() => {
      process.stdout.write(str);
    }, delay += 200);
  }
};