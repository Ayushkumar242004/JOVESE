const { z } = require("zod");

// Creating an object schema
const applicationSchema = z.object({
username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters" }),
email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email must be at least of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least of 6 characters" })
    .max(1024, "Password can't be greater than 1024 characters"),
confirmPassword: z
    .string({ required_error: "Confirm Password is required" })
    .min(6, { message: "Confirm Password must be at least of 6 characters" })
    .max(1024, "Confirm Password can't be greater than 1024 characters"),
phone: z
    .string({ required_error: "Please enter your Phone Number!" }),

address: z
    .string({ required_error: "Please enter your Phone Number!" })
,
resume: z
    .string({ required_error: "Confirm Password is required" }),
coverLetter: z
    .string({ required_error: "Cover Letter is required" }),
coverLetter:z
    .string({ required_error: "Cover Letter is required" })
});

module.exports = applicationSchema; 