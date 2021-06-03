# grics-front-end-library

## Install Vue
npm install -g @vue/cli
vue create lib

## Check
cd lib
npm run serve
npm run build

## Create Components
# Install Storybook
cd lib
npx sb init

## Check
npm run storybook
npm run build-storybook

## Explore /.storybook

## Create Story in JS

## Create Story in MDX

## Argstype, control, Documentation

## Free MDX doc

## Install SB v6.3.0-beta.10
npm install @storybook/addon-docs@6.3.0-beta.10 --force

## Tailwind introduction

## Tailwind install
npm uninstall tailwindcss postcss autoprefixer
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9 --force
npx tailwindcss init -p

## Config Tailwind

## Create color styles
## Variables CSS

## Install postcss plugin
npm install -D postcss-nested postcss-import --force

## Document button with theme and reversed

## Build library
package.json: Add "vue-cli-service build --target lib --name gricsLib ./src/lib.js".

## Publish library to NPM
npm whoami
npm publish --access public 

## Build base CSS
package.json: Add "lib:build-css": "npx tailwindcss@latest build src/styles/index.css -o dist/index.css".

## Install in a `showcase` project
vue create showcase
cd showcase
npm run serve
