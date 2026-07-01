# 📸 Pixabay Clone (React + Firebase + Pixabay API)

A modern image search application built with React. This project uses the Pixabay API for image search and Firebase for authentication.

---

## 🚀 Features

- 🔍 Search photos using the Pixabay API
- 🌙 Dark and light mode toggle
- 🔐 Firebase Authentication (Login / Signup)
- 📄 Pagination for search results
- 📱 Responsive design for desktop and mobile
- 📩 Contact form powered by EmailJS in the footer
- 🚪 Logout functionality
- 🔒 Protected routes using a private route component

---

## 🛠️ Tech Stack

- React.js
- React Router DOM
- Firebase Authentication
- Pixabay API
- EmailJS
- CSS

---

## 🔑 Environment Variables

Create a `.env` file in the project root with the following variables:

```env
VITE_PIXABAY_API_KEY=your_pixabay_api_key

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

> Do not commit your `.env` file to version control.

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/kavin997007/PixabayClone-React.git
cd pixabay-clone
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal.

---

## 🔥 Firebase Setup

1. Go to the Firebase Console.
2. Create a new Firebase project.
3. Add a web app to your Firebase project.
4. Enable Email/Password authentication under Authentication > Sign-in method.
5. Copy the Firebase config values and add them to your `.env` file.

---

## 🌐 Pixabay API Setup

1. Visit the Pixabay API docs: https://pixabay.com/api/docs/
2. Create an API key.
3. Add the key to `VITE_PIXABAY_API_KEY` in your `.env` file.

---

## 🧠 App Flow

- Users can sign up or log in with Firebase Authentication.
- After authentication, users are redirected to the protected `/home` route.
- `/home` lets users search for images, switch theme modes, and browse results with pagination.
- The footer includes an EmailJS-powered contact form.

---

## 📦 Build for Production

```bash
npm run build
```

---

## 📌 Future Improvements

- Infinite scroll instead of pagination
- Image download feature
- Favorites system
- Backend integration
- Enhanced UI animations

---

## 👨‍💻 Author

Kavin

⭐ If you like this project, don’t forget to star the repo!