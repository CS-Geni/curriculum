# Secure by Design

**Security** · Intermediate · 30 hours · 9 lessons

Learn defensive thinking, threat modeling, identity, cryptography basics, web risks, and secure development without exploit-first teaching.

Open the [CS-Geni learning site](https://cs-geni.github.io/public/) and choose **Secure by Design**. Progress on that site stays in your browser.

## You will be able to

- Model threats and trust boundaries
- Apply least privilege and defense in depth
- Explain encryption, hashing, and signatures
- Prevent common web security failures

## Before you start

- Designing Reliable Programs
- Networks from First Principles recommended

## Modules

### Think defensively

Assets, adversaries, boundaries, and risk.

1. What are we protecting?
2. Threat models
3. Design for least privilege

### Trust and identity

Authentication, authorization, and cryptographic tools.

1. Identity is not permission
2. Hashes and encryption
3. Keys and certificates

### Safer applications

Input, sessions, dependencies, and verification.

1. Validate at boundaries
2. Protect sessions
3. Secure development lifecycle

## Capstone: Security review dossier

Threat-model a small application, improve its design, and document how each control reduces risk.

The brief, and the checklist for calling it done, is in [projects](https://github.com/CS-Geni/projects/blob/main/briefs/secure-by-design.md).

- The dossier lists the assets worth protecting.
- It names who may see each asset, and who may not.
- Browser, server, and data store are separate boundaries.
- Each risk you include names one control and the harm that control reduces.
- The dossier has no exploit steps, payloads, or instructions for breaking a system.

## Books to read beside this course

Read these at the authors' sites. This repository links to them and does not copy the books.

- [Building Secure & Reliable Systems](https://google.github.io/building-secure-and-reliable-systems/raw/toc.html) — Adkins et al.. License: Free to read on official site. Access: Free to read.
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/) — OWASP Foundation. License: CC BY-SA 4.0. Access: Openly remixable.
