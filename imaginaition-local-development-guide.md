# Imaginaition Website - Local Development Guide

## Project Structure
```
Imaginaition website/                    # Root directory (contains documentation)
├── imaginaition_website_prd.md        # Project requirements
├── imaginaition-mvp-tasklist.md       # Task list
├── 06142025updated_website_copy.md    # Website copy
└── imaginaition-website/              # 🎯 ACTUAL NEXT.JS PROJECT
    ├── package.json                   # Contains "dev" script
    ├── src/
    ├── components.json
    └── ...
```

## ✅ Correct Process to Run Locally

### 1. Check Current Directory
```bash
pwd
# Should show either:
# /Users/terence/Documents/Imaginaition website
# OR
# /Users/terence/Documents/Imaginaition website/imaginaition-website
```

### 2. Navigate to Project Directory (if needed)
```bash
# If in root directory, navigate to project:
cd imaginaition-website

# Verify you're in the right place:
ls -la
# Should see: package.json, src/, components.json, etc.
```

### 3. Start Development Server
```bash
# ALWAYS run in background for development server:
npm run dev
# Set is_background: true in terminal command
```

### 4. Verify Server is Running
```bash
# Wait 3-5 seconds, then check:
curl -I http://localhost:3000
# Should return: HTTP/1.1 200 OK
```

### 5. Access the Website
- **Local:** http://localhost:3000
- **Network:** http://192.168.1.30:3000
- **Expected:** Next.js 15.3.4 (Turbopack) with StageWise toolbar

## ❌ Common Errors to Avoid

### Error: "Missing script: dev"
```bash
# ❌ WRONG - Running from root directory:
npm run dev
# npm error Missing script: "dev"

# ✅ CORRECT - Navigate to project directory first:
cd imaginaition-website
npm run dev
```

### Background Process Management
```bash
# ❌ WRONG - Running in foreground blocks terminal:
npm run dev (is_background: false)

# ✅ CORRECT - Run in background for long-running processes:
npm run dev (is_background: true)
```

## 🎯 Project Features
- **Framework:** Next.js 15.3.4 with Turbopack
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI + shadcn/ui
- **AI Integration:** StageWise toolbar (@stagewise/toolbar-next)
- **Language:** TypeScript
- **Package Manager:** npm

## 🔧 StageWise Integration
- **Extension:** Installed in Cursor
- **Toolbar:** Integrated via `<StagewiseToolbar />` in layout.tsx
- **Visual:** Chat icon appears in bottom right corner
- **Usage:** Click UI elements → Add prompts → Send to Cursor

## 📝 Quick Start Checklist
- [ ] Check current directory with `pwd`
- [ ] Navigate to `imaginaition-website/` if needed
- [ ] Verify `package.json` exists
- [ ] Run `npm run dev` in background
- [ ] Wait 3-5 seconds for startup
- [ ] Test with `curl -I http://localhost:3000`
- [ ] Access http://localhost:3000 in browser
- [ ] Confirm StageWise toolbar is visible

---
*Last updated: July 1, 2025*
*Remember: Always work from the imaginaition-website subdirectory!* 