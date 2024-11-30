// Zod Basics: Simple Type Validation

// Step 1: Install Zod
// In terminal: npm install zod

// Import Zod
const z = require('zod');

// 1. Basic String Validation
function stringValidation() {
    // Create a simple string schema
    const nameSchema = z.string();

    try {
        // These will work
        console.log(nameSchema.parse("John")); // Valid
        
        // This would throw an error
        // nameSchema.parse(123); // Invalid - not a string
    } catch (error) {
        console.error("Validation error:", error);
    }
}

// 2. Number Validation
function numberValidation() {
    // Create a number schema with basic rules
    const ageSchema = z.number()
        .min(0, { message: "Age can't be negative" })
        .max(120, { message: "Age is too high" });

    try {
        console.log(ageSchema.parse(25)); // Valid
        
        // These would throw errors
        // ageSchema.parse(-5);  // Negative age
        // ageSchema.parse(150); // Too high age
    } catch (error) {
        console.error("Age validation error:", error);
    }
}

// 3. Simple Object Validation
function objectValidation() {
    // Create a user schema
    const UserSchema = z.object({
        name: z.string(),
        email: z.string().email({ message: "Invalid email" }),
        age: z.number().min(18, { message: "Must be 18+" })
    });

    // Example user data
    const user = {
        name: "John Doe",
        email: "john@example.com",
        age: 25
    };

    try {
        // Validate the entire object
        const validatedUser = UserSchema.parse(user);
        console.log("User is valid:", validatedUser);

        // These would fail
        // UserSchema.parse({ name: "John", email: "not-an-email", age: 15 });
    } catch (error) {
        console.error("User validation error:", error);
    }
}

// 4. Safe Parsing (No Errors Thrown)
function safeParsing() {
    const emailSchema = z.string().email();

    // Safe parse won't throw an error
    const result1 = emailSchema.safeParse("valid@email.com");
    const result2 = emailSchema.safeParse("invalid-email");

    console.log("Valid email result:", result1);
    console.log("Invalid email result:", result2);
}

// 5. Optional and Default Values
function optionalValidation() {
    const ProfileSchema = z.object({
        username: z.string(),
        bio: z.string().optional(), // Optional field
        age: z.number().default(18) // Default value
    });

    // Examples
    const user1 = { username: "johndoe" }; // Works with default age
    const user2 = { username: "janedoe", bio: "Hello world" }; // Works with bio

    try {
        console.log("User 1:", ProfileSchema.parse(user1));
        console.log("User 2:", ProfileSchema.parse(user2));
    } catch (error) {
        console.error("Validation error:", error);
    }
}

// Run all examples
function runZodExamples() {
    console.log("--- String Validation ---");
    stringValidation();

    console.log("\n--- Number Validation ---");
    numberValidation();

    console.log("\n--- Object Validation ---");
    objectValidation();

    console.log("\n--- Safe Parsing ---");
    safeParsing();

    console.log("\n--- Optional Validation ---");
    optionalValidation();
}

// Uncomment to run
// runZodExamples();

// Quick Cheat Sheet:
// z.string() - Validate strings
// z.number() - Validate numbers
// z.boolean() - Validate booleans
// .min() - Set minimum value
// .max() - Set maximum value
// .email() - Validate email format
// .optional() - Make a field optional
// .default() - Set a default value
// .safeParse() - Validate without throwing errors