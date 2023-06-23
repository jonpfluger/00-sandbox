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