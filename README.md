README: React Evernote
======================

Task Lister is making its return in React! However, this time we'll be kicking it up a notch and using that same backend to drive an Evernote-like frontend built in React.

Your goal will be to complete the baseline deliverables using the provided starter code and then make this project your own by building out unique stretch goals. Some suggestions are listed below, but try to be creative!

## Requirements

- [ ] Complete all of the *Deliverables*.
- [ ] Build out at least 1 stretch goal feature.

## Setup

The codebase is split up into a Rails API backend and a React frontend. Everything is contained in this single repository. Your Rails code is located inside of the `backend` folder and your React code is located inside of the `frontend` folder.

Each of those folders has a README file with setup instructions. For conciseness, those instructions are copy pasted here:

### Frontend

```sh
# from within this directory:
npm install
PORT=4000 npm start
```

This React app will be running on `http://localhost:4000`.

### Backend

```sh
# from within this directory:
bundle install
rails db:create db:migrate db:seed
rails s
```

Your Rails backend API will be running on `http://localhost:3000`.

#### User ID

The seed file should create one user for you, so your default `USER_ID` should be `1`. If that doesn't work, debug it with the `/api/v1/users` route as shown below.

#### Routes

| Method | Route               | Headers                                                              | Body                 |
| ------ | ------------------- |:--------------------------------------------------------------------:|:--------------------:|
| GET    | `/api/v1/users`     |                                                                      |                      |
| GET    | `/api/v1/notes`     |                                                                      |                      |
| POST   | `/api/v1/notes`     | `'Content-Type': 'application/json'`<br/>`'Accept': 'application/json'` | title, body, user_id |
| PATCH  | `/api/v1/notes/:id` | `'Content-Type': 'application/json'`<br/>`'Accept': 'application/json'` | title, body, user_id |

**Tips:**

* Test out your routes with [Postman](https://www.getpostman.com/) to see how they work and what they return.
* Look at the source code! There are many more routes that are not listed that may make your life easier. Use those development skills and hack the code!

## Provided Code

**Backend**

* The entire backend API is complete for the baseline deliverables.
* You should not have to modify this code unless you want to add stretch features that are not currently supported by this API.

**Frontend**

* All CSS styles are provided for you.
* Many components are provided for you, but most are not completely functional. It is your job to read the code and figure out how to incorporate it into your app.

## Deliverables

Look at the gif below to see how the app should look and behave. These are the baseline deliverables you need to complete:

- [ ] Display all note titles in a sidebar.
- [ ] On clicking a note, display its contents on the right panel
- [ ] Also display an edit button in the right panel when populated
- [ ] User can edit the title and body on the right panel
- [ ] In edit mode, also show a save button which saves the note PATCH
- [ ] New note button will open an empty form to edit
- [ ] Saving that should POST
- [ ] Add a filter to search through your notes list by title and body

![result](react-evernote.gif)

## Stretch Goals

When you are finished with the *Delieverables*, you can build out any new features that you want. This is your chance to be creative and make your project unique!

Some suggestions:

- Sorting by date created, alphabetical, etc.
- Use `react-router` to create a multi-page app
- User signup & login
- Sharing notes with other users
- Rich text formatting
- Tagging
- Emailing notes
