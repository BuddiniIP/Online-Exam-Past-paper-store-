# Online Exam Past Paper Store

This project is a web application that allows students to browse and download past exam papers.

Technologies used:
- HTML
- CSS
- JavaScript
- Spring Boot
- MySQL

## How the system works
The backend (Spring Boot) provides APIs to fetch past papers by subject.
The frontend displays subjects and allows users to view and download papers.

## Note about past papers
Past paper PDF files are stored locally in the backend folder:

backend/src/main/resources/static/papers

Large PDF files are excluded from this GitHub repository using `.gitignore` to keep the repository lightweight.

To run the system locally, place the PDF files inside the `papers` folder.
