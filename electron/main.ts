import { app, BrowserView, BrowserWindow, shell } from 'electron';
const path = require("node:path");
import { electronApp, optimizer } from "@electron-toolkit/utils";

function createWindow(): void {
  // Create the browser window.
  const preloadPath = path.join(__dirname, "../preload/index.mjs");
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 640,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === "linux" ? {} : {}), 
    webPreferences: {
      preload: preloadPath,
      contextIsolation: true,
      nodeIntegration: true,
    }});

  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: "deny" };
  });

}