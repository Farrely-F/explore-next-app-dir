// app/actions/formActions.ts
"use server";

import { revalidatePath } from "next/cache";

export async function submitForm(formData: FormData) {
  const title = formData.get("title");
  const body = formData.get("body");

  // Here you would typically save this data to a database
  // For this example, we'll just log it

  try {
    const res = await fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
        /* other post data */
      }),
    });

    // throw new Error("Error Cuy!");

    if (res.ok) {
      revalidatePath("/server-actions");
      return { message: "Form submitted successfully" };
    } else {
      throw new Error("An error occurred while submitting the form");
    }
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return { message: error.message };
    }

    return { message: "An error occurred while submitting the form" };
  }

  // Revalidate the current path
}
