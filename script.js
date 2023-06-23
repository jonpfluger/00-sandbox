var abilities = [
    "select",
    "create",
    "style",
    "animate",
    "traverse",
    "event listen"
]

var $ul = $("<ul>")

for (var i = 0; i < abilities.length; i++) {
    $("<li>")
        .text( abilities[i] )
        .appendTo($ul)
}

$ul.appendTo("body")