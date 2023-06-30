fetch("https://api.github.com/users")
    .then(function(response) {
        return response.json()
    })
    .then(function(json) {
        for (var i = 0; i < json.length; i++) {
            var user = json[i]
            // create username h2
            var h2 = document.createElement("h2")
            h2.innerText = user.login
            document.body.appendChild(h2)
            // create avatar img
            var img = document.createElement('img')
            img.src = user.avatar_url
            document.body.appendChild(img)
        }
    })