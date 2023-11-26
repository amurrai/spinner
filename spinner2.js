const chars = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ']

for (let i = 0; i < 16; i++) {
  setTimeout(() => {
    process.stdout.write(chars[i % chars.length]);
  }, 100 + 200 * i);
}
