# Construct URL params with URLSearchParams not template literals (`no-url-params-template/no-url-params-template`)

<!-- end auto-generated rule header -->

Construct URL params with URLSearchParams not template literals.

Developers sometimes create URLs via template literals. For example:

```js
const url = `path?city=${city}&time=${now}`;
```

Instead, they should use:

```js
const url = `path?${new URLSearchParams({ city, time: now }).toString()}`;
```

This offers:

- Automatic Encoding: Special characters are safely encoded.
- Readability: The syntax is cleaner and more readable. It abstracts away the manual construction of the query string.
- Error Reduction: Reduces the chance of errors like missing an & or incorrectly encoding values.

## Rule Details

This rule reports an error if any template literal has one or more elements of the form `key=${value}`.

Examples of **incorrect** code for this rule:

```js
const url = `?city=${city}&time=${now}`;
const url = `path?city=${city}&time=${now}`;
const url = `https://example.com/path?city=${city}&time=${now}#fragment`;
```

Examples of **correct** code for this rule:

```js
const url = new URLSearchParams({ city, time: now }).toString();
const url = `path?${new URLSearchParams({ city, time: now }).toString()}`;
const url = `https://example.com/path?${new URLSearchParams({ city, time: now }).toString()}`;
```

## When Not To Use It

Do not use this rule if:

- You are targeting environments where `URLSearchParams` is not supported.
