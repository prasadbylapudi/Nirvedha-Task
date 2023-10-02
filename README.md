# Todo App

A simple Todo application built with MERN Stack.

# View the live hosted application here [Todo application](https://nirvedha-task.vercel.app/login)


![nirvedha login](https://github.com/prasadbylapudi/Nirvedha-Task/assets/31813770/98275bff-54ba-4450-bc61-402dbacfb2e6)

![image](https://github.com/prasadbylapudi/Nirvedha-Task/assets/31813770/1fd74f67-2f35-49fb-a093-257b3359ba81)


![task page](https://github.com/prasadbylapudi/Nirvedha-Task/assets/31813770/378345fb-7916-4005-bb17-93ed9f206796)

![editing ](https://github.com/prasadbylapudi/Nirvedha-Task/assets/31813770/8defbc51-a05f-4258-9a9e-af2972d6e7a0)




## Technologies Used

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/)

 Clone the repository:

```bash
git clone https://github.com/prasadbylapudi/Nirvedha-Task.git
```


## Getting Started
## installing dependencies 
`cd frontend`
`npm install`
`npm start` 

`cd backend` 
`npm install` 
`npm start` 



Certainly! Below is the API documentation for your Todo App, presented in the format you provided:

---


## Authentication

### Register User

**URL**: `/api/users/`

**Method**: `POST`

**Description**: Register a new user.

**Request Body**:

- `name` (string): The name of the user.
- `email` (string): The email address of the user.
- `password` (string): The password for the user.

**Example Request**:

```json
POST /api/users/
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

### Login User

**URL**: `/api/users/login`

**Method**: `POST`

**Description**: Log in an existing user.

**Request Body**:

- `email` (string): The email address of the user.
- `password` (string): The password for the user.

**Example Request**:

```json
POST /api/users/login
{
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

### Logout User

**Description**: Log out the currently logged-in user.

**URL**: `/api/users/logout`

**Method**: `GET`

**Example Request**:

```json
GET /api/users/logout
```

---

## Todo Management

### Create Todo

**URL**: `/api/todos`

**Method**: `POST`

**Description**: Create a new todo.

**Request Body**:

- `text` (string): The text content of the todo.
- `isCompleted` (boolean): Indicates whether the todo is completed.

**Example Request**:

```json
POST /api/todos
{
  "text": "Finish API documentation",
  "isCompleted": false
}
```

### Get All Todos

**URL**: `/api/todos`

**Method**: `GET`

**Description**: Get a list of all todos.

**Example Request**:

```json
GET /api/todos
```

### Update Todo

**URL**: `/api/todos/:id`

**Method**: `PUT`

**Description**: Update a specific todo by its ID.

**Request Parameters**:

- `id` (string): The unique ID of the todo to be updated.

**Request Body**:

- `text` (string): The updated text content of the todo.
- `isCompleted` (boolean): Indicates whether the todo is completed.

**Example Request**:

```json
PUT /api/todos/12345
{
  "text": "Updated task description",
  "isCompleted": true
}
```

### Delete Todo

**URL**: `/api/todos/:id`

**Method**: `DELETE`

**Description**: Delete a specific todo by its ID.

**Request Parameters**:

- `id` (string): The unique ID of the todo to be deleted.

**Example Request**:

```json
DELETE /api/todos/12345
```

---



