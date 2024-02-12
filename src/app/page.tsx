import React from "react";
import { db } from "./db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  return (
    <div>
      <div className="flex my-2 justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href={"snippets/new"} className="border p-2 rounded">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {snippets.map((snippet) => (
          <Link
            key={snippet.id}
            className="border flex justify-between items-center p-2 rounded"
            href={`/snippets/${snippet.id}`}
          >
            <p>{snippet.title}</p>
            <p>{snippet.code}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
