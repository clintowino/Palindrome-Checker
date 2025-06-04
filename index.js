const input = document.getElementById('input')


function reverseString(str) {
    return str.split('').reverse().join('')
}

function check(){
    const value = input.value;
    if (!value.trim()) {
        alert('Please enter a word or phrase.');
        return;
    }
    const lower = value.toLowerCase();
    const reverse = reverseString(lower);

    if (lower === reverse) {
        alert(' This is a P A L I N D R O M E')
    } else {
        alert('Not a Palindrome!')
    }

    input.value = ''

    
}