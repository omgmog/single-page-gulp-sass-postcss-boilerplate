## What the?

> Insanity: doing the same thing over and over again and expecting different results.

I find myself starting single-page websites a lot, and each time setting it up manually. This is a bunch of gulp tasks and light processing/templating goodness to make that easier.

It uses liquid/json/sass/postcss.

## Usage

```
# Installation
$ npm install
```

```
# Re-generate the dist directory
$ gulp build
```

```
# Start a server with live reload
$ gulp serve
```

## Dependencies

```
├── autoprefixer@6.3.1
├── gulp@3.9.0
├── gulp-ext-replace@0.2.0
├── gulp-liquid@0.1.0
├── gulp-postcss@6.0.1
├── gulp-sass@2.1.1
├── gulp-style-inject@0.0.3
├── gulp-task-listing@1.0.1
├── gulp-webserver@0.9.1
└── postcss-merge-rules@2.0.3
```

## Gulp tasks

### Main Tasks
- `build`
- `serve`
- `watch`
- `help`

### Sub Tasks
- `build:html`
- `build:postcss`
- `build:scss`