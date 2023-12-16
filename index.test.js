const saludo = require("./saludo");

test("Saludo navidad", () => {
  expect(saludo()).toBe("Feliz navidad para todo el ITLA");
});
