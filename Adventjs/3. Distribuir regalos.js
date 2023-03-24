function distributeGifts(packOfGifts, reindeers) {
  const weightOfGifts = packOfGifts.reduce((acc, gif) => {
    return acc + gif.length;
  }, 0);

  const weightReindeer = reindeers.reduce((acc, reindeer) => {
    return acc + reindeer.length * 2;
  }, 0);

  const giftsCapacity = weightReindeer / weightOfGifts;
  return Math.floor(giftsCapacity);
}

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];
console.log("Regalos:",packOfGifts);
console.log("Renos:", reindeers);
console.log("Regalos a distribuir:", distributeGifts(packOfGifts, reindeers));
