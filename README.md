# Todo tasks (server)

## Description
This application handles the modification and storing of simple tasks

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)


## Installation

1. Clone the repository:
```bash
git clone https://github.com/vardjaklap/TodoBack.git
```
2. Navigate inside the project
 ```bash
cd TodoBack
```
3. Install the dependencies:

 ```bash
npm install
```
3. Update the connection for the database:
Access file src/config.ts and fill the required information to connect to the database.

WARNING: The database has to be new and empty, as it can try to drop the tables if they already exist. Try not to lose any data!

## Usage

1. To compile the typescript files and start the development server:
 ```bash
npm start
```

To see this backend in action install the frontend part as well: https://github.com/vardjaklap/TodoFront

2. To run the tests:
 ```bash
npm test
   ```


## Features

Create tasks;
Modify existing tasks;
Set the task as complete or incomplete;
Delete the task;
Save the information in the database.

## Technologies

Typescript
Node.JS
PostgreSQL
Chai + Mocha (testing)
