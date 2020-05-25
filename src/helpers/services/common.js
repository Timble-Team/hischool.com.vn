export function convertDocumentRecord (res) {
  return {
    id: res.id,
    ...res.data()
  };
}

export function convertCollectionRecord (res) {
  const sum = [];
  res.forEach(doc => {
    sum.push({
      id: doc.id,
      ...doc.data()
    });
  });
  return sum;
}

export function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
