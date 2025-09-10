# Prettier Setup Guide

Panduan lengkap konfigurasi Prettier yang terintegrasi dengan ESLint untuk project Next.js ini.

## 🎯 What's Configured

### Packages Installed

- `prettier` - Code formatter
- `eslint-config-prettier` - Disable ESLint rules that conflict with Prettier
- `eslint-plugin-prettier` - Run Prettier as ESLint rule
- `husky` - Git hooks
- `lint-staged` - Run linters on staged files

### Configuration Files

- `.prettierrc` - Prettier configuration
- `.prettierignore` - Files to ignore
- `eslint.config.mjs` - Updated with Prettier integration
- `.vscode/settings.json` - VS Code integration
- `.husky/pre-commit` - Pre-commit hook

## 🚀 Available Scripts

### Formatting Scripts

```bash
# Format all files
npm run format

# Check formatting without fixing
npm run format:check

# Format specific files (used by lint-staged)
npm run format:staged

# Fix ESLint issues
npm run lint:fix

# Type checking
npm run type-check

# Run all checks
npm run check-all

# Fix all issues
npm run fix-all
```

## ⚙️ Prettier Configuration

Current settings in `.prettierrc`:

```json
{
  "semi": true, // Add semicolons
  "trailingComma": "es5", // Trailing commas where valid in ES5
  "singleQuote": true, // Use single quotes
  "printWidth": 80, // Line width
  "tabWidth": 2, // Tab width
  "useTabs": false, // Use spaces instead of tabs
  "bracketSpacing": true, // Spaces in object literals
  "bracketSameLine": false, // JSX brackets on new line
  "arrowParens": "avoid", // Avoid parens in arrow functions
  "endOfLine": "lf", // Line endings
  "jsxSingleQuote": true, // Single quotes in JSX
  "quoteProps": "as-needed" // Quote object properties as needed
}
```

## 🔧 ESLint Integration

ESLint is configured to work with Prettier:

- Prettier rules are shown as ESLint errors
- Conflicting ESLint rules are disabled
- Additional TypeScript rules are enabled

## 📝 VS Code Integration

### Automatic Setup

The project includes VS Code settings for:

- Format on save
- Format on paste
- ESLint auto-fix on save
- Import organization
- Tailwind CSS support

### Recommended Extensions

Install these VS Code extensions (see `.vscode/extensions.json`):

- Prettier - Code formatter
- ESLint
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features
- Auto Rename Tag
- Path Intellisense
- Error Lens

## 🪝 Git Hooks

### Pre-commit Hook

Automatically runs on every commit:

1. Runs ESLint with auto-fix
2. Runs Prettier formatting
3. Only on staged files (fast!)

### Manual Hook Management

```bash
# Skip pre-commit hook (not recommended)
git commit --no-verify

# Run lint-staged manually
npx lint-staged
```

## 🎨 Usage Examples

### Format Specific Files

```bash
# Format single file
npx prettier --write src/app/page.tsx

# Format specific directory
npx prettier --write src/components/

# Format by pattern
npx prettier --write "src/**/*.{ts,tsx}"
```

### Check Formatting

```bash
# Check all files
npm run format:check

# Check specific files
npx prettier --check src/app/page.tsx
```

### Integration with Other Tools

```bash
# Run everything in sequence
npm run check-all

# Fix everything
npm run fix-all

# Just type check
npm run type-check
```

## 🔍 Troubleshooting

### Common Issues

**1. Prettier and ESLint conflicts**

```bash
# This is already configured, but if you see conflicts:
npm install --save-dev eslint-config-prettier
```

**2. VS Code not formatting**

- Check if Prettier extension is installed
- Verify `.vscode/settings.json` is present
- Restart VS Code

**3. Pre-commit hook not working**

```bash
# Reinstall husky
npm run prepare
chmod +x .husky/pre-commit
```

**4. Formatting not applied**

```bash
# Check if files are in .prettierignore
# Run format manually
npm run format
```

### Debugging

```bash
# Check Prettier config
npx prettier --find-config-path src/app/page.tsx

# Check what files will be formatted
npx prettier --list-different .

# Debug ESLint
npx eslint --debug src/app/page.tsx
```

## 📋 Best Practices

### 1. Commit Workflow

```bash
# Normal workflow - hooks run automatically
git add .
git commit -m "feat: add new component"

# Manual check before commit
npm run check-all
git add .
git commit -m "feat: add new component"
```

### 2. Team Collaboration

- All team members should use the same VS Code settings
- Install recommended extensions
- Don't skip pre-commit hooks
- Run `npm run fix-all` before pushing

### 3. CI/CD Integration

Add to your CI pipeline:

```yaml
- name: Check formatting
  run: npm run format:check

- name: Lint code
  run: npm run lint

- name: Type check
  run: npm run type-check
```

## 🎯 Customization

### Modify Prettier Rules

Edit `.prettierrc`:

```json
{
  "printWidth": 100, // Longer lines
  "singleQuote": false, // Double quotes
  "semi": false // No semicolons
}
```

### Add More File Types

Edit `lint-staged` in `package.json`:

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx,vue}": ["eslint --fix", "prettier --write"],
    "*.{json,css,md,mdx,yaml,yml}": ["prettier --write"]
  }
}
```

### Ignore More Files

Add to `.prettierignore`:

```
# Custom ignores
*.min.js
*.bundle.js
public/
```

## 💡 Tips

1. **Use format on save** - Enable in VS Code for automatic formatting
2. **Run checks before push** - Use `npm run check-all`
3. **Consistent team setup** - Share VS Code settings
4. **Don't fight the formatter** - Embrace Prettier's opinionated style
5. **Use ESLint for logic** - Let Prettier handle formatting
