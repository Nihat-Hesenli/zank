# React Shop Page

A responsive e-commerce shop page built with **React**, **Redux Toolkit**, and **React Router**.

## 🚀 Features

- Product grid with hover effects
- Product filtering via sidebar
- Product detail page with Add to Cart
- Cart management using Redux (add/remove/increase/decrease)
- Responsive design for desktop and mobile

## 📦 Tech Stack

- React
- Redux Toolkit
- React Router
- CSS (custom + responsive)
- Local fonts: Poppins & Manrope

## 💻 Quick Start

1. Clone the repo:
```bash
git clone https://github.com/Nihat-Hesenli/zank.git
cd Zank_Website

Install dependencies:

bash

npm install
Run the app:

bash

npm start
Open your browser and go to: http://localhost:3000

🗂 Project Structure
bash

src/
├─ components/         # Reusable components (Navbar, Card, layouts)
├─ pages/              # Page components (HomePage, ShopPage, Product, AboutUs, Contact)
├─ redux/              # Redux store and slices (cartSlice)
├─ assets/             # Images, fonts, etc.
├─ App.jsx             # Main app with routes
└─ index.jsx           # App entry point
⚙️ Redux Cart Functionality
addToCart: Adds product to cart or increases quantity if already in cart

removeItem: Removes product from cart

increaseItem / decreaseItem: Updates quantity

setCartOpen: Opens or closes the cart sidebar

📱 Responsive Design
Desktop: 4 columns in product grid

Tablet: 3 columns

Mobile: 2 columns

Photo cards and product cards scale on hover

📌 Notes
Make sure your local fonts (Poppins and Manrope) are correctly placed under src/assets/fonts/

All routing is handled with React Router v6

Cart state is managed with Redux Toolkit