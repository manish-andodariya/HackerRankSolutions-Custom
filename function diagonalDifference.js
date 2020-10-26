// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix

// is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  

// The left-to-right diagonal =
// . The right to left diagonal = . Their absolute difference is

// .

// Function description

// Complete the

// function in the editor below.

// diagonalDifference takes the following parameter:

//     int arr[n][m]: an array of integers

// Return

//     int: the absolute diagonal difference

// Input Format

// The first line contains a single integer,
// , the number of rows and columns in the square matrix .
// Each of the next lines describes a row, , and consists of space-separated integers

// .

// Constraints

// Output Format

// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12

// Sample Output

// 15


function diagonalDifference(arr)
{
    var x = [];
    var y = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (i == j) {
                x[ i ] = arr[ i ][ j ];
                console.log(arr[ i ][ j ]);
            }
        }
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if ((i + j) == arr.length - 1) {
                y[ i ] = arr[ i ][ j ];
                console.log(arr[ i ][ j ]);
            }
        }
    }
    var sumx = 0;
    var sumy = 0;
    x.forEach((ele) =>
    {
        sumx = sumx + ele;
    });
    console.log(sumx);
    for (var i = 0; i < y.length; i++) {
        sumy = sumy + y[ i ];
    }
    console.log(sumy);
    return Math.abs(sumx - sumy);
}
