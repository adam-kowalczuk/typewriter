const sentence = "hello there from lighthouse labs";
let timer = 0;
for (const char of sentence) {
  setTimeout(() => {
    if (char === sentence.endsWith(char)) {
      process.stdout.write(char / n);
      return;
    }
    process.stdout.write(char);
  }, timer);
  timer += 50;
}
