## Linktree

This website is styled like Linktree, providing access to all my social platforms. I initially had a about page but found it challenging to create an effective one. So, I decided to switch to a Linktree-like style. It’s simpler and makes it easier to connect with me.

Here are some features I’ve worked on before:

## Codeberg API

I used to integrate the Codeberg API to showcase all my repositories. However, it turned out to be redundant. It’s more convenient to visit my account directly, so I removed this feature a while ago. LMFAO 🤣

## hCaptcha

I previously used hCaptcha to prevent email addresses from being harvested by bots. However, I now think hiding my email isn’t necessary, so I decided to release it directly. Consequently, I’ve removed the hCaptcha protection.

## Core Technologies

Built with Vite, React, Tailwind CSS, and daisyUI.

## Usage

To visit the website locally, run the following command:

```shell
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
