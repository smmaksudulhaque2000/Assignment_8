# GadgetHeaven✨

Your go-to destination for the latest and greatest gadgets! This is a responsive e-commerce platform where users can explore, purchase, and wishlist a wide variety of gadgets. The project follows a detailed Figma design, showcasing a structured navigation bar, categorized product listings, individual product detail pages, and user-friendly shopping functionalities.

## 🌐 Live Site

Visit the live site here: [GadgetHeaven on Surge](https://maksudulhaque2000.surge.sh/)

---

## 🎯 **Features**

1. **Responsive Gadget Categories & Product Filtering**

   - A sidebar for categories like computers, phones, smartwatches, chargers, and power banks.
   - Nested layout displays products based on selected category, each with unique attributes and prices (minimum $50).

2. **Product Details & Interactive Wishlist/Cart**

   - Each product has a details page with comprehensive information and interactive buttons for adding items to the cart or wishlist.
   - Context API and LocalStorage for data persistence allow a seamless user experience.

3. **Shopping Cart & Wishlist Management**

   - Tabs to toggle between Cart and Wishlist on the Dashboard.
   - Sort Cart items by price in descending order and view the total price of items in the cart.

4. **Error Handling & 404 Page**

   - Provides a custom 404 page for unknown routes, and includes edge case handling for reloads without errors.

5. **Toast Notifications for Key Actions**
   - Shows toast notifications for adding items to cart and wishlist, enhancing user interaction.

---

## 📱 **Technologies Used**

- **React**
- **Context API** for state management
- **React Router** for navigation and route handling
- **React-Toastify** for user notifications
- **LocalStorage** (for data persistence)

---

## 🛠 **Setup and Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/programming-hero-web-course-4/b10a8-gadget-heaven-smmaksudulhaque2000.git
   cd gadgetheaven
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   npm start
   ```
4. Open https://smmaksudulhaque2000.surge.sh/ to view it in the browser.

🎨 Application Overview

# Navbar: Displays logo, brand name, and navigation links to Home, Dashboard, and Stats. Active route is highlighted.

# Home Page:

    * Banner Section: Styled according to Figma with a button directing users to the Dashboard.
    * Categories Sidebar: Displays gadget categories, each showing products in a card grid.
    * Gadgets Cards: Each card shows product image, name, price, and a "Details" button linking to individual 	  product pages.

# Details Page: Shows all properties of the product and includes buttons to add to Cart and Wishlist.

# Dashboard Page: Displays items in Cart and Wishlist, with total price calculation and a sort option for Cart items.

# Footer: A consistent footer on all pages with essential links and information.

🚀 How to Use

1. Explore Products by Category: Use the sidebar on the Home page to filter gadgets by category.
2. View Product Details: Click "Details" on any gadget card to see full product details.
3. Add to Cart/Wishlist: Use the buttons on product pages to add items to the cart or wishlist.
4. Manage Cart and Wishlist: Navigate to the Dashboard to view or remove items from the Cart and Wishlist. Use the "Sort by Price" button to arrange items by cost.

📂 Project Structure
gadgetheaven/
├── public/
├── src/
│ ├── components/ # React components (Navbar, Sidebar, etc.)
│ ├── context/ # Context API setup
│ ├── data/ # JSON data for gadgets
│ ├── pages/ # Pages like Home, Dashboard, Details, 404
│ ├── App.js
│ ├── index.js
│ └── styles/ # CSS/Styled Components
├── README.md
├── package.json
└── vite.config.js

🧩 React Fundamentals Used

- JSX for structuring components
- State & Props for dynamic data handling
- Context API for managing cart and wishlist
- React Router for route navigation and page management

📝 Additional Requirements

- Dynamic Page Titles & Favicon: Different titles and favicon on each page for a polished user experience.
- Edge Case Handling: Prevents adding more than $1000 in cart and notifies users.
- Responsive Design: Ensures compatibility across various devices.

💡 Challenges & Extras

- Custom Background Color by Route: Implements unique background colors for the Home and other pages using useLocation().
- Purchase Confirmation Modal: Displays a congratulatory message after completing a purchase, with a button redirecting to the Home page.
- Statistics Page (Optional): Displays a composed chart showing product prices and ratings, providing valuable insights for users.

📜 License
This project is licensed under the MIT License.

🏆 Acknowledgments

- Figma for the design inspiration.
- React-Toastify for smooth notifications.
- Vite for optimized development experience.
