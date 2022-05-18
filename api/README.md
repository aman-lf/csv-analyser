# CSV Analyzer api

## Setup

Clone the repository and run

    $ npm install

Make a copy of `.env.example` as `.env` and update your application details and database credentials. Now, run the migrations and seed the database.

    $ npm run migrate

Finally, start the application.

    $ npm run dev (For development)

## Creating new Migrations

These are the commands to create a new migration and corresponding seed file.

    $ npm run make:migration <name>

Example,

    $ npm run make:migration create_tags_table
