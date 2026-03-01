const NUMBERS = [
    [
        ' ### ',
        '#   #',
        '#   #',
        '#   #',
        ' ### '
    ],
    [
        '  #  ',
        ' ##  ',
        '  #  ',
        '  #  ',
        ' ### '
    ],
    [
        '#### ',
        '    #',
        ' ##  ',
        '#    ',
        '#### '
    ],
    [
        '#### ',
        '    #',
        ' ### ',
        '    #',
        '#### '
    ],
    [
        '#   #',
        '#   #',
        '#####',
        '    #',
        '    #'
    ],
    [
        '#### ',
        '#    ',
        '####  ',
        '   # ',
        '#### '
    ],
    [
        ' ### ',
        '#    ',
        '#####',
        '#   #',
        ' ### '
    ],
    [
        '#### ',
        '   # ',
        '  #  ',
        ' #   ',
        ' #   '
    ],
    [
        ' ### ',
        '#   #',
        ' ### ',
        '#   #',
        ' ### '
    ],
    [
        ' ### ',
        '#  # ',
        ' ####',
        '   # ',
        ' ### '
    ],
    [
        '     ',
        '     ',
        '     ',
        '     ',
        '     '
    ],
]

export default function renderNumber(Input, elementId) {
    let rows = ['', '', '', '', '']
    try {
        let num = String(Input)
    }
    catch (error) {
        alert('Input must be an integer number.');
        return 0;
    }
    for (let i = num.length; i > 0; i--) {
        let CN = NUMBERS[Number(num[i])];
        for (let segment = 0; segment < 5; segment++) {
            rows[segment] += CN[segment];
        }
    }

    document.getElementById(elementId).innerHTML = rows.join('\n');
    return rows;
}