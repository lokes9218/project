# Backend API Project

A Node.js backend API built with Express.js and MongoDB for user authentication and post management.

## 🚀 Features

- User registration and authentication
- JWT-based login/logout system
- Password hashing with bcryptjs
- CRUD operations for posts
- MongoDB database integration
- RESTful API design
- Environment variable configuration

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: bcryptjs for password hashing
- **Environment**: dotenv for configuration

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── constant.js
│   │   └── database.js
│   ├── controllers/
│   │   ├── post.controller.js
│   │   └── user.controller.js
│   ├── models/
│   │   ├── post.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   ├── post.routes.js
│   │   └── user.routes.js
│   ├── app.js
│   └── index.js
├── package.json
└── README.md
```

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/lokes9218/project.git
cd project/backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the development server:
```bash
npm run dev
```

For production:
```bash
npm start
```

## 📡 API Endpoints

### User Routes (`/api/v1/users`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register a new user |
| POST | `/login` | Login user |
| POST | `/logout` | Logout user |

### Post Routes (`/api/v1/posts`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/create` | Create a new post |
| GET | `/get` | Get all posts |
| PATCH | `/update/:id` | Update a post by ID |
| DELETE | `/delete/:id` | Delete a post by ID |

## 🗄️ Database Models

### User Model
- `username`: String (required, unique)
- `email`: String (required, unique)
- `password`: String (required, hashed)
- `createdAt`: Date
- `updatedAt`: Date

### Post Model
- `title`: String (required)
- `content`: String (required)
- `author`: ObjectId (reference to User)
- `createdAt`: Date
- `updatedAt`: Date

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header for protected routes:

```
Authorization: Bearer <your_jwt_token>
```

## 📝 Scripts

- `npm start`: Start the production server
- `npm run dev`: Start the development server with nodemon

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Lokeswaran S**

---

*This project was created as part of learning backend development.*