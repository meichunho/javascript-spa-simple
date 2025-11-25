import test from "node:test";
import assert from "node:assert";

test("simple arithmetic test", () => {
  assert.strictEqual(1 + 1, 2);
});

test("string comparison test", () => {
  assert.strictEqual("hello", "hello");
});

test("array includes test", () => {
  assert.ok([1, 2, 3].includes(2));
});
