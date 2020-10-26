// Given a time in

// -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

// Return '12:01:00'.

//     Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

//     string s: a time in 

//     hour format

// Returns

//     string: the time in 

//     hour format

// Input Format

// A single string
// that represents a time in -hour clock format (i.e.: or

// ).

// Constraints

//     All input times are valid

// Sample Input 0

// 07:05:45PM

// Sample Output 0

// 19:05:45


/*
 * Complete the timeConversion function below.
 */
function timeConversion(s)
{
    if (s.includes('PM')) {
        var t = s.split(':');
        var h = parseInt(t[ 0 ]);
        h = (h < 12) ? h = h + 12 : h;
        t[ 0 ] = h.toString();
        s = t.join(':').replace('PM', '');
    }
    if (s.includes('AM')) {
        var t = s.split(':');
        t[ 0 ] = (t[ 0 ] == '12') ? '00' : t[ 0 ];
        s = t.join(':').replace('AM', '');
    }
    return s;

}