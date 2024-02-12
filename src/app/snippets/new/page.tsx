import React from "react";
import { db } from "@/app/db";
import { redirect } from "next/navigation";

const SnippetCreatePage = () => {
  async function createSnippet(formData: FormData) {
    // need to be clear it is server action
    "use server";
    // check if input is valid
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    // create a new record in db
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);
    // redirect user back to root
    redirect("/");
  }
  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a snippet</h3>
      <div className="flex flex-col gap-4">
        <label className="w-12" htmlFor="title">
          Title
        </label>
        <input name="title" className="border rounded p-2 w-full" />
        <label className="w-12" htmlFor="code">
          Code
        </label>
        <textarea name="code" className="border rounded p-2 w-full"></textarea>
        <button type="submit" className="rounder p-2 bg-blue-200">
          Create Snippet
        </button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
