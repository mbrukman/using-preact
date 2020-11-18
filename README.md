# Using Preact.js

[![Build Status](https://travis-ci.org/mbrukman/using-preactjs.svg?branch=master)](https://travis-ci.org/mbrukman/using-preactjs)

How to build applications using Preact.

Work-in-progress:

* Preact + Bazel + Closure Compiler: see
  [`third_party/preact-without-babel`](third_party/preact-without-babel/#readme);
  note that updating `bazelbuild/rules_closure` dependency to v0.11.0 results in
  [type errors][rules-nodejs-type-errors] due to [Closure Compiler not
  supporting `@typedef` with `@template`][closure-compiler-typedef-templates]

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for details.

## License

Apache 2.0; see [`LICENSE`](LICENSE) for details.

## Disclaimer

This project is not an official Google project. It is not supported by Google
and Google specifically disclaims all warranties as to its quality,
merchantability, or fitness for a particular purpose.

[rules-nodejs-type-errors]: https://github.com/preactjs/preact/issues/758#issuecomment-683881172
[closure-compiler-typedef-templates]: https://github.com/google/closure-compiler/issues/890
