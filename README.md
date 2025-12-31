# 📝 Todo List React App

A clean and well-structured Todo List application built with React.
The app uses useReducer for state management and LocalStorage to persist data across page reloads.

---

## 🚀 Features

- ➕ Add new todo
- ✏️ Edit existing todo
- 🗑️ Delete todo
- ✅ Mark todo as completed
- 💾 Persist todos using LocalStorage
- 🧠 State management with useReducer
- 🔄 Real-time UI updates

---

## 🛠️ Technologies Used

- React
- JavaScript (ES6+)
- React Hooks (useReducer, useEffect)
- HTML5
- CSS3
- Vite

---

## 📂 Project Structure

src/
├── components/
│ ├── MySnackBar.jsx
│ ├── ToastProvider.jsx
│ ├── Todo.jsx
│ ├── TodoList.jsx
│ └── TodosProvider.jsx
├── context/
│ ├── ToastContext.jsx
│ └── TodosContext.jsx  
├── reducer/
│ └── todoReducer.js
├── App.jsx
├── main.jsx
└── index.css

---

## 🧠 State Management

This project uses the useReducer hook to manage application state in a scalable and predictable way.

The reducer handles actions such as:

- ADD_TODO
- DELETE_TODO
- EDIT_TODO
- TOGGLE_TODO

This approach makes the logic easier to maintain and closer to real-world React applications.

---

## 💾 LocalStorage

Todos are stored in the browser LocalStorage to ensure data persistence.

- Todos are loaded when the app starts
- Todos are saved automatically on every state change using useEffect

This prevents data loss after page refresh.
