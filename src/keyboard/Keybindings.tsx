import { KeyboardEvent, PropsWithChildren, useState } from "react";

enum EditorMode {
  NORMAL,
  INSERT,
}

export default function Keybindings({ children }: PropsWithChildren) {
  const [mode, setMode] = useState<EditorMode>(EditorMode.NORMAL);
  const [kbMessage, setKbMessage] = useState("");

  type Keymap = {
    [key: string]: () => void;
  };

  const normalModeBindings: Keymap = {
    KeyI: () => setMode(EditorMode.INSERT),
  };

  // const insertModeBindings: Keymap = {
  //   ESC: () => setMode(EditorMode.NORMAL),
  // };

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    console.log(e);
    if (mode == EditorMode.INSERT) {
      if (e.code === "Escape") {
        setMode(EditorMode.NORMAL);
      }
      return;
    } else if (mode == EditorMode.NORMAL) {
      const keys = Object.keys(normalModeBindings);

      if (keys.includes(e.code)) {
        normalModeBindings[e.code]();
      } else {
        setKbMessage(`${e.code} is not a keyboard shortcut`);
      }

      console.log(e.code);
    }
  }

  return (
    <div onKeyDown={(e) => handleKeyDown(e)}>
      {children}
      <footer>
        Editor Mode: {mode} <br />
        {kbMessage}
      </footer>
    </div>
  );
}
