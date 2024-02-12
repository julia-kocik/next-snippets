import React from "react";
import { db } from "../../../db";
import { notFound } from "next/navigation";
import SnipetEditForm from "../../../../components/snipet-edit-form";
interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

const SnippetEditPage = async ({ params }: SnippetEditPageProps) => {
  const id = parseInt(params.id);
  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });
  if (!snippet) {
    notFound();
  }
  return (
    <div>
      <SnipetEditForm snippet={snippet} />
    </div>
  );
};

export default SnippetEditPage;
