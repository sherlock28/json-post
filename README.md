# API JSON-POSTS 2021

Rest API built with Express JS, which returns json with post examples.

## To run the app use

```script
npm install
```

```
npm start
```

Open [http://localhost:3100](http://localhost:3100)

### Endpoints
```json
- **[GET]** **http://localhost:3100/api/posts**
- **[GET]** **http://localhost:3100/api/posts/:id**
- **[POST]** **http://localhost:3100/api/posts**
- **[PUT]** **http://localhost:3100/api/posts/:id**
- **[DELETE]** **http://localhost:3100/api/posts**
```

### Data input and output formats

- JSON contract used to create a post:

  ```json
    {
     "userId": 1,
     "title": "email-example",
     "body": "password-example",
    }
  ```
  
- JSON contract returned:
  
  ```json
   {
    "userId": 1,
    "id": "1",
    "title": "email-example",
    "body": "password-example",
   }
  ```

## Built with
- Node.js
- Express.js

## Aplicación

The application is deployed in:
[JSON-POSTS](https://posts-json.herokuapp.com/api/posts)
