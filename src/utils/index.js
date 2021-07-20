export const groupByRow = array => {
  const list = [];
  array.map((item, i) => {
    if (i % 4 == 0) list.push([item]);
    else list[list.length - 1].push(item);
  });
  return list;
};

export const shuffle = array => {
  var currentIndex = array.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
