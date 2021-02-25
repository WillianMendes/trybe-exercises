let pieces = {
  queen: 'all',
  king: 'all single',
  bishop: 'diagonals',
  tower: 'straight',
  horse: 'l',
  pawn: 'advancing single'
};

function movement(pieceName) {
  let pieceNameLowerCase = pieceName.toLowerCase();

  for (const piece in pieces) {
    if(piece === pieceNameLowerCase) {
      return pieces[piece];
    }
  }
}

console.log(movement('King'));
