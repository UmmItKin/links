# Links - Your Personal Landing Page :link:

[![Release](https://github.com/UmmItKin/Links/actions/workflows/semantic-release.yml/badge.svg)](https://github.com/UmmItKin/Links/actions/workflows/semantic-release.yml)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Made with Supabase](https://img.shields.io/badge/Made%20with-Supabase-3ECF8E?logo=supabase)](https://supabase.com)
[![Comments by Giscus](https://img.shields.io/badge/Comments_by-Giscus-blue?logo=giscus&logoColor=white)](https://giscus.app)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/UmmItKin/links)
[![Deployed with Vercel](https://img.shields.io/badge/Deployed%20with-Vercel-black?logo=vercel)](https://vercel.com)

A modern, minimalist landing page that serves as your digital business card. Inspired by Linktree, but enhanced with custom features and a sleek design. Perfect for creators, developers, and professionals who want to share their online presence elegantly.

## Tech Stack

- **Frontend:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/) (Typescript)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for Style
- **Components:** [DaisyUI](https://daisyui.com/) for Style components
- **Backend:** [Supabase](https://supabase.com/) for analytics (page views and likes)
- **Comments:** [Giscus](https://giscus.app/) (powered by GitHub Discussions)
- **CI/CD:** GitHub Actions for automated deployment
- **Versioning:** Semantic Release for automated detection versioning
- **Hosting:** Vercel

## Getting Started

### Prerequisites

- Node.js
- Bun package manager (https://bun.sh)
- Supabase account (for analytics features)

### Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/UmmItKin/links.git
   cd links
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Setup Supabase (for analytics):
   - Create a new project on [Supabase](https://app.supabase.com/)
   - Create the required tables for analytics:

   <details>
   <summary>Click to expand SQL setup code</summary>

   See [example.env.sql](./example.env.sql) for the complete database setup code needed for analytics features.
   
   This SQL file includes:
   - Table creation for page views
   - RPC function for safely incrementing view counts
   - Row Level Security (RLS) policies configuration
   - Optional commented code for likes functionality
   </details>

   - Create a `.env` file in the project root with your Supabase credentials:
   ```shell
   ❯ cp -v .env.example .env
   
   VITE_SUPABASE_URL=your-supabase-project-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. Setup Giscus (for comments):
   - Ensure GitHub Discussions is enabled for your repository.
   - Create a new discussion category in your repository settings (e.g., "General" or "Announcements" – whichever you are using in your Giscus component).
   - Update the `repoId` and `categoryId` in `src/components/Giscus.tsx` with the values corresponding to your repository and chosen category. You can get these from the [Giscus website](https://giscus.app).

5. Start the development server:
   ```bash
   bun run dev
   ```

6. View your site at [http://localhost:5173](http://localhost:5173)

## Production Build

Create a production-ready build:
```bash
bun run build
```

Preview the production build:
```bash
bun run preview
```

The static files will be generated in the `dist/` directory.

## Deployment Options

### Vercel

This project is configured for deployment on Vercel. To deploy:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Build environment, leave it as is and allow Vercel to choose automatically.
4. Add your environment variables in the Vercel project settings:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

Vercel will automatically:
- Build your project
- Generate the commit hash for version tracking
- Deploy to production

### Environment Variables

For Vercel deployment, you need to add your Supabase credentials in the Vercel project settings:

1. Go to your Vercel project > Settings > Environment Variables
2. Add the following environment variables:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

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

## Image issue

One thing that concerns me is that I am using a background image as the wallpaper for the website, but the file is too large. To address this, we provide a script to convert any image file into WebP format. The tool uses the cwebp command-line interface to run.

```shell
cd public
./img2webp.sh --input <name_of_image_file> --output <name_of_image_file.webp>
```