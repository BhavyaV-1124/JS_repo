const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift"
}

// For-in-Loop (will work on objects.)

for (const key in myObject) {
    console.log(`${key} Shortcut is for ${myObject[key]}`);
}

// on normal array for-in loop will give index as a response; while for-of loop will return index values by default.


