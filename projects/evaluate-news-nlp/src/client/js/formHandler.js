function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    let inputText = {url: formText};
    console.log(inputText);

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/api',{
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(inputText)
    })
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        document.getElementById('confidence').textContent = (res.confidence);
        document.getElementById('polarity').textContent = (res.polarity);
        document.getElementById('subjectivity').textContent = (res.subjectivity);
        document.getElementById('subjectivity_confidence').textContent = (res.subjectivity_confidence);
    },function(error){
        throw new Error('You are using the invalid URL!!!!');
    })
}

export { handleSubmit }
