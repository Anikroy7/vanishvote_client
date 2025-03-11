# VanishVote

## Overview
VanishVote is a simple and anonymous polling web application where users can create, share, and participate in polls that disappear after a set duration. No login is required, ensuring privacy and simplicity. Users can vote anonymously, and poll results are only visible until the poll expires.

## Features
### ✅ Create & Share Polls
- Users can create a **multiple-choice** or **yes/no** poll.
- Each poll is assigned a unique link for sharing.
- Polls automatically expire after a chosen time (1 hour, 12 hours, 24 hours).

### ✅ Vote & View Results
- Anyone can vote **anonymously**.
- Option to **hide results** until the poll ends.
- Basic reactions available: **🔥 Trending, 👍 Like**.

### ✅ Privacy & Simplicity
- No user login required.
- Polls can be **private**, accessible only via a shared link.

### ✅ Bonus Features (Optional)
- Anonymous **comments** under polls.
- **Dark/light mode** for a better UI experience.

## Technology Stack
### **Frontend:**
- React.js or Next.js
- TailwindCSS (for styling, no external UI libraries)

### **Backend:**
- Node.js / Express (Simple REST API)

### **Database:**
- Firebase Firestore or MongoDB

## Installation & Setup
### **Prerequisites**
- Node.js & npm installed
- Firebase or MongoDB setup (depending on chosen database)

### **Backend Setup**
```sh
# Clone the repository
git clone https://github.com/Anikroy7/vanishvote_server.git
cd vanishvote-backend

# Install dependencies
npm install

# Set up environment variables in a `.env` file
PORT=5000
DB_URI=your_database_uri

# Start the backend server
npm start
```

### **Frontend Setup**
```sh
# Clone the repository
git clone https://github.com/Anikroy7/vanishvote_client.git
cd vanishvote-frontend

# Install dependencies
npm install

# Start the frontend server
npm run dev  # For Next.js
# or
npm start    # For React.js
```

## Usage
1. Navigate to the frontend URL.
2. Create a poll and get a unique sharing link.
3. Share the link with others.
4. Users vote anonymously, and results are available (if not hidden).
5. Polls expire after the chosen duration.

## Deployment
- **Frontend:** Deploy on Vercel / Netlify.
- **Backend:** Deploy on Render / Railway / Firebase Functions.
- **Database:** Use Firebase Firestore or MongoDB Atlas.

## Submission Details
- **GitHub Repository:** 
  - [Frontend Repo](https://github.com/yourusername