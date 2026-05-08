# Momentum - Habit Tracker Backend

This repository is a [json-server](https://github.com/typicode/json-server) created to feed data into the React Application below.

#### [Client Repo here](https://github.com/wildfont/habit-tracker-frontend)

# Server Structure

## Collections

### habits

```javascript
{
  id,
  name,
  description,
  category,
  frequency,
  goal,
  color,
  icon,
  createdAt,
}
```

### completions

```javascript
{
  id,
  habitId,
  date,
  completed,
  notes,
  rating,
  progress,
}
```

### achievements

```javascript
{
  id,
  name,
  description,
  icon,
  condition,
  conditionType,
  unlockedAt,
}
```

## Used API Endpoints in the App

| HTTP Method | URL                         | Request Body                                              | Description                                    |
| ----------- | --------------------------- | --------------------------------------------------------- | ---------------------------------------------- |
| GET         | `/habits`                   |                                                           | Sends all habits                               |
| POST        | `/habits`                   | {name, description, category, frequency, goal, color, icon, createdAt} | Creates a new habit               |
| GET         | `/habits/:habitId`          |                                                           | Sends details of a specific habit              |
| PUT         | `/habits/:habitId`          | {name, description, category, frequency, goal, color, icon, createdAt} | Edits a habit                     |
| DELETE      | `/habits/:habitId`          |                                                           | Deletes a habit                                |
| GET         | `/completions`              |                                                           | Sends all completions                          |
| POST        | `/completions`              | {habitId, date, completed, notes, rating, progress}       | Creates a new completion                       |
| PUT         | `/completions/:completionId`| {habitId, date, completed, notes, rating, progress}       | Updates a completion (e.g. increment progress) |
| DELETE      | `/completions/:completionId`|                                                           | Deletes a completion                           |

## Links

### Collaborators

[Jordi Font](https://github.com/wildfont)

### Project

[Repository Link Client](https://github.com/wildfont/habit-tracker-frontend)

[Repository Link Server](https://github.com/wildfont/habit-tracker-backend)

[Deploy Link](https://habit-tracker-frontend-rouge.vercel.app/)

### Slides

[Slides Link](www.your-slides-url-here.com)