# AuthHaven Frontend

A modern, responsive authentication system frontend built with **React**, **Tailwind CSS**, and **Vite**. This project demonstrates full stack skills, beautiful UI, and secure authentication flows.

## Features

- **Responsive Design:** Works seamlessly on mobile, tablet, and desktop.
- **Authentication Pages:** Signup, Login, and Dashboard.
- **Protected Routes:** Dashboard is accessible only after login.
- **Toast Notifications:** User feedback for actions and errors.
- **Animated UI:** Gradient backgrounds, interactive cards, and FAQ accordion.
- **Multi-Provider Ready:** UI supports multiple login options.
- **Modern Navigation:** Responsive navbar with hamburger menu.
- **Footer:** Branded, responsive footer with GitHub link.

## Technologies Used

- React
- Tailwind CSS
- Vite
- React Router
- Axios
- React Toastify

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/authhaven-frontend.git
   cd authhaven-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser:**
   ```
   http://localhost:5173
   ```

### Configuration

- The frontend expects a backend API (see `/src/Components/Login.jsx` and `/src/Components/Dashboard.jsx`).
- Update API URLs in the code if your backend is hosted elsewhere.

## Project Structure

```
src/
  ├── Components/
  │     ├── Navbar.jsx
  │     ├── Login.jsx
  │     ├── Signup.jsx
  │     ├── Dashboard.jsx
  │     └── Footer.jsx
  ├── App.jsx
  ├── App.css
  └── index.js
```

## Customization

- **Branding:** Change colors, logo, and text in `Navbar`, `Footer`, and landing page.
- **Providers:** Add more login options in `Login.jsx`.
- **Animations:** Tweak Tailwind classes for more/less animation.

## License

This project is open-source and free to use for learning and demo purposes.

---

**Made with ❤️ by Ankesh Kumar Thakur**
