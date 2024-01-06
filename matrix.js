// Function to multiply two matrices
function multiplyMatrices(matrix1, matrix2) {
    const rows1 = matrix1.length;
    const cols1 = matrix1[0].length;
    const rows2 = matrix2.length;
    const cols2 = matrix2[0].length;
  
    // Check if the matrices can be multiplied
    if (cols1 !== rows2) {
      console.log("Matrix multiplication is not possible. Inner dimensions must match.");
      return null;
    }
  
    // Create an empty result matrix
    const result = new Array(rows1);
  
    for (let i = 0; i < rows1; i++) {
      result[i] = new Array(cols2);
    }
  
    // Perform matrix multiplication
    for (let i = 0; i < rows1; i++) {
      for (let j = 0; j < cols2; j++) {
        let sum = 0;
        for (let k = 0; k < cols1; k++) {
          sum += matrix1[i][k] * matrix2[k][j];
        }
        result[i][j] = sum;
      }
    }
  
    return result;
  }
  
  // Example matrices
  const matrixA = [[1, 2], [3, 4]];
  const matrixB = [[5, 6], [7, 8]];
  
  // Multiply the matrices
  const resultMatrix = multiplyMatrices(matrixA, matrixB);
  
  // Print the result
  if (resultMatrix !== null) {
    for (let i = 0; i < resultMatrix.length; i++) {
      console.log(resultMatrix[i]);
    }
  }
  