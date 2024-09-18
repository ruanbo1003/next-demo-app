"use server";

import { eq } from "drizzle-orm"
import { db } from "@/db"
import { user } from "@/db/schema/user"

// get all user list
export const getData = async () => {
    return db.select().from(user)
};

// add a new user
export const addUser = async (name: string, email: string, salary: number) => {
    await db.insert(user).values({
        name: name,
        email: email,
        salary: salary,
    })
};


// delete a user by id
export const deleteUser = async (id: number) => {
    await db.delete(user).where(eq(user.id, id));
};


// update user's salary
export const updateUserSalary = async (id: number, salary: number) => {
    await db
        .update(user)
        .set({
            salary: salary,
        })
        .where(eq(user.id, id));
};
