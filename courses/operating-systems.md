# How Operating Systems Work

**Operating systems** · Advanced · 46 hours · 9 lessons

Understand how an OS shares processors, isolates memory, coordinates concurrent work, and stores data reliably.

Open the [CS-Geni learning site](https://cs-geni.github.io/public/) and choose **How Operating Systems Work**. Progress on that site stays in your browser.

## You will be able to

- Explain processes and scheduling
- Reason about concurrency hazards
- Describe virtual memory
- Design a simple persistent storage layer

## Before you start

- Inside a Computer
- Data Structures in Practice

## Modules

### Virtualize the processor

Processes, scheduling, and system calls.

1. Process abstraction
2. Context switching
3. Scheduling policies

### Coordinate work

Threads, locks, and concurrency.

1. Race conditions
2. Locks and condition variables
3. Deadlock

### Memory and persistence

Virtual memory, files, and reliability.

1. Address spaces
2. Paging
3. Files and directories

## Capstone: Unix-style shell

Build a small shell with processes, pipes, redirection, and careful error handling.

The brief, and the checklist for calling it done, is in [projects](https://github.com/CS-Geni/projects/blob/main/briefs/operating-systems.md).

- The shell runs one program and waits for it.
- A pipe connects the output of one program to the input of the next.
- Output can be sent to a file.
- An empty command is refused, and a missing program is reported.

## Books to read beside this course

Read these at the authors' sites. This repository links to them and does not copy the books.

- [Operating Systems: Three Easy Pieces](https://pages.cs.wisc.edu/~remzi/OSTEP/) — Remzi and Andrea Arpaci-Dusseau. License: CC BY-NC-SA 4.0. Access: Openly remixable.
