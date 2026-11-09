# Databases That Make Sense

**Databases** · Intermediate · 30 hours · 9 lessons

Turn real-world information into clear data models, query with SQL, and understand indexes, transactions, and tradeoffs.

Open the [CS-Geni learning site](https://cs-geni.github.io/public/) and choose **Databases That Make Sense**. Progress on that site stays in your browser.

## You will be able to

- Design a normalized relational model
- Write useful SQL queries
- Explain indexes and query cost
- Use transactions to preserve invariants

## Before you start

- Python: Your First Programs

## Modules

### Model the world

Entities, relationships, keys, and constraints.

1. From nouns to tables
2. Keys and relationships
3. Normalization

### Ask with SQL

Retrieve and reshape data.

1. Select and filter
2. Join related data
3. Group and summarize

### Stay fast and correct

Indexes, transactions, and application boundaries.

1. How indexes help
2. Transactions
3. Schema change

## Capstone: Learning analytics database

Design and query a database for courses, enrollments, lessons, and progress events.

The brief, and the checklist for calling it done, is in [projects](https://github.com/CS-Geni/projects/blob/main/briefs/database-design.md).

- Courses, learners, lessons, and progress events are tables with keys.
- A learner cannot be enrolled twice in the same course.
- One query counts lessons completed per course.
- The schema is drawn before the queries.

## Books to read beside this course

Read these at the authors' sites. This repository links to them and does not copy the books.

- [Database Design, 2nd edition](https://opentextbc.ca/dbdesign01/) — Adrienne Watt and Nelson Eng. License: CC BY 4.0. Access: Openly remixable.
- [PostgreSQL Documentation](https://www.postgresql.org/docs/) — PostgreSQL Global Development Group. License: PostgreSQL License. Access: Openly remixable.
