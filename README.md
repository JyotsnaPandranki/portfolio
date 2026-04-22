# Portfolio Website

A distinctive React Router portfolio built to satisfy the assignment requirements while also giving you a strong base for internships, placements, and future job applications.

### What is already included

- Home page with:
  - About Me
  - Research Interests
  - Personal Details
  - Profile Picture
- Projects page with at least 2 projects
- Navigation built with `NavLink`
- Styling for a polished, unique portfolio
- GitHub Pages deployment support
- `HashRouter` setup for GitHub Pages

### Update before submission

Open `src/data/portfolio.js` and replace:

- `fullName`
- `phone`
- `personalEmail`
- `collegeEmail`
- `location`
- `githubProfile`
- project descriptions if needed
- each project `github` link with your real repository URL

If you have your own photo, replace `src/assets/profile-placeholder.svg` or switch the import in `src/data/portfolio.js`.

### Run locally

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

Vite is configured to output to a `build` folder so it matches your assignment's GitHub Pages instructions.

### Deploy to GitHub Pages

1. Create a public GitHub repository named `portfolio`.
2. Update `homepage` in `package.json` with your GitHub username.
3. Push your code to GitHub.
4. Run:

```bash
npm run deploy
```

5. In GitHub, open `Settings -> Pages`.
6. Make sure the `gh-pages` branch is selected if GitHub does not detect it automatically.

### Submission checklist

- GitHub repository is public
- Portfolio site is deployed
- Home and Projects pages both work
- `NavLink` navigation works
- Profile picture is present
- Personal details are updated with your real information
- At least 2 project cards are present
- Project GitHub links are working
