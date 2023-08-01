import { ReducerAction } from "react";
import { IUserSettings } from "../model";
import {
  getFromLocalStorage,
  saveToLocalStorage,
  LS_KEYS,
} from "../persistence";

export const defaultSettings: IUserSettings = {
  keyboardShortcutsEnabled: false,
};

export function loadSettings(): IUserSettings {
  const output = getFromLocalStorage<IUserSettings>(LS_KEYS.SETTINGS);
  console.log("loading settings:", output);
  return output || defaultSettings;
}

function saveSettings(settings: IUserSettings) {
  saveToLocalStorage(LS_KEYS.SETTINGS, settings);
}

function revertSettings() {
  localStorage.removeItem(LS_KEYS.SETTINGS);
}

export enum SettingsActionType {
  UPDATE,
  REVERT,
  LOAD,
}

interface ISettingsAction {
  type: SettingsActionType;
  payload: IUserSettings;
}

export function settingsReducer(
  previousSettings: IUserSettings,
  action: ISettingsAction
) {
  switch (action.type) {
    case SettingsActionType.LOAD: {
      return loadSettings();
    }
    case SettingsActionType.UPDATE: {
      const newSettings = { ...previousSettings, ...action.payload };
      console.log("saving settings");
      saveSettings(newSettings);
      return newSettings;
    }
    case SettingsActionType.REVERT: {
      revertSettings();
      return defaultSettings;
    }
    default:
      return previousSettings;
  }
}
