//Interesting thing is if I didnt put the function inside a `{}` to import,
//then the function will be undefined when import from the js file
import {handleSubmit} from "../src/client/js/formHandler";
const regeneratorRuntime = require("regenerator-runtime");

test("Always be defined at first", () => {
    expect(handleSubmit).toBeDefined();
});

describe("handleSubmit(event)", () => {
    test("this should be a function", async () => {
        expect(typeof handleSubmit).toBe("function");
    });
});


