import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

console.log(checkForName);

alert("I EXIST")
console.log("CHANGE!!");

// export the js functions to the Client library, after export to Client library,
// make sure to add the `Client.` in front of all the js functions
export {
    checkForName,
    handleSubmit
}