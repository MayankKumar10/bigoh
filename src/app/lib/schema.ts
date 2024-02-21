import { z } from 'zod'

export const FormDataSchema = z.object({
  name: z.string().min(5, "Name should be 5 characters long"),
  fatherName: z.string().min(5, "Father Name should be 5 characters long"),
  motherName: z.string().min(5, "Mother Name should be 5 characters long"),
  phone: z.number().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email(),
  address: z.string().min(10, "Address must be at least 10 characters"),
  member_name: z.string().min(5, "Name should be 5 characters long"),
  relation: z.string().min(5, "Relation must be at least 5 characters"),  
  members:z.object({
    id: z.number(),
    member_name: z.string().min(5, "Name should be 5 characters long"),
    relation: z.string().min(5, "Relation must be at least 5 characters"),
  }),
})
