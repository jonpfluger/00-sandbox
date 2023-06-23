// var abilities = [
//     "select",
//     "create",
//     "style",
//     "animate",
//     "traverse",
//     "event listen"
// ]

// var $ul = $("<ul>")

// for (var i = 0; i < abilities.length; i++) {
//     $("<li>")
//         .text( abilities[i] )
//         .css("margin-bottom", "20px")
//         .appendTo($ul)
// }

// $ul.appendTo("body")

var $root = $("<div>").attr("id", "root").appendTo("body")

var $author = $("<p>")
    .text("~ Carol Dweck")
    .addClass("plain")

var $quote = $("<h1>")
    .text(`"Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."`)
    .addClass("fancy")

$quote.append($author)

$root.append($quote)