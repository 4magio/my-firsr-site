# backend

Express server (`server.js`). Serves `../frontend` statically and exposes `POST /api/message` (JSON `{ text }` -> `{ reply }`, 400 if text is empty).
Run with `npm install && npm start` (port 3000, override with `PORT`).
