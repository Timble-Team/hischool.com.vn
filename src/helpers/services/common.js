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
