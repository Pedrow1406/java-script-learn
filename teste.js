let nomes = ['João', 'Lucas','Márcio', 'Marcos', 'Pedro', 'Maria']
for (c = 0; c < nomes.length; c++){
    if (nomes[c][nomes[c].length - 1] == 'a'){
        console.log(nomes[c])
    } else if (nomes[c][nomes[c].length - 1] == 'o'){
        nomes[c] = nomes[c].toUpperCase()
        if (nomes[c] == 'PEDRO'){
            console.log(nomes[c] + 'W')
        } else if (nomes[c] == 'JOÃO'){
            console.log(nomes[c] + 'U')
        } else {
            console.log(nomes[c])
        }
    } else{
        console.log(`O nome ${nomes[c]} não se aplica a nenhuma das condições`)
    }
}