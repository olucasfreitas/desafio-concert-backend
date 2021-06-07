# Instructions

## Requirements

- PostgreSQL
- Yarn
- Node

### PostgreSQL

To install it without docker you will have to access [PostgreSQL](https://www.postgresql.org/), follow the instructions till the end.

To install with docker, run the command:

> $ docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres

After the installations is completed, create a database named `concert` with the GUI of your choices, recommended: [DBeaver](https://dbeaver.io/).

### Cloning and Running Migrations

After cloning the repository, navigate to the backend folder and run the following command on terminal to install dependencies:

> $ yarn

Next you'll have to run the following command to run database migrations:

> $ yarn typeorm migration:run

Now check in your datebase if the tables were created.

### Running the API

To run the API in development settings, type and run the following command on terminal:

> $ yarn dev:server

### Insomnia

For testing, the JSON file for [Insomnia](https://insomnia.rest/download/) is available on the main folder as "Insomnia_2021-06-06.json"
