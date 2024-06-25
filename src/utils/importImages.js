function importAll(r) {
  let images = {};
  try {
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  } catch (error) {
    console.error("Error importing images:", error);
  }
}

const images = importAll(require.context('../assets/skills', false, /\.(png|jpe?g|svg)$/));

export default images;