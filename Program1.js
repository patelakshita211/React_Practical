const original_array = [23, 45, 78, 21, 98, 12, 45, 67];

console.log("Original Array:", original_array);

// Double every element
const doubleArray = original_array.map(num => num * 2);
console.log("Double Array:", doubleArray);

// Even numbers
const evenNumbers = original_array.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// Sum
const sum = original_array.reduce((total, num) => total + num, 0);
console.log("Sum of All Elements:", sum);

// Student marks
const studentMarks = [75, 92, 51, 64, 76, 68, 59, 85, 65];
console.log("Student Marks:", studentMarks);

// Marks greater than 75
const highMarks = studentMarks.filter(mark => mark > 75);
console.log("Marks Greater Than 75:", highMarks);

// Sort ascending
const sortedNumbers = [...studentMarks].sort((a, b) => a - b);
console.log("Sorted Array:", sortedNumbers);