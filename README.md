# 📚 Book Store Backend

![Node.js](https://img.shields.io/badge/Node.js-14%2B-green?logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-Academic-informational)
![Status](https://img.shields.io/badge/Status-In%20Development-yellow)

---

## 📖 About

This project is a **university assignment** — a simple **backend application** for a **book store**, developed using **Node.js** and **TypeScript**.

## 🚀 Features

- Built with **TypeScript** for strong typing and scalability.
- Simple **Node.js** backend server.
- Manages a collection of **books** with the following fields:
  - `id: string`
  - `title: string`
  - `author: Array<{ name: string }>`
  - `isbn: number`
  - `edition: string`
  - `year: number`
  - `publisher: string`
  - `page_ammount: number`
  - `purchase_link: string`
  - `image: string`

## 📂 Project Structure

    src/ server.ts // Main server file dist/ server.js // Compiled JavaScript output (after build)


## 📜 Available Scripts

- **`npm run build`** — Compiles TypeScript files into JavaScript (`dist/` folder).
- **`npm run start`** — Runs the compiled JavaScript server with **Node.js**.
- **`npm run dev`** — Runs the server in development mode using **ts-node** (no manual build required).

## ⚙️ Requirements

- Node.js (v14 or higher recommended)
- npm or yarn
- TypeScript
- ts-node

## 🛠️ Installation and Running

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# OR, build and run
npm run build
npm run start
```

## 🧩 Future Improvements
- Add database integration (e.g., MongoDB, PostgreSQL)

- Implement RESTful API endpoints (CRUD operations for books)

- Add validation and error handling

- Build unit tests with a testing framework like Jest

## 📚 License
This project is for **academic purposes** and is not intended for production use.