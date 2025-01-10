# Contributing to Entrepreneur Hub MVP

First off, thank you for considering contributing to Entrepreneur Hub MVP! It's people like you that make it such a great tool.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct:

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

Contributions are made to this repo via Issues and Pull Requests (PRs).

- Search for existing Issues and PRs before creating your own
- We work on a fork-and-pull basis:
  1. Fork the repo
  2. Create a branch
  3. Submit a PR

### Issues

Issues should be used to:
- Report bugs
- Request new features
- Discuss potential changes before creating a PR

### Pull Requests

PRs are always welcome and can be a quick way to get your fix or improvement slated for the next release. In general, PRs should:

1. Only fix/add the functionality in question OR address wide-spread whitespace/style issues, not both
2. Add unit or integration tests for fixed or changed functionality (if a test suite already exists)
3. Address a single concern in the least number of changed lines as possible
4. Include documentation in the repo
5. Be accompanied by a complete Pull Request template (provided)

For changes that address core functionality or would require breaking changes (e.g. a major release), it's best to open an Issue to discuss your proposal first.

## Development Process

### Setting Up Your Environment

1. Fork the repository
2. Clone your fork (replace `your-username` with your GitHub username):
   ```bash
   git clone https://github.com/your-username/entrepreneur-hub-mvp.git
   ```
3. Add the upstream repository:
   ```bash
   git remote add upstream https://github.com/richardp23/entrepreneur-hub-mvp.git
   ```
4. Install dependencies:
   ```bash
   npm install
   ```

### Creating a Branch

1. Update your local main:
   ```bash
   git switch main
   git pull upstream main
   ```
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Making Changes

1. Make your changes
2. Run tests:
   ```bash
   npm test
   ```
3. Run linting:
   ```bash
   npm run lint
   ```
4. Commit your changes:
   ```bash
   git add .
   git commit -S -m "feat: description of your changes"
   ```

### Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation only changes
- `style:` Changes that do not affect the meaning of the code
- `refactor:` Code change that neither fixes a bug nor adds a feature
- `perf:` Code change that improves performance
- `test:` Adding missing tests
- `chore:` Changes to the build process or auxiliary tools

### Submitting a Pull Request

1. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
2. Go to the repository and open a Pull Request
3. Fill in the PR template
4. Request review from maintainers

## Style Guide

### Code Formatting

- We use ESLint and Prettier for code formatting
- TypeScript is our primary language
- Follow the existing code style
- Use meaningful variable names
- Comment your code when necessary

### TypeScript Guidelines

- Use TypeScript's strict mode
- Prefer interfaces over types when possible
- Use proper type annotations
- Avoid using `any`

### Testing

- Write tests for new features
- Update tests for bug fixes
- Ensure all tests pass before submitting PR
- Aim for high test coverage

## Project Structure

Please maintain the existing project structure:

- Frontend code goes in `src/frontend`
- Backend code goes in `src/backend`
- Database-related files go in `src/database`
- Tests go in their respective directories under `tests/`
- Documentation goes in `docs/`

## Need Help?

- Check out the [documentation](docs/)
- Join our [community chat](link-to-chat)
- Create an issue

## Recognition

Contributors who make significant improvements will be added to the README.md file.

Thank you for contributing! 