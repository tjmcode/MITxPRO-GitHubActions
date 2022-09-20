const hello = require("./hello");
describe("Test Hello", () =>
{
    test("works", () =>
    {
        expect(hello.hello()).toEqual("Hello Happy World!");
    });
});
