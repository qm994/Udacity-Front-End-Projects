import {handleSubmit} from "../src/client/js/formHandler"
import {checkForName} from "../src/client/js/nameChecker"
import * from "../src/client/views/index.html"

describe("checkForName()", () => {
    // test stuff： test method is the callback function to run the real test
    test("input should be a valid url", () => {
        // const input = "https://www.healthline.com/nutrition/10-proven-benefits-of-cinnamon";
        // const output = "url is valid";
        expect(checkForName("https://www.healthline.com/nutrition/10-proven-benefits-of-cinnamon"))
        .tobe("url is valid");
    })
})

describe("handleSubmit()", () => {
    //test stuff::
    test("polarity should be neutral:", () => {
        const fakeEvent = event.preventDefault()
        expect(handleSubmit(fakeEvent)).toThrow();
    })
})