## [1.3.1](https://github.com/UmmItC/links/compare/v1.3.0...v1.3.1) (2025-04-28)


### Bug Fixes

* **release:** update .releaserc.json to preserve version during releases ([4621984](https://github.com/UmmItC/links/commit/4621984f7e9fca2b38e256889eeba692c58b8e90))

# [1.3.0](https://github.com/UmmItC/links/compare/v1.2.1...v1.3.0) (2025-04-28)


### Features

* **GearPage:** enhance gear items with icons for better visual representation ([fcb5f2c](https://github.com/UmmItC/links/commit/fcb5f2c67380d875b2649b6ece9103902b0a3c10))

## [1.2.1](https://github.com/UmmItC/links/compare/v1.2.0...v1.2.1) (2025-04-28)


### Bug Fixes

* bump version from 1.1.1 to 1.2.0 due to a human error that affected the CI system ([863ad6a](https://github.com/UmmItC/links/commit/863ad6aada0a1fb20ee53282e3ca0ae921dbf27b))

# [1.2.0](https://github.com/UmmItC/links/compare/v1.1.0...v1.2.0) (2025-04-26)

### Bug Fixes

* **ci:** adjust VITE_BASE_URL in workflow and set dynamic base path in Vite config ([277ce60](https://github.com/UmmItC/links/commit/277ce603d9f0590b21c7a42d8d79df17ea36b770))
* **ci:** refactor Vite config to use dynamic base URL and update workflow to set environment variable ([e5060a1](https://github.com/UmmItC/links/commit/e5060a15f0c5e8e7309a03d78d9120afc906935e))
* **ci:** remove CNAME file from PR preview workflow ([c464774](https://github.com/UmmItC/links/commit/c464774b55a826f623d8b94ea530e40a674366c8))
* **ci:** remove CNAME file from PR preview workflow ([077a64b](https://github.com/UmmItC/links/commit/077a64bc22b6761190ab6c77c0d07d2442132804))
* **ci:** update Dependabot configuration to manage npm dependencies instead of Yarn ([1876f2d](https://github.com/UmmItC/links/commit/1876f2dcb6c0528213b1cadb8c7a047fd9515a07))
* **ci:** update Dependabot configuration to remove labels and streamline commit message format ([043aee1](https://github.com/UmmItC/links/commit/043aee1c8ffc45a69c472b19b53371c2ba820e8a))
* **ci:** update PR preview URL in workflow to use specific URL ([c8c19e5](https://github.com/UmmItC/links/commit/c8c19e5dfc034a4ffae618d31ae3d3942faaed9a))
* **ci:** update PR preview workflow permissions and add token for deployment ([c788991](https://github.com/UmmItC/links/commit/c788991453706cfb92e5f147ac0b3f16ce610241))
* **ci:** update PR preview workflow to use new deployment action and adjust environment variables ([1651e80](https://github.com/UmmItC/links/commit/1651e80f957c58b8f6127d3af4f9755519e72b2a))
* **ci:** update PR preview workflow to use Yarn and include commit hash generation ([7d4510c](https://github.com/UmmItC/links/commit/7d4510cb4027d87ac280ad6bba79de5a9b10a7a6))
* configure Vite server settings for history API fallback and set base path ([a5b32e3](https://github.com/UmmItC/links/commit/a5b32e3e2048c0a1d35b206a24f8a2429c36fbcf))
* create _redirects file for routing to index.html with 200 status ([e55533f](https://github.com/UmmItC/links/commit/e55533fc68ff1ba0f84625836a476a2934482ec5))
* switch from BrowserRouter to HashRouter for react routing ([d9f8aa0](https://github.com/UmmItC/links/commit/d9f8aa0b10e7349e480a64ba85fbf05dfaf1133d))
* update _redirects file format and set BrowserRouter basename ([69be663](https://github.com/UmmItC/links/commit/69be663729e013bd0d8036a3a57ad89cae388cbf))

### Features

* add automatic changelog and release commit generation ([61d43bf](https://github.com/UmmItC/links/commit/61d43bfebff6c25e2edc4443832d5a5bb4f04311))

# [1.1.0](https://github.com/UmmItC/links/compare/v1.0.0...v1.1.0) (2025-3-19)

Here’s the updated release note for version 1.1.0:

### Full Changelog

You can view the full changelog and commit history for this release [here](https://github.com/UmmItC/Links/commits/v1.1.0).

#### Chore

- Update bio description. [`78fb3c1`](https://github.com/UmmItC/Links/commit/78fb3c1)
- Replace Librepay with Ko-fi in Links component. [`3dc42b6`](https://github.com/UmmItC/Links/commit/3dc42b6)
- Remove theme toggle from Navbar component. [`260d5bc`](https://github.com/UmmItC/Links/commit/260d5bc)

#### Features

- Add meta tags for SEO and social sharing, update page title to `UmmIt - Links`. [`dd1fd31`](https://github.com/UmmItC/Links/commit/dd1fd31)
- Add page routing and restructure App component for improved navigation. [`2e0e9d1`](https://github.com/UmmItC/Links/commit/2e0e9d1)
- Add `react-router-dom` package for routing support. [`3a6d28f`](https://github.com/UmmItC/Links/commit/3a6d28f)
- Create Navbar component with responsive sticky design and mobile menu support. [`3455bd3`](https://github.com/UmmItC/Links/commit/3455bd3)

#### Styles

- Add GNU/Linux Tux icon next to My name in Navbar and HomePage. [`52ab8e5`](https://github.com/UmmItC/Links/commit/52ab8e5)
- Enhance GPG modal appearance and button styles. [`27decfc`](https://github.com/UmmItC/Links/commit/27decfc)
- Update my data, correct curl command URL, and enhance links with new icons and labels. [`7d83a1b`](https://github.com/UmmItC/Links/commit/7d83a1b)
- Redesign Footer component with new icons, improved layout, and updated copyright to current year only. [`9166fc7`](https://github.com/UmmItC/Links/commit/9166fc7)
- Enhance footer with icons, improved layout, and commit hash display. [`00bdc2b`](https://github.com/UmmItC/Links/commit/00bdc2b)
- Enhance footer and link styles with transparency effects for improved aesthetics. [`696b5d0`](https://github.com/UmmItC/Links/commit/696b5d0)
- Add background wallpaper with component and improve footer aesthetics and link styles. [`8253297`](https://github.com/UmmItC/Links/commit/8253297)
- Refactor to a sticky blurred navbar for improved layout and styling. [`1a32b03`](https://github.com/UmmItC/Links/commit/1a32b03)
- Update Navbar and Footer styles for improved aesthetics and hover effects. [`9009500`](https://github.com/UmmItC/Links/commit/9009500)

#### Docs

- Update README to employ Yarn in place of npm and revise hosting instructions for GitHub Pages. [`655f640`](https://github.com/UmmItC/Links/commit/655f640)
- Update comments for GitHub CI and remove unused FaGitlab import. [`265568b`](https://github.com/UmmItC/Links/commit/265568b)
- Rename LICENSE file and update year. [`b2cc88f`](https://github.com/UmmItC/Links/commit/b2cc88f)

#### Build

- Rename profile name to `links` and remove `package-lock.json`. [`46a5640`](https://github.com/UmmItC/Links/commit/46a5640)
- Migrate project to latest Yarn version and upgrade dependencies. [`ecb8cac`](https://github.com/UmmItC/Links/commit/ecb8cac)
- Migrate to Tailwind CSS v4. [`4061a43`](https://github.com/UmmItC/Links/commit/4061a43)

#### Fix

- Resolve GPG fetching issue and improve modal handling. [`b756610`](https://github.com/UmmItC/Links/commit/b756610)
- Prevent horizontal overflow by hiding overflow-x on html and body. [`fc73a20`](https://github.com/UmmItC/Links/commit/fc73a20)

### Full Changelog

You can view the full changelog and commit history for this release [here](https://github.com/UmmItC/Links/commits/v1.1.0).

# [1.2.0](https://github.com/UmmItC/links/compare/v1.1.0...v1.2.0) (2025-01-12)

🎉 **This is the first release of Links!** 🎉

As this is the first version, there are currently no changes to compare against previous versions. (No tag lol)

### Full Changelog

You can view the full changelog and commit history for this release [here](https://github.com/UmmItC/Links/commits/v1.0.0).
