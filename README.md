## @goldlabelapps/package

[npmjs.com](https://www.npmjs.com/package/@goldlabelapps/package)

> Small, TypeScript-first component library intended to be used by Shared UI components and cartridges in GoldLabel projects

#### Quick start

Wrap your app in the Setup component and configure your config

```
import { Setup } from '@goldlabelapps/core'

export default function Page(){
  return <Setup>
          <p>Hello</p>
          {CHILDREN}
        </Setup>
}
```

#### Install

1. Install in your JavaScript app

```
npm install @goldlabelapps/package
```

- Peer dependencies: `react`, `react-dom` (install in your app)


2. Build & publish

Install dev deps and build locally:

```
npm install
npm run build
```

To publish to the npm registry (requires npm login with org access):

```
npm publish --access public
```

This repository includes a GitHub Actions workflow at `.github/workflows/publish.yml` that builds the package and publishes to npm when a tag matching `v*` is pushed (for example `v0.1.0`). The workflow needs a repository secret named `NPM_TOKEN` with an npm automation token that has publish rights for `@goldlabelapps`.

1) Create an npm automation token (you mentioned you're logged into npm in the browser — that helps here):

  - Open https://www.npmjs.com/ and sign in (you're already signed in in the browser).
  - Go to your profile → Access Tokens (or https://www.npmjs.com/settings/<your-username>/tokens).
  - Create a new token with type `Automation` (or a publish-enabled token). Copy the token value — you will not be able to view it again.

2) Add the token to GitHub repository secrets:

  - On GitHub, go to the repository → Settings → Secrets & variables → Actions → New repository secret.
  - Name it `NPM_TOKEN` and paste the token value. Save.

  Alternatively, using the `gh` CLI (if installed and authenticated):

  ```bash
  gh secret set NPM_TOKEN --repo YOUR_ORG/YOUR_REPO --body "$(cat /path/to/token-file)"
  ```

3) Create and push a release tag to trigger the workflow:

  ```bash
  # bump package.json version (example)
  npm version 0.1.0 -m "chore(release): %s"

  # push commit and tag
  git push origin main --follow-tags
  ```

  The workflow will run on the pushed tag and, if `NPM_TOKEN` is set, publish the package to npm.

Local publish (if you prefer to publish from your machine):

- If you'd rather publish manually from this environment or your local machine you can log in with the npm CLI and publish directly:

```
npm adduser
npm publish --access public
```

- If you're already logged into npm in the browser, that does NOT automatically authenticate the terminal — you'll still need to either `npm adduser` in the terminal or create a token in the web UI and set it as an environment variable:

```
export NPM_TOKEN="<token-from-npm-website>"
npm publish --access public --//registry.npmjs.org/:_authToken=$NPM_TOKEN
```

Security notes
--------------

- Prefer using an npm Automation token (least privilege) and store it as a GitHub Actions secret. Do not commit tokens into the repo.
- The workflow only publishes for refs that start with `refs/tags/v` so publishing is gated by creating and pushing a `v*` tag.

Verifying the publish
---------------------

- After the workflow runs, check the Actions tab for the workflow run. If the `Publish package` step completed successfully, the package should be available on the npm registry at `https://www.npmjs.com/package/@goldlabelapps/core`.

`npm publish --access public`
