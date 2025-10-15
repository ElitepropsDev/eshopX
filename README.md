# 🛒 MERN Stack E-Commerce Shop (Eshop)

A **full-featured multi-vendor eCommerce web application** built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).  
The platform enables sellers to register and manage their shops, while customers can browse, chat, and purchase products securely — all in real-time.

---

## 🚀 Tech Stack

- **Frontend:** React.js, Redux Toolkit, TailwindCSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** JWT + Cookies  
- **Image Uploads:** Multer + Cloudinary  
- **Mailing:** Nodemailer (Shop activation & password reset)  
- **Payment Gateway:** Stripe (Secure payments)  
- **Real-Time Communication:** Socket.io (Live chat & order status updates)  
- **Deployment:** Vercel (Frontend) + Render/Hostinger (Backend)

---

## 📦 Features

### 🧾 User Features

- ✅ Register / Login with JWT Authentication  
- ✅ Email verification via activation link  
- ✅ Password reset via email  
- ✅ Profile update (name, email, avatar)  
- ✅ Change password  
- ✅ Manage shipping addresses  
- ✅ View order history  
- ✅ Real-time chat with sellers / admin (Socket.io)  
- ✅ Track order status  
- ✅ Add / remove products from cart  
- ✅ Add / remove from wishlist  
- ✅ Secure Stripe checkout  

---

### 🏪 Seller Features

- ✅ Seller registration & email verification  
- ✅ Seller dashboard with analytics  
- ✅ Add / update / delete products  
- ✅ Product image uploads (Cloudinary)  
- ✅ Manage shop info  
- ✅ Real-time chat with users  
- ✅ Manage orders (pending, delivered, refunded)  
- ✅ Withdraw earnings  
- ✅ Receive live notifications via Socket.io  

---

### 🛍️ Product Features

- ✅ Product listing & details pages  
- ✅ Filter by price, category, ratings  
- ✅ Search functionality  
- ✅ Product reviews and ratings  
- ✅ Discount and special offer display  
- ✅ Responsive design for all devices  

---

### 📦 Order Features

- ✅ Place orders via Stripe  
- ✅ Shipping form & confirmation pages  
- ✅ Order success / cancel pages  
- ✅ Track orders per user and seller  
- ✅ Request refunds with admin approval  

---

### 🔐 Admin Features

- ✅ Admin login & dashboard  
- ✅ Manage all users and sellers  
- ✅ Approve or ban sellers  
- ✅ Manage products and orders  
- ✅ View total sales & analytics  
- ✅ Handle refund requests  
- ✅ Access live chat system with users  

---

## 💬 Real-Time Features (Socket.io)

- ✅ One-on-one live chat between user ↔️ seller ↔️ admin  
- ✅ Live order updates (status, delivery, refund)  
- ✅ Notification system for new messages and actions  

---

## 🛠 Folder Structure

### Backend

/backend
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── sockets/
├── utils/
├── app.js
└── server.js


### Frontend

/frontend
│
├── redux/
├── components/
├── pages/
├── layouts/
├── App.js
└── index.js


---

## ⚙️ How to Run Locally

### 📌 Clone Repository

```bash
git clone https://github.com/your-username/mern-ecommerce-shop.git
cd mern-ecommerce-shop

📌 Setup Backend

cd backend
npm install
npm run dev

Create a .env file inside /backend with:

PORT=5000
DB_URL=your_mongodb_url
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SMTP_MAIL=your_email
SMTP_PASSWORD=your_app_password

📌 Setup Frontend
cd frontend
npm install
npm start

📮 API Endpoints (Sample)
Method	Endpoint	Description
POST	/api/v2/shop/create-shop	Create shop & send activation email
POST	/api/v2/shop/activation	Activate seller account
POST	/api/v2/user/create-user	Register new user
POST	/api/v2/user/login-user	Login user
GET	/api/v2/product/all	Get all products
POST	/api/v2/order/create	Create new order
PUT	/api/v2/order/update/:id	Update order status
✅ Status

🟢 All features implemented and tested successfully.
✨ Includes live chat, admin dashboard, real-time updates, and mobile responsiveness.

👨‍💻 Author

Tope Bello
📎 Portfolio: topebello.vercel.app

🫶 Support

If you find this project helpful, give it a ⭐ on GitHub!
Contributions, pull requests, and suggestions are welcome.
