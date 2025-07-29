# ✨ InkHive — A Modern Blogging Web App

> 📝 “Write. Share. Inspire.”  
> This is not just a blog platform — it's your digital canvas.

---

## 🧠 About the Project

**MyBlog** is a full-stack web application where users can:
- ✍️ Create and publish blog posts
- 📚 Browse stories written by others
- ❤️ Like and favorite posts
- 👥 Comment with their thoughts
- 🔐 Register and log in securely

It’s sleek, responsive, and built with that modern minimalism vibe.  
Think Medium meets Notion — but with your personal touch.

---

## 🛠️ Tech Stack

| Layer        | Tech                       |
|--------------|----------------------------|
| Frontend     | HTML, CSS, JavaScript (maybe React?) |
| Backend      | Node.js, Express.js        |
| Database     | MongoDB + Mongoose         |
| Auth         | JWT / bcrypt (depending on setup) |
| Styling      | CSS3 / Tailwind / Bootstrap |
| ✨    | GSAP / Framer Motion for  animations

---

## 🚀 Features

- 🧑‍💻 **User Authentication**
  - Signup, login, and logout flow
  - Password hashing for security

- 🖋️ **Post Management**
  - Create, edit, and delete your own blogs
  - Markdown support (optional)

- 💬 **Comment System**
  - Add and delete comments
  - Author info and timestamps

- ❤️ **Favorites & Likes**
  - Users can like and favorite posts
  - Each blog shows its like count

- 📱 **Responsive UI**
  - Works across devices
  - Clean layout with smooth transitions

---
# 1. Clone the repo
git clone https://github.com/yourusername/InkHive.git
cd InkHive

# 2. Install dependencies
npm install

# 3. Setup MongoDB URI in .env
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret

# 4. Start the server
npm start
