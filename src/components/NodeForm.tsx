import { FormEventHandler, useState } from "react";
import { IMxNode } from "../model";
import { useNavigate } from "react-router-dom";

type PropTypes = {
  node: IMxNode;
  updateNode: (node: IMxNode) => void;
};
export default function NodeForm(props: PropTypes) {
  const { node, updateNode } = props;

  const [name, setName] = useState(node.name);
  const [body, setBody] = useState(node.body);

  const submitForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    updateNode({ ...node, name, body });
  };

  return (
    <>
      <form onSubmit={(e) => submitForm(e)}>
        <label htmlFor="node-name">Name</label>
        <input
          name="node-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="node-body">Body</label>
        <textarea
          name="node-body"
          id="node-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {JSON.stringify(node)}
    </>
  );
}
