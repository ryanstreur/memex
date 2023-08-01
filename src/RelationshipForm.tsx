import React from "react";
import { useState } from "react";
import { IRelationship } from "./model";
import { addOrUpdateRelationship } from "./persistence";

type RelFormProps = {
  relationship?: IRelationship;
};
export const RelationshipForm = (props: RelFormProps) => {
  const [name, setName] = useState("");
  const { relationship } = props;
  console.log(relationship);

  const submitForm: React.FormEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    addOrUpdateRelationship({
      id: "",
      name,
    });
  };

  return (
    <section>
      <h2>Add Relationship</h2>
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
