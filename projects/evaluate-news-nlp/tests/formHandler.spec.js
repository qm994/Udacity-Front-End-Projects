import {handleSubmit} from "../src/client/js/formHandler"
import {checkForName} from "../src/client/js/nameChecker"


describe("checkForName()", () => {
    // test stuff： test method is the callback function to run the real test
    test("A valid url should return 1", () => {
        const input = "https://www.healthline.com/nutrition/10-proven-benefits-of-cinnamon";
        const output = 1;
        const data = checkForName(input);
        expect(data).toBe(output);
    })
})

describe("handleSubmit()", () => {
    //test stuff:: test the return api response object
    test("polarity should be neutral:", () => {
        expect(handleSubmit(event)).toHaveProperty('polarity');
    })
})