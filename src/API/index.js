function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
  }

const getRandomName = () => {
  const firstLetter = String.fromCharCode(getRndInteger(4304, 4336)); 
  return `${firstLetter}.${String.fromCharCode(getRndInteger(4304, 4336))}`
}

const withUniqueNumber = () => {
  return new Date(`${getRndInteger(10, 12)}, ${getRndInteger(1, 25)}, 2022`).getTime();
}

export const WinnerListAPI =
{
  "data": Array(128).fill(null).map((i, k) => {
    console.log('getRandomName()', getRandomName())
    return {
      name: getRandomName(),
      id: k,
      winningDate: withUniqueNumber(),
      winNumber: getRndInteger(10000, 1000000)
    }
  })
}
