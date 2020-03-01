function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    var regexQuery = "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
    var url = new RegExp(regexQuery,"i");
    var urlValid = "";
    if(url.test(inputText)){
        //alert("URL is valid!");
        const result = 1;
        return result
    } else {
        alert("URL is not valid!");
        return 0;
    }
    
}

export { checkForName }
