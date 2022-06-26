const url = 'https://mj0qvforje.execute-api.eu-central-1.amazonaws.com';

fetch(url, {method: "POST"})
    .then(function (response) {
        return response.text();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData(data) {
    var mainContainer = document.getElementById("counter");
        var div = document.createElement("span");
        div.innerHTML = data;
        mainContainer.appendChild(div);
    }
