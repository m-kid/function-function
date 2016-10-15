

var a = prompt ('podaj dowolną liczbę')
    b = 4,
    value = (a*a) + (2 * a * b) - (b*b);

console.log('wynik podniesienia Twojej liczby, czyli ' + a + ' do kwadratu, a następnie pomnożenia jej przez tajemniczą liczbę i jeszcze innych zabiegów daje ');

console.log(value)

if (value > 0) {
    console.log('dodatnia')
} else if (value < 0) {
    console.log('ujemna')
} else {
    console.log('zero')
}