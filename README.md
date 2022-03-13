# Steps
1. npm install -g @layer0/cli
2. 0 init > Add Layer0 to the current app
- This will install @layer0/core, @layer0/cli, @layer0/prefetch, @layer0/devtools...
- Also will create layer0.config.jjs
- routes.js


# Prep
1. Create React App
```
npx create-react-app layer0-static-react-app
```
2. Create a new git repo
3. Add the React App to the repo
```
cd layer0-static-react-app
git init
git remote add origin git@github.com:SKajiwara/Layer0-static-react-app.git
```
4. Make sure you're using Node 14 (not Node 16)

# Webvitals
1. To view Core Web Vitals scores. Add the following in index.js
```
reportWebVitals(console.log)
```