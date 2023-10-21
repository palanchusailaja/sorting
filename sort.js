const numbers = [5, 1, 3, 7, 2, 8, 4];

// Custom comparison function for sorting in descending order
function compareDescending(a, b) {
    return b - a;
}

// Use the sort method with the custom comparison function
numbers.sort(compareDescending);

console.log(numbers);
