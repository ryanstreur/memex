import { FormEvent, useEffect, useReducer, useState } from "react";
import {
  SettingsActionType,
  defaultSettings,
  settingsReducer,
} from "../reducers/settings-reducer";
import { IUserSettings } from "../model";

export function UserSettingsPage() {
  const [settings, dispatch] = useReducer(settingsReducer, defaultSettings);
  useEffect(() => {
    dispatch({ type: SettingsActionType.LOAD, payload: defaultSettings });
  }, []);

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      keyboardShortcutsEnabled: { checked: boolean };
      // password: { value: string };
    };

    console.log(target.keyboardShortcutsEnabled.checked);
  }

  return (
    <>
      <h1>User Settings</h1>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <label htmlFor="keyboard-shortcuts-enabled">
          <input
            id="keyboard-shortcuts-enabled"
            name="keyboardShortcutsEnabled"
            type="checkbox"
            checked={settings.keyboardShortcutsEnabled}
            onChange={(e) =>
              dispatch({
                type: SettingsActionType.UPDATE,
                payload: { keyboardShortcutsEnabled: e.target.checked },
              })
            }
          />
          Enable Keyboard Shortcuts
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
