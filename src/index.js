
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix === undefined) return [];
  for (i = 0; i < matrix.length; i++ ){
    let sortMatrix = (i % 2 === 0) ? matrix[i].sort( (a, b) => a - b ) : matrix[i].sort( (a, b) => b - a );
    sortMatrix.forEach(item => result.push(item));    
  }
  return result;
}
