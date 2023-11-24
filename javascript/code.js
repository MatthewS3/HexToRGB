// Function to convert a hex color code to RGB format
function hex2rgb() {
    // it will get the input hex color value from the HTML element with the id 'hex-color'
    let hex_color = document.getElementById('hex-color').value,
        // it will get the HTML element where the RGB color will be displayed
        rgb_color = document.getElementById('rgb-color'),
        // the regular expression pattern will validate the hex color format
        pattern_color = "^#([A-Fa-f0-9]{6})$";

    // it will check if the input hex color matches the expected pattern
    if (hex_color.match(pattern_color)) {
        // the '#' from the beginning of the hex color will be replaced
        let hex_color_without_hash = hex_color.replace("#", ""),
            // Parse the hex color values to integers
            r = parseInt(hex_color_without_hash.substring(0, 2), 16),
            g = parseInt(hex_color_without_hash.substring(2, 4), 16),
            b = parseInt(hex_color_without_hash.substring(4, 6), 16);

        // Set the RGB color value that will be shown
        return rgb_color.value = 'rgb(' + r + ',' + g + ',' + b + ')';
    }
    // If the hex color format is not valid, show an error alert
    else {
        alert('Incorrect Color Format TRY AGAIN');
    }
}