var alertButtonEl = $('#alert-btn');
var themeButtonEl = $('#theme-btn');
var lotteryButtonEl = $('#lottery-btn');
var lotteryNumberEl = $('#lottery-number');
var refreshButtonEl = $('#refresh-btn');

// light theme state
var isDark = true;

themeButtonEl.on("click", function() {
    // if (isDark) {
    //     isDark = false
    //     $("body").addClass("bg-light text-dark").removeClass("bg-dark text-light")
    // } else {
    //     isDark = true
    //     $("body").addClass("bg-dark text-light").removeClass("bg-light text-dark")
    // }
    $('body')
        .toggleClass('bg-dark text-light')
        .toggleClass('bg-light text-dark')
})

lotteryButtonEl.on('click', function() {
    // generate random num 0 - 10,000
    var randomNum = Math.floor(Math.random() * 10000)
    // show num in lotteryNumberEl
    lotteryNumberEl.text(randomNum)
})