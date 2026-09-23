# mernapp

A small full-stack food ordering prototype with a React client and an Express/MongoDB API.

## What is implemented

- React screens for the home page, account registration, and login.
- Express routes for account creation, login, and food data.
- Password hashing with bcrypt and token-based authentication with JWT.
- Food data is read from the MongoDB `food_items` and `foodcategory` collections.

This is a learning project, not a production-ready service. It has no automated backend test suite yet.

## Run locally

Use a MongoDB database that contains the expected food collections. In a terminal, configure a MongoDB URI and a fresh JWT signing key. Do not use credentials that have appeared in this repository.

```sh
export MONGODB_URI='mongodb://127.0.0.1:27017/mernapp'
export JWT_SECRET="$(node -e 'console.log(require("crypto").randomBytes(32).toString("hex"))')"
```

Start the backend:

```sh
cd backend
npm install
npm start
```

In another terminal, start the React client:

```sh
cd <repository-root>
npm install
npm start
```

The client runs on port 3000 and the API runs on port 3001. The current CORS configuration permits the local client origin.

## Security

- Keep `MONGODB_URI` and `JWT_SECRET` in environment configuration, never in tracked source files.
- The database connection string and JWT signing value were previously committed to this public repository. Treat them as exposed: rotate the database credential in its provider and replace any deployed signing key.
- Removing a value from the latest files does not erase it from Git history. If history needs to be scrubbed, coordinate a history rewrite after credential rotation.
