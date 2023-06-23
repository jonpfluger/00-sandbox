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
        .css("margin-bottom", "20px")
        .appendTo($ul)
}

$ul.appendTo("body")