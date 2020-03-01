//import {handleSubmit} from "../src/client/js/formHandler"
import {checkForName} from "../src/client/js/nameChecker"

const regeneratorRuntime = require("regenerator-runtime");
describe("checkForName()", () => {
    // test stuff： test method is the callback function to run the real test
    test("A valid url should return 1", () => {
        const input = "https://www.healthline.com/nutrition/10-proven-benefits-of-cinnamon";
        expect(checkForName(input)).toBe(1);
    })
})
