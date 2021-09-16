let input = `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`.split(/\n/g);

[...new Set(input.slice(1))]
  .sort((a, b) => {
    if (a.length === b.length) {
      if (a === b) return 0;
      return a > b ? 1 : -1;
    } else {
      return a.length - b.length;
    }
  })
  .forEach((k) => console.log(k));
