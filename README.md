## Linktree

This website is styled like Linktree, providing access to all my social platforms :) It’s simpler and makes it easier to connect with me.

## Core Technologies

Built with:

- React (Vite)
- Tailwind CSS
- DaisyUI

## Usage

To visit the website locally, run the following command:

```shell
npm install
npm run dev
```

You can view it at `localhost:5173` while developing.

### Building

To build the website, run the following commands:

```shell
npm install
yarn run build
```

The static files will be located in `./dist/`.

### Hosting

For hosting, I have a GitLab CI configuration. Just adjust the necessary values. The configuration file is located at `./.gitlab-ci.yml`.

If you prefer using nginx, Apache, or another VPS setup, simply place the contents of the `dist` directory on your server.
