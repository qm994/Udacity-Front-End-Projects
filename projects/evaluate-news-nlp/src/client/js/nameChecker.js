async function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);

    //post the input text url to the server then 
    //send to the Aylien API
    //https://www.healthline.com/nutrition/10-proven-benefits-of-cinnamon
    const response = await fetch("http://localhost:8080/api", {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(inputText)
    })

    return await response.json();
}

export { checkForName }
