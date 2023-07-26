var dog = {
    name: "Zues",
    age: 14,
    sound: "bark",
    makeSoundAfterTimeout() {
        var self = this
        setTimeout(function() {
            console.log(self.sound)
        }, 2000)
    }
}

dog.makeSoundAfterTimeout()