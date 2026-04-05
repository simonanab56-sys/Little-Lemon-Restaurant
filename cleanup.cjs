const fs = require("fs");
const path = require("path");

const deleteList = [
  "dist",
  "ATTRIBUTIONS.md",
  "DEPLOYMENT.md",
  "PERFORMANCE.md",
  "TESTING.md",
  "CONTRIBUTING.md",
  "PROJECT_OVERVIEW.md",
  "QUICKSTART.md",
  "backend-example.js",
  "postcss.config.mjs",
  "pnpm-lock.yaml",
  "guidelines"
];

// Delete root files/folders
deleteList.forEach(item => {
  const filePath = path.join(__dirname, item);
  if (fs.existsSync(filePath)) {
    fs.rmSync(filePath, { recursive: true, force: true });
    console.log("Deleted:", item);
  }
});

// Clean UI folder
const uiPath = path.join(__dirname, "src/app/components/ui");

const keepFiles = [
  "button.jsx",
  "card.jsx",
  "input.jsx",
  "table.jsx",
  "dialog.jsx"
];

if (fs.existsSync(uiPath)) {
  fs.readdirSync(uiPath).forEach(file => {
    if (!keepFiles.includes(file)) {
      fs.rmSync(path.join(uiPath, file), { force: true });
      console.log("Removed UI:", file);
    }
  });
}

console.log("✅ Cleanup complete!");