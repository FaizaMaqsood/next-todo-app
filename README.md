# Next Todo App
A modern and minimal Todo application built using **Next.js** and **Tailwind CSS**. This project demonstrates the use of React Hooks, Next.js routing, and basic CRUD operations for managing a list of tasks.
## Features
- Add, edit, update, and delete todos
- Store todos locally using `localStorage`
- Dark/light mode toggle (optional enhancement)
- Instant updates with React state
- Simple and responsive UI with Tailwind CSS
## Tech Stack
| Technology | Description |
|------------|-------------|
| [Next.js](https://nextjs.org/) | React framework for production |
| [React](https://reactjs.org/) | Frontend JavaScript library |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |
| [Vercel](https://vercel.com/) | Optional – for easy deployment |
## Project Structure
````
next-todo-app/
├── pages/
│ ├── index.js # Main todo interface
│ └── _app.js # Global styles
├── components/ # Reusable React components
│ └── TodoItem.js
├── styles/
│ └── globals.css
├── public/
│ └── favicon.ico
├── README.md
└── package.json
````
## Getting Started
### 1. Clone the repo
```bash
   git clone https://github.com/YOUR_USERNAME/next-todo-app.git
   cd next-todo-app
```
### 2. Install dependencies
```bash
npm install
```
### 3. Run the app
```bash
npm run dev
```
### 4. Open in Browser
Visit: http://localhost:3000

### 5. Create a `.env.local` file in the root directory
```env
   MONGODB_URI=your_mongodb_connection_string_here
```
### 6. Connect to MongoDB
Ensure your MongoDB connection string is correct (you can use MongoDB Atlas or a local MongoDB server).

## Author
Faiza Maqsood 
[@FaizaMaqsood](https://github.com/FaizaMaqsood)
## License
This project is licensed under the MIT License.

