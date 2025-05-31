const { app, BrowserWindow } = require("electron");
const Sentry = require("@sentry/electron/main");
const path = require("node:path");

Sentry.init({
  dsn: "https://db3559eb851f24a9e095d48b676ec939@o4509418095968256.ingest.de.sentry.io/4509418097541200",
});

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});
