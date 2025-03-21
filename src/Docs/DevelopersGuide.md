# MaruDryFruits - Developer Guide

##  Table of Contents
- Getting Started
- Development Workflow
- Testing
- Version Control
- Best Practices

## Getting Started
Prerequisites

Node.js (v16 or higher)
npm (v6 or higher)
Git

Installation

Clone the repository

bashCopygit clone [<repository-url>](https://github.com/Xevenryan45/MaruDryFruits.git)

Navigate to project directory

bashCopycd marudryfruits

Install dependencies

bashCopynpm install

Start development server

bashCopynpm start
Development Workflow
Branch Strategy

Create feature branches from main
Use descriptive branch names (e.g., feature/add-cart, bugfix/navbar-responsive)

## Component Development
Write reusable and modular components
Follow component naming conventions
Implement proper prop types validation

## Testing
Running Tests
bashCopy# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
Testing Guidelines

Write unit tests for components using Jest and React Testing Library
Maintain minimum 80% code coverage
Test component behavior, not implementation

## Version Control
Commit Guidelines

Use meaningful commit messages
Follow conventional commits format

bashCopyfeat: add shopping cart component
fix: resolve responsive issues in navbar
docs: update README with setup instructions
Code Review Process

Create Pull Request
Request review from team members
Address review comments
Merge after approval

## Best Practices
Responsive Design

Use mobile-first approach
Implement breakpoints consistently
Test across different devices

Performance

Optimize images before import

Use code splitting where appropriate

Code Style

Follow ESLint configuration
Use Prettier for code formatting
Document complex logic with comments