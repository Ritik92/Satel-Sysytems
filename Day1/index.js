// Executetion Context in JS

// Loupe ans setTimeout

// Hoisting in JS

// undefined and not defined

// Lexical Environment and Scope Chain

// https://medium.com/@omkarbhavare2406/understanding-the-execution-context-and-call-stack-in-javascript-e044c2c34cc5



// Define an object of objects
const employees = {
    emp1: {
        name: "John Doe",
        age: 30,
        department: "Engineering",
    },
    emp2: {
        name: "Jane Smith",
        age: 25,
        department: "Marketing",
    },
    emp3: {
        name: "Mike Johnson",
        age: 35,
        department: "Sales",
    }
};

// Access properties of the outer object
console.log("All employees:", employees);

// Access a specific nested object
console.log("Employee 1 details:", employees.emp1);

// Access a property of a nested object
console.log("Employee 1's name:", employees.emp1.name);

// Loop through the outer object
for (let key in employees) {
    console.log(`Details of ${key}:`, employees[key]);
}

// Modify a property in a nested object
employees.emp2.department = "Product Management";
console.log("Updated Employee 2 department:", employees.emp2.department);

// Add a new nested object
employees.emp4 = {
    name: "Emily Davis",
    age: 29,
    department: "HR",
};
console.log("Added a new employee:", employees.emp4);

// Delete a nested object
delete employees.emp3;
console.log("After deleting Employee 3:", employees);
