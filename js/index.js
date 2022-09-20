const btn = document.getElementById('btn')
const output = document.getElementById('output')
const quotes = [
    '“A arte de ser ora audacioso, ora prudente, é a arte de vencer” – Napoleão Bonaparte', 
    '“Nossos fracassos, às vezes, são mais frutíferos do que os êxitos” – Henry Ford', 
    '“Comemore os seus sucessos. Veja com humor os seus fracassos” – Sam Walton',
    '“É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo” – Sócrates', 
    '“Somente os que ousam errar muito podem realizar muito” – John F. Kennedy',
    '“A fórmula da felicidade e do sucesso é simplesmente ser você mesmo da maneira mais sincera que puder” – Meryl Streep',
    '“ Você não pode deixar de usar a criatividade. Quanto mais você usa, mais você tem” – Maya Angelou', '“Ao fim do dia, podemos aguentar muito mais do que pensamos que podemos” – Frida Kahlo'
]

btn.addEventListener('click', () => {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote
})