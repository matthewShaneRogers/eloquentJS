# eloquentJS — TDD Mob Programming Space

Working through [Eloquent JavaScript](https://eloquentjavascript.net/) as a team using **test-driven development** and the **mob programming** model.

---

## Quick Start

```bash
npm install        # first time only
npm test           # run tests once
npm run watch      # re-run tests on every save  ← use this during a mob session
```

---

## Mob Rotation — Red → Green → Refactor

One keyboard, one screen (or shared via Live Share / tmux). Rotate after each step:

| Step | Driver does | Then passes keyboard to next person |
|------|-------------|-------------------------------------|
| **RED** | Writes a new failing `it(...)` block in `spec/exercises.spec.js` | ✓ |
| **GREEN** | Writes the minimum code in `src/exercises.js` to make it pass | ✓ |
| **REFACTOR** | Cleans up code without breaking tests | ✓ → back to RED |

Keep rotations short — roughly **5–10 minutes** per turn.

---

## Project Structure

```
.
├── src/
│   └── exercises.js        # implementation code (make tests green here)
├── spec/
│   ├── support/
│   │   └── jasmine.mjs     # Jasmine configuration
│   └── exercises.spec.js   # all tests (write failing specs here)
├── package.json
└── README.md
```

---

## Adding a New Exercise

1. **Driver adds a failing spec** to `spec/exercises.spec.js`:

```js
describe('myFunction()', () => {
  it('does the expected thing', () => {
    expect(myFunction(input)).toBe(expectedOutput);
  });
});
```

2. **Next driver exports and implements** the function in `src/exercises.js`:

```js
function myFunction(input) {
  // just enough to pass
}
module.exports = { ..., myFunction };
```

3. Don't forget to `require` it at the top of the spec file.

---

## VS Code Live Share Tips

- **Host**: open this folder, start Live Share (`Ctrl+Shift+P` → *Live Share: Start*), share the link.
- **Guests**: join the link, the integrated terminal is shared — run `npm run watch` in it so everyone sees tests update in real time.
- Optionally enable **shared terminals** in Live Share settings so the driver controls a single watch process.

---

## Useful Jasmine Matchers

```js
expect(x).toBe(y)              // strict equality (===)
expect(x).toEqual(y)           // deep equality (objects/arrays)
expect(x).toBeTruthy()
expect(x).toBeFalsy()
expect(x).toBeNull()
expect(x).toBeUndefined()
expect(x).toContain(item)      // array or string
expect(x).toThrow()            // function throws
expect(fn).toHaveBeenCalled()  // spy
```
