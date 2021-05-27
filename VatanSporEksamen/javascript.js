fetch("https://api.jsonbin.io/b/60af6f19893b7c555b1caca6")
    .then(function (data) {
        return data.json();
    })
    .then(function (post) {
        const PIN1 = document.getElementById("pin1tekst");
        PIN1.innerHTML = post.fodbold[0].name + "<br>" + "Adresse: " + post.fodbold[0].address + "<br>" + "Entré: " + post.fodbold[0].entrance + "<br>" + post.fodbold[0].hours

    })
