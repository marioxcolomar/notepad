# Task

Build a notepad website storing data in the frontend. Use TypeScript, react-router, react-hook-form and react-query.

# Implementation criteria

[x] The application should allow for seeing existing notes and adding/removing notes.  
[x] The homepage in the notepad must list each note with a title, text and created timestamp.  
[x] The notepad must have a home page ("/") with a list of notes.  
[x] The notepad must have a page for adding a new note ("/add").  
[x] When clicking on a note in the homepage, a modal opens showing the note contents, title and createdAt. It should also have a delete button.  
[x] The "/add" page should use react-hook-form to validate that the title and description are not empty after trimming.  
[x] Data should be stored in a local cache, which you update using a useAddNote mutation, and which you query using a useListNotes query.  

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
