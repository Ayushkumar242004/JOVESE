const { z } = require("zod");

const userProfileSchema = z.object({
  firstname: z
    .string()
    .trim()
    .max(255, { message: "First Name must not be more than 255 characters" })
    .refine((val) => val.length === 0 || val.length >= 1, { 
      message: "First Name must be at least 1 character if not empty"
    }),
  lastname: z
    .string()
    .trim()
    .max(255, { message: "Last Name must not be more than 255 characters" })
    .refine((val) => val.length === 0 || val.length >= 1, { 
      message: "Last Name must be at least 1 character if not empty"
    }),
  username: z
    .string()
    .trim()
    .max(255, { message: "Username must not be more than 255 characters" }),
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
  gender: z
    .string()
    .trim()
    .max(255, { message: "Gender must not be more than 255 characters" })
    .refine((val) => val.length === 0 || val.length >= 1, { 
      message: "Gender must be at least 1 character if not empty"
    }),
  country: z
    .string()
    .trim()
    .max(255, { message: "Country must not be more than 255 characters" })
    .refine((val) => val.length === 0 || val.length >= 1, { 
      message: "Country must be at least 1 character if not empty"
    }),
  workExperiences: z
    .string()
    .trim()
    .max(1000, { message: "Work experiences must not be more than 1000 characters" })
    .refine((val) => val.length === 0 || val.length >= 1, { 
      message: "Work experiences must be at least 1 character if not empty"
    }),
  profileLink: z
    .string()
    .trim()
    .max(255, { message: "Profile link must not be more than 255 characters" })
    .url({ message: "Invalid URL" })
    .refine((val) => val.length === 0 || val.length >= 1, { 
      message: "Profile link must be at least 1 character if not empty"
    }),
  github: z
    .string()
    .trim()
    .max(255, { message: "Github link must not be more than 255 characters" })
    .url({ message: "Invalid URL" })
    .refine((val) => val.length === 0 || val.length >= 1, { 
      message: "Github link must be at least 1 character if not empty"
    }),
  linkedIn: z
    .string()
    .trim()
    .max(255, { message: "LinkedIn link must not be more than 255 characters" })
    .url({ message: "Invalid URL" })
    .refine((val) => val.length === 0 || val.length >= 1, { 
      message: "LinkedIn link must be at least 1 character if not empty"
    }),
  twitter: z
    .string()
    .trim()
    .max(255, { message: "Twitter link must not be more than 255 characters" })
    .url({ message: "Invalid URL" })
    .refine((val) => val.length === 0 || val.length >= 1, { 
      message: "Twitter link must be at least 1 character if not empty"
    }),
});

module.exports = userProfileSchema;
