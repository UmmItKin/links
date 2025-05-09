# Links - Your Personal Landing Page :link:

[![Release](https://github.com/UmmItC/Links/actions/workflows/semantic-release.yml/badge.svg)](https://github.com/UmmItC/Links/actions/workflows/semantic-release.yml)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/UmmItC/links)

A modern, minimalist landing page that serves as your digital business card. Inspired by Linktree, but enhanced with custom features and a sleek design. Perfect for creators, developers, and professionals who want to share their online presence elegantly.

## Tech Stack

- **Frontend:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/) (Typescript)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for Style
- **Components:** [DaisyUI](https://daisyui.com/) for Style components
- **CI/CD:** GitHub Actions for automated deployment
- **Versioning:** Semantic Release for automated detection versioning
- **Hosting:** GitHub Pages

## Getting Started

### Prerequisites

- Node.js
- Yarn package manager

### Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/UmmItC/links.git
   cd links
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   yarn run dev
   ```

4. View your site at [http://localhost:5173](http://localhost:5173)

## Production Build

Create a production-ready build:
```bash
yarn run build
```

Preview the production build:
```bash
yarn run preview
```

The static files will be generated in the `dist/` directory.

## Deployment Options

### GitHub Pages (Recommended)

This project includes automated deployment to GitHub Pages through GitHub Actions workflows (see `.github/` directory).

Simply push your changes to the master branch, and the site will be automatically:

- Built
- Versioned
- Deployed

## Development Guidelines

### Commit Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```bash
feat: add new feature
fix: resolve an issue
docs: update documentation
style: formatting changes
refactor: code restructuring
test: add/update tests
chore: maintenance tasks
```

### Branch Strategy

- `master`: Production-ready code (do not use this branch, since it's the Production branch)
- `dev`: Development and integration
- Feature branches: `feature/your-feature-name`

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](./LICENSE) file for details.

## Contributing

There are many ways to contribute, such as recommending features, reporting bugs, fixing documentation typos, and more.

If you would like to open a Pull Request (or Merge Request), please review this document first before making any commits or fixes: [CONTRIBUTING.md](./CONTRIBUTING.md).

Thank you for your interest in contributing!