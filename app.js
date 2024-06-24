function knightMoves(startPoint, endPoint) {

  const possibleMoves = [
    [1, 2],
    [-1, 2],
    [2, 1],
    [-2, 1],
    [2, -1],
    [-2, -1],
    [1, -2],
    [-1, -2]
  ]
  let visited = new Set();
  const startPointX = startPoint[0];
  const startPointY = startPoint[1];
  const endPointX = endPoint[0];
  const endPointY = endPoint[1];
  if (startPointX < 0 ||
      startPointX > 7 ||
      endPointX < 0 ||
      endPointX > 7 ||
      startPointY < 0 ||
      startPointY > 7 ||
      endPointY < 0 ||
      endPointY > 7
  ) {
    console.log("Check the dimensions of the board my darling")
    return;
  }
  let queue = [];
  queue.push([0, [startPointX, startPointY], [[startPointX, startPointY]]]);
  while (queue.length) {
    const currentSquare = queue.shift();
    const moves = currentSquare[0];
    const currentPointX = currentSquare[1][0];
    const currentPointY = currentSquare[1][1];
    let path = currentSquare[2];
    visited.add([currentPointX, currentPointY]);
    if (currentPointX === endPointX &&
        currentPointY === endPointY
    ) {
        console.log(`You made it in ${moves} moves! !  Here's your path:`)
        path.forEach(square => {
          console.log(square);
        })
        return;
    }
    possibleMoves.forEach(possibleMove => {
      if (possibleMove[0] + currentPointX >= 0 &&
          possibleMove[0] + currentPointX <= 7 &&
          possibleMove[1] + currentPointY >= 0 &&
          possibleMove[1] + currentPointY <= 7 &&
          !visited.has([possibleMove[0] + currentPointX, possibleMove[1] + currentPointY])
      ) {
        const newSquare = [possibleMove[0] + currentPointX, possibleMove[1] + currentPointY];
        let newPath = [...path]
        newPath.push(newSquare)
        queue.push([moves + 1, 
          newSquare,
          newPath
        ]);
      }
    })
  }
}

knightMoves([0,0], [3,2])