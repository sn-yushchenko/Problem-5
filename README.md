# Problem-5

## About The Project

This is simple rest API to demonstrate basic experience in programming


### Built With

This API was build with such technologies:

* Typescript as main language
* Express framework
* Postgresql with TypeORM

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Here are list of tools that should be installed before running this APP
* npm
  ```sh
  npm install npm@latest -g
  ```
* postgres
  ```sh
  brew install postgresql@15
  ```

### Installation

_Below are an steps for installation

1. Clone the repo
   ```sh
   git clone https://github.com/sn-yushchenko/Problem-5
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
4. Create database with relevant name

5. Enter your environment configurations to `.env`
6. Execute the command to reproduce all tables
     ```sh
       npm run migrate
    ```
7. Execute the server
    ```sh
       npm run start
    ```

## Usage

If you execute API locally, you will be able to use CRUD with the next enpoints

**POST(CREATE ENTITY)**: localhost:port/stores
body: {name, email, description}

**PUT(UPDATE ENTITY)**: localhost:port/stores/:id
body: {name, email, description}

**GET(GET ENTITIES)**: localhost:port/stores

**GET(GET ENTITY DETAILS)**: localhost:port/stores/:id

**DELETE(DELETE ENTITY)**: localhost:port/stores/:id



## Contact

Serhii Yushchenko

Email: <sn-yushchenko@ukr.net>

Project Link: https://github.com/sn-yushchenko/Problem-5



