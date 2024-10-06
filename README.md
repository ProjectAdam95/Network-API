# Network-API

This project is a back-end API for a social network web application, allowing users to share thoughts, react to friends’ thoughts, and manage their friend lists.

## :ledger: Index

- [About](#beginner-about)
- [File Structure](#file_folder-file-structure)
- [Build](#hammer-build)  
- [Deployment](#rocket-deployment)  
- [Community](#cherry_blossom-community)
- [Contribution](#fire-contribution)
- [Resources](#page_facing_up-resources)
- [Gallery](#camera-gallery)
- [Credit/Acknowledgment](#star2-creditacknowledgment)
- [License](#lock-license)

## :beginner: About

The Social Network API is built using Node.js, Express.js, and MongoDB (via the Mongoose ODM). It provides the infrastructure for managing users, thoughts, reactions, and friends within a social network platform.

Features include:
- **User Management**: Create, read, update, and delete users.
- **Thought Management**: Create, read, update, and delete thoughts. Each thought is linked to a user.
- **Reaction Management**: Add reactions (replies) to thoughts, and delete reactions.
- **Friend Management**: Add and remove friends to a user's friend list.
- **Database Integration**: Uses MongoDB as the database with Mongoose as the ODM.
- **API Documentation**: Fully documented API routes for interacting with users, thoughts, reactions, and friends.

Additional Features:
- **Preview**: Includes example routes and requests to interact with the API, helping users navigate through the application.
- **Directory Structure**: Clear and easy-to-navigate file structure.

## :file_folder: File Structure

Below is a view of the file structure deployed to GitHub.

```plaintext

NETWORK-API/
│
├── config/
│   └── connection.js        # MongoDB connection setup
│
├── controllers/
│   ├── thoughtController.js  # Controller for thought and reaction logic
│   └── userController.js     # Controller for user and friend management
│
├── models/
│   ├── Reaction.js           # Reaction schema definition
│   ├── Thought.js            # Thought model definition
│   ├── User.js               # User model definition
│   └── index.js              # Model associations
│
├── routes/
│   ├── api/
│   │   ├── thoughtRoutes.js   # Routes for thought management
│   │   ├── userRoutes.js      # Routes for user and friend management
│   │   └── index.js           # Main API route handler
│   └── index.js               # Main API route handler
│
├── utils/
│   ├── data.js               # Mock data for testing
│   ├── seed.js               # Seeding database with data
│   └── index.js              # Index for utility functions
│
├── node_modules/             # Node.js dependencies (auto-generated)
│
├── .env                      # Environment variables (not tracked by Git)
├── .gitignore                # Git ignore file
├── package-lock.json         # Lockfile for installed dependencies
├── package.json              # Project metadata and dependencies
├── README.md                 # Project documentation
└── server.js                 # Main server file

```

## :hammer: Build

### Requirements
- **Node.js** (v14 or higher)
- **MongoDB**
- **NPM** (Node Package Manager)

### Build Steps
- **Version Control**: Regularly commit changes to a Git repository to track progress and maintain version history.
- **Code Editor**: Use a code editor like VS Code to modify existing code and make changes.
- **Testing**: Test the API routes using Insomnia or Postman.
- **Documentation**: Document code changes and setup instructions to facilitate collaboration and future maintenance.
- **Comments**: Add comments explaining code functionality for easier readability and understanding.

### :rocket: Deployment

To deploy this application, follow the instructions below:

1. Clone the repository:
    ```bash
    git clone "ENTER URL HERE"
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up your environment variables in a `.env` file:
    ```env
    MONGODB_URI='mongodb://localhost/social_network_db'
    PORT=3001
    ```

4. **Open MongoDB Compass** and connect to your local MongoDB instance:
    - Use the connection string: `mongodb://localhost:27017`
    - Create a new database called `social_network_db`.

5. Start the server:
    ```bash
    npm start
    ```

6. The server will start on `http://localhost:3001`.

7. Test the API routes using an API client like **Insomnia** or **Postman**.

If you're unable to resolve an issue, feel free to contact me or leave a comment under the issues link below!

### Contribution Links
- **Report a bug**: [Report Bug](https://github.com/ProjectAdam95/Network-API/issues)
- **Request a feature**: [Request Feature](https://github.com/ProjectAdam95/Network-API/issues)
- **Create a pull request**: [Pull Request](https://github.com/ProjectAdam95/Network-API/pulls)

## :page_facing_up: Resources

### Technologies Used:
- **Node.js**: JavaScript runtime for executing server-side code.
- **Express.js**: Web framework for building server-side applications and APIs.
- **Mongoose**: ODM for interacting with MongoDB databases.
- **MongoDB**: NoSQL database for storing and managing unstructured data.

### Software Used:
- **VS Code**: A powerful code editor for writing and managing code across various programming languages.
- **Git Bash**: A command-line interface for Git, providing Unix-like shell commands for version control and repository management.
- **LICEcap**: Screen recording software for creating preview gifs or videos.

## :camera: Gallery

Below is a preview of the API in action.

- Click here to view preview video/gif!: 

## :star2: Credit/Acknowledgment

Adam Todorovic

## :lock: License

This project is licensed under the MIT License.
