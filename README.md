# To-Do List Application

## Description

This is a simple web application to manage a to-do list. Users can read, create, and update duties.

## Prerequisites

- Node.js (>= 18.x)
- npm (>= 9.x)

## Setup (Development)

### Backend

1. Navigate to the backend directory:

   ```bash
   cd todo-app/backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

4. API is available at the base url (http://localhost:4000)

#### Note: Supposed the PostgreSQL is running at localhost:5432

You may start the DB instance through docker compose (at the root directory of this repository)

```bash
docker compose up postgresdb
```

### Frontend

1. Navigate to the frontend directory:

   ```bash
   cd todo-app/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React application:
   ```bash
   npm run dev
   ```

4. Web UI is available at the base url (http://localhost:5173)

#### Note: Supposed the backend is running at localhost:4000. 

You may start the instance through docker compose (at the root directory of this repository)

```bash
docker compose up backend
```

Or running the development backend service (mentioned in previous section)

## Running Tests

### Backend Tests

Navigate to the backend directory and run:

```bash
npm test
```

### Frontend Tests

Navigate to the frontend directory and run:

```bash
npm test
```
