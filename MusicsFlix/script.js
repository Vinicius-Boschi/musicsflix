//Att1 Adicionar mais músicas.
//Att2 Adicionar o input de pesquisa, pra poder escrever o nome da música e achar ela no meio das outras.
var listMusics = [

    {   
        name:   "Música: <br> Yellow",
        image:  "https://upload.wikimedia.org/wikipedia/pt/6/6c/Parachutes.jpg",
        singer: "Cantor: <br> Coldplay",
        album:  "Album: <br> Parachute"
    },

    {
        name:   "Música: <br> Refém",
        image:  "https://static1.purebreak.com.br/articles/4/47/33/4/@/210996-dilsinho-com-clipe-novo-refem-mostra-diapo-1.jpg",
        singer: "Cantor: <br> Dilsinho",
        album:  "Album: <br> O Cara Certo"
    },

    {
        name:   "Música: <br> Better Together",
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/a/9/8/a/8297.jpg",
        singer: "Cantor: <br> Jack Johnson",
        album:  "Album: <br> In Between Dreams"
    },

    {
        name:   "Música: <br> Não Deixo Não",
        image:  "https://www.sertanejotop.com.br/wp-content/uploads/2017/o-clipe-de-nao-deixo-nao-ultrapassa-6-milhoes-de-visualizacoes-no-youtube.jpg",
        singer: "Cantor: <br> Mano Walter",
        album:  "Album: <br> Coisa de Louco EP"
    },

    {
        name:   "Música: <br> Quer Voar",
        image:  "https://www.portalpopcyber.com/wp-content/uploads/2021/08/1WIP-MATUE-SINGLE-TRACK-REV01-scaled.jpg",
        singer: "Cantor: <br> Matuê",
        album:  "Album: <br> Quer Voar"
    },

    {
        name:   "Música: <br> Até Que Durou",
        image:  "https://images.genius.com/42dde838eab366a73992312755f31a27.1000x1000x1.jpg",
        singer: "Cantor: <br> Péricles",
        album:  "Album: <br> Até Que Durou (Ao Vivo)"
    },

    {   
        name:   "Música: <br> Camarão Que Dorme a Onda Leva",
        image:  "https://www.galeria9.com.br/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/2/3/2342galeria9_-_camar_o_-_50x50.jpg",
        singer: "Cantores: <br> Zeca Pagodinho, Péricles, Arlindo Cruz...",
        album:  "Album: <br> Sambabook Zeca Pagodinho, Vol.2"
    },

    {
        name:   "Música: <br> Final de Tarde",
        image:  "https://upload.wikimedia.org/wikipedia/pt/5/58/Capa_de_Nos_Arcos_da_Lapa.jpg",
        singer: "Cantor: <br> Péricles",
        album:  "Album: <br> Nos Arcos da Lapa"
    },

    {
        name:   "Música: <br> To Achando que é Amor",
        image:  "https://m.media-amazon.com/images/I/61CaTJAMIHL._UXNaN_FMjpg_QL85_.jpg",
        singer: "Cantor: <br> Péricles",
        album:  "Album: <br> To Achando que é Amor"
    },

    {
        name:   "Música: <br> Big Time Rush",
        image:  "http://pm1.narvii.com/6988/f574ace0fa007cb64575bbbdb66ed9b4802b9722r1-554-554v2_00.jpg",
        singer: "Cantor: <br> Big Time Rush",
        album:  "Album: <br> Big Time Rush"
    },

    {
        name:   "Música: <br> Querendo Te Encontrar",
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/c/8/3/5/395321415452906.jpg",
        singer: "Cantor: <br> Onze:20",
        album:  "Album: <br> Vida Loka"
    },

    {
        name:   "Música: <br> Bom Dia",
        image:  "https://cdns-images.dzcdn.net/images/cover/43269db08084bf03982b7f850845fa24/500x500.jpg",
        singer: "Cantor: <br> Nego Jhá",
        album:  "Album: <br> Bom Dia"
    },

    {   
        name:   "Música: <br> O Nosso Santo Bateu - Live",
        image:  "https://i1.sndcdn.com/artworks-000148511713-2bmn20-t500x500.jpg",
        singer: "Cantores: <br> Matheus & Kauan",
        album:  "Album: <br> Na Praia (Ao Vivo)"
    },

    {
        name:   "Música: <br> I WANNA BE YOUR SLAVE",
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/e/6/7/8/1084651622037106.jpg",
        singer: "Cantor: <br> Måneskin",
        album:  "Album: <br> Teatro d'ira - Vol. I"
    },

    {
        name:   "Música: <br> Vou Revelar",
        image:  "https://www.connectmix.com/wp-content/uploads/2020/12/lancamento-12.png",
        singer: "Cantor: <br> Atitude 67",
        album:  "Album: <br> Atitude No Rolê - Onda"
    },

    {
        name:   "Música: <br> Isso É Amor",
        image:  "https://linkstorage.linkfire.com/medialinks/images/9b41573d-78f4-46ed-a884-96186727a1d9/artwork-440x440.jpg",
        singer: "Cantores: <br> Atitude 67, Analaga, Vitor Kley",
        album:  "Album: <br> Isso É Amor"
    },

    {
        name:   "Música: <br> Nothing Else Matters",
        image:  "https://i1.sndcdn.com/artworks-000438871638-im9eal-t500x500.jpg",
        singer: "Cantor: <br> Metallica",
        album:  "Album: <br> Metallica"
    },

    {
        name:   "Música: <br> Baby Me Atende",
        image:  "https://98fmnatal.com.br/wp-content/uploads/2021/10/Dilsinho3.jpg",
        singer: "Cantores: <br> Matheus Fernandes, Dilsinho",
        album:  "Album: <br> Baby Me Atende"
    },

    {   
        name:   "Música: <br> Passarinho Que Som É Esse",
        image:  "https://cdns-images.dzcdn.net/images/cover/864bd4da1aedde79fec6a0b4c100cca8/500x500.jpg",
        singer: "Cantores: <br> DJ Topo, MC Cyclope, MC Pr",
        album:  "Album: <br> Passarinho Que Som É Esse"
    },

    {
        name:   "Música: <br> Se Essa Bunda",
        image:  "https://i1.sndcdn.com/artworks-l5VNLuvtWdaq-0-t500x500.jpg",
        singer: "Cantores: <br> Costa Gold, Kawe, André Nine",
        album:  "Album: <br> Se Essa Bunda"
    },

    {
        name:   "Música: <br> Dinero",
        image:  "https://direct.rhapsody.com/imageserver/images/alb.297971001/600x600.jpg",
        singer: "Cantor: <br> Trinidad Cardona",
        album:  "Album: <br> Dinero"
    },

    {
        name:   "Música: <br> Serenata Existencialista",
        image:  "https://cdns-images.dzcdn.net/images/cover/c6ed59cd2a52c2f8385495904aaa1bd1/500x500.jpg",
        singer: "Cantor: <br> O Grilo",
        album:  "Album: <br> Herói do Futuro"
    },

    {
        name:   "Música: <br> Tipo Gin - Ao Vivo",
        image:  "https://i1.sndcdn.com/artworks-xyMCLUiTayQ6w3KT-8kBRKA-t500x500.jpg",
        singer: "Cantor: <br> MC Kevin o Chris",
        album:  "Album: <br> Todo Mundo Ama o Chris (Ao Vivo)"
    },

    {
        name:   "Música: <br> Bipolar",
        image:  "https://images.suamusica.com.br/Or4uG_3P7zMhxrzA7xN8tjiwjdA=/500x500/8284313/3242738/cd_cover.jpg",
        singer: "Cantores: <br> MC Davi, MC Pedrinho, MC Don Juan",
        album:  "Album: <br> Bipolar",
    },

    {
        name:   "Música: <br> O Vagabundo e a Dama",
        image:  "https://images.genius.com/50f72b851ffd9c8aa75a5560c27ae830.800x800x1.jpg",
        singer: "Cantor: <br> Oriente",
        album:  "Album: <br> Desorientado"
    },

    {
        name:   "Música: <br> Atrasadinha",
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/1/8/1/8/687581548073188.jpg",
        singer: "Cantor: <br> Felipe Araújo, Ferrugem",
        album:  "Album: <br> Por Inteiro (Ao Vivo)"
    },

    {
        name:   "Música: <br> Rei Lacoste",
        image:  "https://i1.sndcdn.com/artworks-B85FOtTwpaHv9Hft-7UiZEg-t500x500.jpg",
        singer: "Cantores: <br> MD Chefe, DomLaike",
        album:  "Album: <br> Rei Lacoste"
    },

    {
        name:   "Música: <br> Alive",
        image:  "https://img.discogs.com/O_mOULxADe6krgPlhRgro2We_rQ=/fit-in/550x541/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-1050768-1192322470.jpeg.jpg",
        singer: "Cantor: <br> Pearl Jam",
        album:  "Album: <br> Ten",
    },

    {
        name:   "Música: <br> Surfando nos Mandela",
        image:  "https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/5613e3f587ca40bfbcb9f32532770451~c5_720x720.jpeg",
        singer: "Cantores: <br> MC Menor MT, DJ Digo Beat",
        album:  "Album: <br> Surfando nos Mandela",
    },

    {
        name:   "Música: <br> Não Quer Chifre",
        image:  "https://i1.sndcdn.com/artworks-mnTeZO8dr9AXV7Ms-QQPNFg-t500x500.jpg",
        singer: "Cantores: <br> MC Frog, DJ Lucas Beat",
        album:  "Album: <br> Não Quer Chifre",
    },

    {
        name:   "Música: <br> Não, Não Vou",
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/a/a/4/c/aa4c8872c436cea8451cd25c8af4f154.jpg",
        singer: "Cantor: <br> Mari Fernandez",
        album:  "Album: <br> Piseiro Sofrência",
    },

    {
        name:   "Música: <br> Tipo Surfista",
        image:  "https://i1.sndcdn.com/artworks-rxs1dtREHKTkFznb-ztJwPg-t500x500.jpg",
        singer: "Cantores: <br> DJ Cleitinho, MC Menor MT",
        album:  "Album: <br> Tipo Surfista",
    },

    {
        name:   "Música: <br> De Mais Ninguém",
        image:  "https://i1.sndcdn.com/avatars-000006513751-013pfk-t500x500.jpg",
        singer: "Cantor: <br> Edu Ribeiro",
        album:  "Album: <br> Luau",
    },

    {
        name:   "Música: <br> Summer",
        image:  "https://i1.sndcdn.com/artworks-000544042710-e14hfs-t500x500.jpg",
        singer: "Cantor: <br> Calvin Harris",
        album:  "Album: <br> Motion",
    },

    {
        name:   "Música: <br> Plutão",
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/7/2/7/f/1094131623414154.jpg",
        singer: "Cantor: <br> VMZ",
        album:  "Album: <br> Plutão",
    },

    {
        name:   "Música: <br> Balada Louca",
        image:  "https://direct.rhapsody.com/imageserver/images/alb.161617249/500x500.jpg",
        singer: "Cantores: <br> Munhoz & Mariano, João Neto & Frederico",
        album:  "Album: <br> Ao Vivo em Campo Grande - Vol. II",
    },

    {
        name:   "Música: <br> Mun Rá",
        image:  "https://i1.sndcdn.com/artworks-000047269963-kwzoci-t500x500.jpg",
        singer: "Cantores: <br> Sabotage, Instituto",
        album:  "Album: <br> Mun Rá (Edição Comemorativa)",
    },

    {
        name:   "Música: <br> Esquema Preferido - Ao Vivo",
        image:  "https://images.genius.com/c7776115fd9512f64fd5ebf63af976f8.1000x1000x1.jpg",
        singer: "Cantor: <br> Os Barões da Pisadinha",
        album:  "Album: <br> Da Roça Pra Cidade (Ao Vivo)",
    },

    {
        name:   "Música: <br> Demons",
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/2/9/4/b/273741571234423.jpg",
        singer: "Cantor: <br> Imagine Dragons",
        album:  "Album: <br> Night Visions",
    },

    {
        name:   "Música: <br> One More Night",
        image:  "https://i1.sndcdn.com/artworks-000095826392-ri2sbb-t500x500.jpg",
        singer: "Cantor: <br> Maroon 5",
        album:  "Album: <br> Overexposed Track by Track",
    },

    {
        name:   "Música: <br> Boombastic",
        image:  "https://gringoscds.com.br/produtos/2244/20170318163607_shaggy-boombastic.jpg",
        singer: "Cantor: <br> Shaggy",
        album:  "Album: <br> Boombastic",
    },

    {
        name:   "Música: <br> This Love",
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/0/0/7/9/11327.jpg",
        singer: "Cantor: <br> Maroon 5",
        album:  "Album: <br> Song About Jane: Anniversary Edition",
    },

    {
        name:   "Música: <br> Oh! Chuva",
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/f/4/4/e/62821419954158.jpg",
        singer: "Cantor: <br> Falamansa",
        album:  "Album: <br> Essa é Pra Vocês",
    },

    {
        name:   "Música: <br> Colorir Papel",
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/0/9/e/f/24515.jpg",
        singer: "Cantor: <br> Jammil e Uma Noites",
        album:  "Album: <br> Jammil na Real",
    },

    {
        name:   "Música: <br> 24K Magic",
        image:  "https://upload.wikimedia.org/wikipedia/pt/1/19/Bruno_Mars-24K_Magic.jpg",
        singer: "Cantor: <br> Bruno Mars",
        album:  "Album: <br> 24K Magic",
    },

    {
        name:   "Música: <br> O Sol, a Lis e o Beija-Flor - Ao Vivo",
        image:  "https://direct.rhapsody.com/imageserver/images/alb.301147670/500x500.jpg",
        singer: "Cantor: <br> Edu Ribeiro",
        album:  "Album: <br> Edu Ribeiro (Ao Vivo)",
    },

    {
        name:   "Música: <br> Blurred Lines",
        image:  "https://i1.sndcdn.com/artworks-000668154253-xbezdx-t500x500.jpg",
        singer: "Cantores: <br> Robin Thicke, T.I., Pharrel Willians",
        album:  "Album: <br> Blurred Lines (Deluxe)",
    },

    {
        name:   "Música: <br> Xote dos Milagres",
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/7/c/9/0/62811419954196.jpg",
        singer: "Cantor: <br> Falamansa",
        album:  "Album: <br> Deixa Entrar...",
    },

    {
        name:   "Música: <br> Praieiro",
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/b/5/f/7/b5f746a31eba95d270af88c54214a67a.jpg",
        singer: "Cantor: <br> Jammil",
        album:  "Album: <br> Jammil de Todas as Praias - Ao Vivo",
    },

    {
        name:   "Música: <br> Bora",
        image:  "https://i1.sndcdn.com/artworks-n7mDhp0vDVRo-0-t500x500.jpg",
        singer: "Cantor: <br> Forró Cintura de Mola",
        album:  "Album: <br> Pancadão Lambadão",
    },
] // Array onde contém todas as informações que vão ser mostradas na tela.

