const generateKey = key => {
  const frags = key.split("_");
  for (let i = 1; i < frags.length; i += 1) {
    frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
  }
  return frags.join("");
};

const formatData = data => {
  const updatedData = data;
  Object.keys(updatedData).map(oldKey => {
    const newKey = generateKey(oldKey);
    if (oldKey !== newKey) {
      updatedData[newKey] = updatedData[oldKey];
      delete updatedData[oldKey];
    }
    return updatedData;
  });
  return updatedData;
};

export default formatData;
