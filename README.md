# veganHUbAPP

A cloud kitchen web application for ordering vegan food.

## Features and Functionality

* **Browse Menu:** View appetizing vegan appetizers and salads with detailed descriptions and high-quality images.
* **Add to Cart:** Easily add items to your shopping cart with quantity adjustments.
* **View Cart:** Review your cart contents, adjust quantities, and remove items.
* **Checkout:** Proceed to checkout securely (currently redirects to a Payment Success page - further integration needed).
* **User Authentication:**  Simple login system for tracking order and user data. Collects user data upon login (email, age, gender, delivery preference).
* **Admin Access:**  Provides an admin panel for managing user data (requires specific user ID and password).
* **About Us Page:** Learn more about the Vegan Hub cloud kitchen.


## Technology Stack

* **Frontend:** React, React Router, React-Multi-Carousel, react-custom-scrollbars-2, React Bootstrap, Redux, Redux Persist
* **Backend:** (Assumed based on API calls) Node.js (possibly Express.js)
* **Styling:** Tailwind CSS
* **Payment Gateway:** Razorpay (integration present in `public/index.html`)
* **API:** `https://veganhubserver.onrender.com` (for user data and product categories), `https://veganhubserver.vercel.app/api/sendmail` (for email sending)

## Prerequisites

* Node.js and npm (or yarn) installed on your system.

## Installation Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/ShiwangPande/veganHUbAPP.git
   ```
2. Navigate to the project directory:
   ```bash
   cd veganHUbAPP
   ```
3. Install dependencies:
   ```bash
   npm install 
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Usage Guide

1.  Navigate to the application using your browser after running `npm start`.
2.  Browse the menu, add items to your cart, and proceed to checkout.  Currently, the checkout redirects to a Payment Success page.
3.  Admin users can access user data via the Login page and a separate prompt for ID and password.

## API Documentation

The application uses the following APIs:

* **`/products-by-categories`:**  Fetches product data from `https://veganhubserver.onrender.com/products-by-categories` (within `src/stores/productSlice/productsSlice.js`).
* **`/submit-form`:** Submits user data upon login to `https://veganhubserver.onrender.com/submit-form` (within `src/components/auth/SignIn.js`).
* **`/api/users`:** Fetches user data for admin view from `https://veganhubserver.onrender.com/api/users` (within `src/components/auth/Userdata.js`).
* **`/api/sendmail`:** Sends an email confirmation to `https://veganhubserver.vercel.app/api/sendmail` (within `src/pages/PaymentSuccess/index.js`).


## Contributing Guidelines

Contributions are welcome! Please open an issue or submit a pull request.  Ensure your code follows consistent styling and includes tests.

## License Information

License not specified in the repository.

## Contact/Support Information

Contact information not provided.  This should be added for better user support.