var nameMusic = document.getElementById("nameMusics")

function addMusic() { // Função que vai adicionar novas músicas pelos inputs e pelo botão adicionar filme.
    var name = document.getElementById("name").value
    var image = document.getElementById("image").value
    var singer = document.getElementById("nameSinger").value
    var album = document.getElementById("album").value

    listMusics.filter(function(nameMusic) {return nameMusic.name === name}) // Filtra as músicas.
    
    if(listMusics.length > 0) { // Verifica se já tem a música na lista.
        alert("Você já tem essa música na sua lista!")
        return
    } 
    
    nameMusic.innerHTML += "<span class='cardMusicsName'>" + "<span class='cardSingerName'>" + "Música: " + "<br>" + name + "<hr>" + "Cantor: " + "<br>" + singer + "<hr>" + "Album: " + "<br>" + album +"</span>" + "<img src='" + image + "'>" + "</span>"
    // Adiciona as músicas adicionadas pelos inputs e pelo botão na tela.

    listMusics.push({
        name: name,
        singer: singer,
        image: image,
        album: album
}) // Empurra as informações adicionadas para serem mostradas na tela.

    document.getElementById("name").value = ""
    document.getElementById("image").value = ""
    document.getElementById("nameSinger").value = ""
    document.getElementById("album").value = ""
    // Limpa os campos dos inputs após as informações serem adicionadas.
}

showMusics()

function showMusics() {
    for (var i = 0; i < listMusics.length; i++) {
        nameMusic.innerHTML += "<span class='cardMusicsName'>" + "<span class='cardSingerName'>" + listMusics[i].name + '<hr>' + listMusics[i].singer + "<hr>" + listMusics[i].album + "</span>" + "<img src='" + listMusics[i].image + "'>" + "</span>"
    }
}
// Função que vai mostrar as músicas adicionadas pelo array na tela.

var crescOrder = document.getElementById("crescentOrder")
var descOrder = document.getElementById("descendingOrder")

  function crescentOrder() {
   listMusics.sort(function (a, b) {  
    if (a.name < b.name) {
      return -1
    }
    return 0
  }) 
  nameMusic.innerHTML = ""
  showMusics()
}  // Função que vai deixar as músicas em ordem crescente.

function descendingOrder() {
    listMusics.sort(function (a, b) {  
     if (a.name > b.name) {
       return -1
     }
     return 0
   }) 
   nameMusic.innerHTML = ""
   showMusics()
}  // Função que vai deixar as músicas em ordem decrescente.