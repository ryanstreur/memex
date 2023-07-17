import React from "react";
import { useState } from "react";

import { addOrUpdateNode } from "./persistence";

export const NodeForm = () => {
  const [name, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitForm: React.FormEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    addOrUpdateNode({
      id: "",
      name,
      body,
    });
  };

  return (
    <section>
      <h1>Add Node</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="title"
          value={name}
          placeholder="Name"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="body"
          value={body}
          placeholder="Body"
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
