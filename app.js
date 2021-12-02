let fallen = {
    nome: "Fallen",
    kills: 0,
    assistencias: 0,
    mortes: 0,
    pontos: 0,
    foto: "https://www.pikpng.com/pngl/b/68-686963_fallen-cs-go-png-clipart.png"
}

let taco = {
    nome: "Taco",
    kills: 0,
    assistencias: 0,
    mortes: 0,
    pontos: 0,
    foto: "https://esports.as.com/2018/03/07/TACO.png?hash=95c0ffea1ed22bcd999031cf0c73f3fa082470dc"
}

let cold = {
    nome: "Cold",
    kills: 0,
    assistencias: 0,
    mortes: 0,
    pontos: 0,
    foto: "https://www.killping.com/blog/wp-content/uploads/2016/12/coldzera.png"
}

let fnx = {
    nome: "Fnx",
    kills: 0,
    assistencias: 0,
    mortes: 0,
    pontos: 0,
    foto: "https://i.redd.it/knrebkp4mui21.png"
}

let fer = {
    nome: "Fer",
    kills: 0,
    assistencias: 0,
    mortes: 0,
    pontos: 0,
    foto: "https://esports.as.com/2018/03/07/fer.png?hash=ad8c4904dbd4e2d949278f7ff07db8a0cca981d3"
}

function calculaPontos(jogador) {
    let pontos = (jogador.kills * 2) + jogador.assistencias
    return pontos
}

fallen.pontos = calculaPontos(fallen)
taco.pontos = calculaPontos(taco)
cold.pontos = calculaPontos(cold)
fnx.pontos = calculaPontos(fnx)
fer.pontos = calculaPontos(fer)

let jogadores = [fallen, taco, cold, fnx, fer]

function exibeJogadoresNaTela(jogadores) {
    let elemento = ""
    for (let i = 0; i < jogadores.length; i++) {
        elemento += `<tr><td>${jogadores[i].nome}<br><img src=${jogadores[i].foto}></td>`
        elemento += `<td>${jogadores[i].kills}</td>`
        elemento += `<td>${jogadores[i].assistencias}</td>`
        elemento += `<td>${jogadores[i].mortes}</td>`
        elemento += `<td>${jogadores[i].pontos}</td>`
        elemento += "<td><button onClick='adicionarKill(" + i + ")'>Kills</button>"
        elemento += "<button onClick='adicionarAssistencia(" + i + ")'>Assistências</button>"
        elemento += "<button onClick='adicionarMorte(" + i + ")'>Mortes</button>"
        elemento += "<button onClick='resetarTabela(" + i + ")'>Resetar</button></td>"
        elemento += "</tr>"
    }

    let tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = elemento
}

exibeJogadoresNaTela(jogadores)

function adicionarKill(i) {
    let jogador = jogadores[i]
    jogador.kills++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarAssistencia(i) {
    let jogador = jogadores[i]
    jogador.assistencias++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarMorte(i) {
    let jogador = jogadores[i]
    jogador.mortes++
    exibeJogadoresNaTela(jogadores)
}

function resetarTabela(i) {
    let jogador = jogadores[i]
    jogador.kills = 0
    jogador.assistencias = 0
    jogador.mortes = 0
    jogador.pontos = 0
    exibeJogadoresNaTela(jogadores)
}

function addJogador() {
    let nome = document.getElementById("inputNome").value;
    let foto = document.getElementById("inputFoto").value;

    if (foto.endsWith(".jpg") || foto.endsWith(".png") && nome != "") {
        let jogador = {
            nome: nome,
            kills: 0,
            assistencias: 0,
            mortes: 0,
            pontos: 0,
            foto: foto
        };
        jogadores.push(jogador);
        exibeJogadoresNaTela(jogadores);
    } else {
        window.alert("Nome ou Foto inválido. Verifique e tente novamente.")
    }
    document.getElementById("inputNome").value = ""
    document.getElementById("inputFoto").value = ""
}

function removerJogador() {
    let excluiJogador = document.getElementById("remover").value;
    let j = jogadores.findIndex((i) => i.nome === excluiJogador);

    if (j < 0) {
        window.alert('Nome do jogador inváilido.')
    } else {
        jogadores.splice(j, 1);
        exibeJogadoresNaTela(jogadores);
        document.getElementById("remover").value = "";
    }
}