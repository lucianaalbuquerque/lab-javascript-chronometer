function computeTwoDigitNumber(value) {
    if (value < 10 ) {
        let digit = value.toString();
        digit = '0' + digit;
        console.log(digit);

computeTwoDigitNumber(3);