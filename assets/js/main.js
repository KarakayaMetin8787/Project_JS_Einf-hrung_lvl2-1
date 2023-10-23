function send(){
    const input = document.body.querySelector("input:nth-of-type(1)").value;
    const list = document.body.querySelector("#list");

    if (input.trim() !== "") {
        list.innerHTML += '<li>' + input + '</li>';
    } else {
        alert("Bitte Text eingeben");
    }
}