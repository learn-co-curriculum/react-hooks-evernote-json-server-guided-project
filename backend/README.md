README: Rails Backend
=====================

## Setup

```sh
# from within this directory:
bundle install
rails db:create db:migrate db:seed
rails s
```

Your Rails backend API will be running on `http://localhost:3000`.

## User ID

The seed file should create one user for you, so your default `USER_ID` should be `1`. If that doesn't work, debug it with the `/api/v1/users` route as shown below.

## Routes

| Method | Route               | Headers                                                              | Body                 |
| ------ | ------------------- |:--------------------------------------------------------------------:|:--------------------:|
| GET    | `/api/v1/users`     |                                                                      |                      |
| GET    | `/api/v1/notes`     |                                                                      |                      |
| POST   | `/api/v1/notes`     | `'Content-Type': 'application/json'`<br/>`'Accept': 'application/json'` | title, body, user_id |
| PATCH  | `/api/v1/notes/:id` | `'Content-Type': 'application/json'`<br/>`'Accept': 'application/json'` | title, body, user_id |

*Tips:*
* Test out your routes with [Postman](https://www.getpostman.com/) to see how they work and what they return.
* Look at the source code! There are many more routes that are not listed that may make your life easier. Use those development skills and hack the code!
