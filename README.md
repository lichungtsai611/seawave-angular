# Seawave Angular Project

This is the frontend application for Seawave, built with Angular.

## Branch Strategy

We follow a modified Git Flow workflow with the following branches:

- `main`: Production-ready code
- `develop`: Main development branch
- `feature/*`: New features
- `bugfix/*`: Bug fixes
- `release/*`: Release preparation
- `hotfix/*`: Emergency fixes for production

### Branch Workflow

1. Development:
   - Create feature branches from `develop`
   - Name format: `feature/feature-name`
   - Create pull request to merge back into `develop`

2. Bug Fixes:
   - Create bugfix branches from `develop`
   - Name format: `bugfix/bug-description`
   - Create pull request to merge back into `develop`

3. Releases:
   - Create release branches from `develop`
   - Name format: `release/vX.X.X`
   - Merge into both `main` and `develop`

4. Hotfixes:
   - Create hotfix branches from `main`
   - Name format: `hotfix/description`
   - Merge into both `main` and `develop`

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/lichungtsai611/seawave-angular.git
   cd seawave-angular
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   ng serve
   ```

4. Build for production:
   ```bash
   ng build --configuration production
   ```

## Deployment

The application is deployed to: http://45.76.192.16

## Technologies Used

- Angular 17
- TypeScript
- SCSS
- WordPress REST API
