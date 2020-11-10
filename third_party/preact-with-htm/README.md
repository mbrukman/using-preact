# Preact with HTM

This is a port of our modified version of
[`preact-without-babel`](../preact-without-babel) to use JSX instead of the
`h()` function literal. Using HTM with template literals makes our code look
much closer to JSX, still without the need for using any JSX transpilation.

## Building with Bazel + Closure Compiler

Opening the uncompiled version: just load [`index.html`](index.html) in your
browser, which will interpret [`index.js`](index.js), which works as is.

To compile with Bazel and Closure Compiler, which will typecheck the file and
minify it in one step:

```
$ bazel build //third_party/preact-with-htm:{app,app_html}
```

This command actually builds two targets:

* `:app` which builds the minified JavaScript "binary", which compiles
  `index.js` to `app.js`
* `:app_html` which creates a new file` app.html` from `index.html` to update
  the JavaScript input from the uncompiled `index.js` to the compiled `app.js`

Then, open `bazel-bin/third_party/preact-with-htm/app.html` in your browser,
and verify that it works just the same as the uncompiled version above.
