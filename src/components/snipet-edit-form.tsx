"use client";
import React, { useState } from "react";
import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
interface SnippetEditFormProps {
  snippet: Snippet;
}

const SnipetEditForm = ({ snippet }: SnippetEditFormProps) => {
  const [code, setCode] = useState(snippet.code);
  function handleEditorChange(value: string = "") {
    setCode(value);
  }
  return (
    <div className="m-4">
      <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        options={{ minimap: { enabled: false } }}
        defaultValue={snippet.code}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default SnipetEditForm;
