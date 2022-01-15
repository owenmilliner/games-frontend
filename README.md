# Welcome to my Board Game Reviews app!

    Owen Milliner (15.01.2021)

## Overview

This app was created as a visual front end interface for the application of the API endpoints I had created previously.

## To run this app, use the command: `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Using this App

### User Logins

The app has a number of features available, most require you to be logged in as a user (using the input field in the top-right corner).

The available usernames are as follows:

- tickle112
- grumpy19
- happyamy2016
- cooljmessy
- weegembump
- jessjelly

### User Stories (functionality added)

Achieving a realistic user experience for this practice web app was a fundamental aspect of recreating a usable real-life application.

The available user stories are as follows:

- View a list of all reviews.
- View a filtered list of reviews based upon a selected category.
- View an individual review (with extra information shown).
- View an individual review's comments.
- Sort the list of reviews by (in both Ascending and Descending):
  - Date
  - Title
  - User
  - Category
  - Votes
- Log into a user account.
- Log out of a user account.
- Delete comment (when logged in as the comment's user).
- Delete review (when logged in as the review's user).
- Post a new review (When logged in as a user).
- Post a new comment to a review.
- Vote on a review.
- Remove my vote from a review.
- Vote on a comment.
- Remove my vote from a comment.
- See appropriate feedback when:
  - Loading/Waiting for page contents.
  - Instant update on review post.
  - Instant update on review deletion.
  - Instant update on comment post.
  - Instant update on comment deletion.
  - Noticeable change when a comment vote has been recorded.
- See an appropriate error when:
  - Trying to access an invalid route (e.g. /pineapples).
  - Trying to access an invalid review page (e.g. id='bananas')
  - Trying to access an non-existent review page (e.g. id='758492378')
  - Invalid username on login.
  - Incomplete form submission (comments/reviews).
