var dog = {
    name: "Zues",
    age: 14,
    sound: "bark",
    makeSoundAfterTimeout() {
        setTimeout(() => console.log(this.sound), 2000)
    }
}

dog.makeSoundAfterTimeout()