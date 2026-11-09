# Designing Reliable Programs

**Programming foundations** · Intermediate · 28 hours · 9 lessons

Move beyond syntax: turn requirements into small components, manage complexity, test behavior, and communicate your design.

Open the [CS-Geni learning site](https://cs-geni.github.io/public/) and choose **Designing Reliable Programs**. Progress on that site stays in your browser.

## You will be able to

- Turn a problem statement into a program design
- Choose clear data representations
- Write focused automated tests
- Refactor without changing behavior

## Before you start

- Python: Your First Programs

## Modules

### From problem to design

Use examples, signatures, and small steps.

1. Clarify the problem
2. Examples before code
3. Data drives design

### Trust your code

Build feedback loops with tests and debugging.

1. Test behavior
2. Find the smallest failure
3. Refactor safely

### Programs that grow

Organize modules and handle failure explicitly.

1. Separate responsibilities
2. Model errors
3. Read unfamiliar code

## Capstone: Library lending service

Design and test a small application with users, books, loans, and clear error states.

The brief, and the checklist for calling it done, is in [projects](https://github.com/CS-Geni/projects/blob/main/briefs/program-design.md).

- Users, books, and loans are separate pieces of data with clear fields.
- Borrowing a missing book, or a book that is already out, fails with a specific error.
- Returning a book updates who has it.
- At least three examples were written down before the implementation.

## Books to read beside this course

Read these at the authors' sites. This repository links to them and does not copy the books.

- [How to Design Programs](https://htdp.org/) — Felleisen, Findler, Flatt, Krishnamurthi. License: CC BY-NC-ND 2.0. Access: Free to read.
- [Composing Programs](https://www.composingprograms.com/) — John DeNero. License: CC BY-SA 3.0. Access: Openly remixable.
