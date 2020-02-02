import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import "./styles/base.scss"
import "./styles/footer.scss"
import "./styles/form.scss"
import "./styles/header.scss"
import "./styles/resets.scss"

console.log(checkForName);

alert("I EXIST")
console.log("CHANGE!!");

// export the js functions to the Client library, after export to Client library,
// make sure to add the `Client.` in front of all the js functions
export {
    checkForName,
    handleSubmit
}