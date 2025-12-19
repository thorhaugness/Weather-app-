# Environment & Limitations

**Summary:** You do not have admin rights on this PC. That mainly restricts installing system-wide software and changing system settings, but you can still use local developer tools and GitHub for building and hosting static sites.

What you can/can't do (short):

- ✅ Use local Node.js / npm/yarn if already installed for local dev (no admin required to run them).
- ✅ Run Git locally to manage and push commits if Git is already installed and configured.
- ✅ Use GitHub (web UI) to create repositories, and GitHub Actions to build & publish (no local admin required).
- ✅ Host a static site using **GitHub Pages** — the CI/CD workflow will run on GitHub's servers and publish the build output.

- ❌ Cannot install system-level tools or services that require admin privileges (e.g., installing a system package manager, changing firewall rules, binding privileged ports).
- ❌ Cannot run local services that need elevated rights.

Notes / Requirements for deployment:
- You (or someone with GitHub account) must create a repository on GitHub and push this project to it (or use `gh repo create` if authenticated).
- The provided GitHub Actions workflow will build and deploy to GitHub Pages automatically when you push to `main`.
- No secrets are required for the default Pages workflow used here — it uses GitHub's Pages actions permissions.

If you want, I can also:
- Add instructions/commands for creating the remote repo and pushing (CLI & web UI).
- Use `gh` to create the repo and push if you have `gh` installed and authorized.
