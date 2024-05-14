// For every option, see ~/.config/ags/modules/.configuration/user_options.js
// (vscode users ctrl+click this: file://./modules/.configuration/user_options.js)
// (vim users: `:vsp` to split window, move cursor to this path, press `gf`. `Ctrl-w` twice to switch between)
//   options listed in this file will override the default ones in the above file

const userConfigOptions = {
   'overview': {
        'scale': 0.18, // Relative to screen size
        'numOfRows': 2,
        'numOfCols': 5,
        'wsNumScale': 0.09,
        'wsNumMarginScale': 0.07,
    },
    'sidebar': {
        'imageColumns': 2,
        'imageBooruCount': 20,
        'imageAllowNsfw': true,
    },
    'search': {
        'engineBaseUrl': "https://www.google.com/search?q=",
        'excludedSites': [""],
    },
    'time': {
        // See https://docs.gtk.org/glib/method.DateTime.format.html
        // Here's the 12h format: "%I:%M%P"
        // For seconds, add "%S" and set interval to 1000
        'format': "%I:%M %p",
        'interval': 5000,
        'dateFormatLong': "%A, %m/%d", // On bar
        'dateInterval': 5000,
        'dateFormat': "%m/%d", // On notif time
    },
    'weather': {
        'city': "",
    },
    'workspaces': {
        'shown': 10,
    }
}

export default userConfigOptions;
