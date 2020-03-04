const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name} !`;

test("should add 2 numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("Generate greeting", () => {
  const result = generateGreeting("Nico");
  expect(result).toBe("Hello Nico !");
});

test("Should generate greeting for no name", () => {
  const result = generateGreeting();
  expect(result).toBe("Hello Anonymous !");
});
