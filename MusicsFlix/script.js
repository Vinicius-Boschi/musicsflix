//Att1 Adicionar mais cantores/bandas.
//Att2 Adicionar o input de pesquisa, pra poder escrever o nome da música e achar ela no meio das outras.
var listMusics = [

    {   
        image:  "https://upload.wikimedia.org/wikipedia/pt/6/6c/Parachutes.jpg",
        singer: "Cantor: Coldplay",
        link: "/artistas/c/coldplay/coldplay.html"
    },

    {
        image:  "https://static1.purebreak.com.br/articles/4/47/33/4/@/210996-dilsinho-com-clipe-novo-refem-mostra-diapo-1.jpg",
        singer: "Cantor: Dilsinho",
        link: ""
    },

    {
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/a/9/8/a/8297.jpg",
        singer: "Cantor: Jack Johnson",
        link: ""
    },

    {
        image:  "https://www.sertanejotop.com.br/wp-content/uploads/2017/o-clipe-de-nao-deixo-nao-ultrapassa-6-milhoes-de-visualizacoes-no-youtube.jpg",
        singer: "Cantor: Mano Walter",
        link: ""
    },

    {
        image:  "https://www.portalpopcyber.com/wp-content/uploads/2021/08/1WIP-MATUE-SINGLE-TRACK-REV01-scaled.jpg",
        singer: "Cantor: Matuê",
        link: ""
    },

    {
        image:  "https://images.genius.com/42dde838eab366a73992312755f31a27.1000x1000x1.jpg",
        singer: "Cantor: Péricles",
        link: ""
    },

    {   
        image:  "https://www.galeria9.com.br/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/2/3/2342galeria9_-_camar_o_-_50x50.jpg",
        singer: "Cantores: Zeca Pagodinho, Péricles, Arlindo Cruz...",
        link: ""
    },

    {
        image:  "https://upload.wikimedia.org/wikipedia/pt/5/58/Capa_de_Nos_Arcos_da_Lapa.jpg",
        singer: "Cantor: Péricles",
        link: ""
    },

    {
        image:  "https://m.media-amazon.com/images/I/61CaTJAMIHL._UXNaN_FMjpg_QL85_.jpg",
        singer: "Cantor: Péricles",
        link: ""
    },

    {
        name:   "Música: Big Time Rush",
        image:  "http://pm1.narvii.com/6988/f574ace0fa007cb64575bbbdb66ed9b4802b9722r1-554-554v2_00.jpg",
        singer: "Cantor: Big Time Rush",
        link: ""
    },

    {
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/c/8/3/5/395321415452906.jpg",
        singer: "Cantor: Onze:20",
        link: ""
    },

    {
        image:  "https://cdns-images.dzcdn.net/images/cover/43269db08084bf03982b7f850845fa24/500x500.jpg",
        singer: "Cantor: Nego Jhá",
        link: ""
    },

    {   
        image:  "https://i1.sndcdn.com/artworks-000148511713-2bmn20-t500x500.jpg",
        singer: "Cantores: Matheus & Kauan",
        link: ""
    },

    {
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/e/6/7/8/1084651622037106.jpg",
        singer: "Cantor: Måneskin",
        link: ""
    },

    {
        image:  "https://www.connectmix.com/wp-content/uploads/2020/12/lancamento-12.png",
        singer: "Cantor: Atitude 67",
        link: ""
    },

    {
        image:  "https://linkstorage.linkfire.com/medialinks/images/9b41573d-78f4-46ed-a884-96186727a1d9/artwork-440x440.jpg",
        singer: "Cantores: Atitude 67, Analaga, Vitor Kley",
        link: ""
    },

    {
        image:  "https://i1.sndcdn.com/artworks-000438871638-im9eal-t500x500.jpg",
        singer: "Cantor: Metallica",
        link: ""
    },

    {
        image:  "https://98fmnatal.com.br/wp-content/uploads/2021/10/Dilsinho3.jpg",
        singer: "Cantores: Matheus Fernandes, Dilsinho",
        link: ""
    },

    {   
        image:  "https://cdns-images.dzcdn.net/images/cover/864bd4da1aedde79fec6a0b4c100cca8/500x500.jpg",
        singer: "Cantores: DJ Topo, MC Cyclope, MC Pr",
        link: ""
    },

    {
        image:  "https://i1.sndcdn.com/artworks-l5VNLuvtWdaq-0-t500x500.jpg",
        singer: "Cantores: Costa Gold, Kawe, André Nine",
        link: ""
    },

    {
        image:  "https://direct.rhapsody.com/imageserver/images/alb.297971001/600x600.jpg",
        singer: "Cantor: Trinidad Cardona",
        link: ""
    },

    {
        image:  "https://cdns-images.dzcdn.net/images/cover/c6ed59cd2a52c2f8385495904aaa1bd1/500x500.jpg",
        singer: "Cantor: O Grilo",
        link: ""
    },

    {
        image:  "https://i1.sndcdn.com/artworks-xyMCLUiTayQ6w3KT-8kBRKA-t500x500.jpg",
        singer: "Cantor: MC Kevin o Chris",
        link: ""
    },

    {
        name:   "Música: Bipolar",
        image:  "https://images.suamusica.com.br/Or4uG_3P7zMhxrzA7xN8tjiwjdA=/500x500/8284313/3242738/cd_cover.jpg",
        singer: "Cantores: MC Davi, MC Pedrinho, MC Don Juan",
        link: ""
    },

    {
        image:  "https://images.genius.com/50f72b851ffd9c8aa75a5560c27ae830.800x800x1.jpg",
        singer: "Cantor: Oriente",
        link: ""
    },

    {
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/1/8/1/8/687581548073188.jpg",
        singer: "Cantor: Felipe Araújo, Ferrugem",
        link: ""
    },

    {
        image:  "https://i1.sndcdn.com/artworks-B85FOtTwpaHv9Hft-7UiZEg-t500x500.jpg",
        singer: "Cantores: MD Chefe, DomLaike",
        link: ""
    },

    {
        image:  "https://img.discogs.com/O_mOULxADe6krgPlhRgro2We_rQ=/fit-in/550x541/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-1050768-1192322470.jpeg.jpg",
        singer: "Cantor: Pearl Jam",
        link: ""
    },

    {
        image:  "https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/5613e3f587ca40bfbcb9f32532770451~c5_720x720.jpeg",
        singer: "Cantores: MC Menor MT, DJ Digo Beat",
        link: ""
    },

    {
        image:  "https://i1.sndcdn.com/artworks-mnTeZO8dr9AXV7Ms-QQPNFg-t500x500.jpg",
        singer: "Cantores: MC Frog, DJ Lucas Beat",
        link: ""
    },

    {
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/a/a/4/c/aa4c8872c436cea8451cd25c8af4f154.jpg",
        singer: "Cantor: Mari Fernandez",
        link: ""
    },

    {
        image:  "https://i1.sndcdn.com/artworks-rxs1dtREHKTkFznb-ztJwPg-t500x500.jpg",
        singer: "Cantores: DJ Cleitinho, MC Menor MT",
        link: ""
    },

    {
        image:  "https://i1.sndcdn.com/avatars-000006513751-013pfk-t500x500.jpg",
        singer: "Cantor: Edu Ribeiro",
        link: ""
    },

    {
        image:  "https://i1.sndcdn.com/artworks-000544042710-e14hfs-t500x500.jpg",
        singer: "Cantor: Calvin Harris",
        link: ""
    },

    {
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/7/2/7/f/1094131623414154.jpg",
        singer: "Cantor: VMZ",
        link: ""
    },

    {
        image:  "https://direct.rhapsody.com/imageserver/images/alb.161617249/500x500.jpg",
        singer: "Cantores: Munhoz & Mariano, João Neto & Frederico",
        link: ""
    },

    {
        image:  "https://i1.sndcdn.com/artworks-000047269963-kwzoci-t500x500.jpg",
        singer: "Cantores: Sabotage, Instituto",
        link: ""
    },

    {
        image:  "https://images.genius.com/c7776115fd9512f64fd5ebf63af976f8.1000x1000x1.jpg",
        singer: "Cantor: Os Barões da Pisadinha",
        link: ""
    },

    {
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/2/9/4/b/273741571234423.jpg",
        singer: "Cantor: Imagine Dragons",
        link: ""
    },

    {
        image:  "https://i1.sndcdn.com/artworks-000095826392-ri2sbb-t500x500.jpg",
        singer: "Cantor: Maroon 5",
        link: ""
    },

    {
        image:  "https://gringoscds.com.br/produtos/2244/20170318163607_shaggy-boombastic.jpg",
        singer: "Cantor: Shaggy",
        link: ""
    },

    {
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/0/0/7/9/11327.jpg",
        singer: "Cantor: Maroon 5",
        link: ""
    },

    {
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/f/4/4/e/62821419954158.jpg",
        singer: "Cantor: Falamansa",
        link: ""
    },

    {
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/0/9/e/f/24515.jpg",
        singer: "Cantor: Jammil e Uma Noites",
        link: ""
    },

    {
        image:  "https://upload.wikimedia.org/wikipedia/pt/1/19/Bruno_Mars-24K_Magic.jpg",
        singer: "Cantor: Bruno Mars",
        link: ""
    },

    {
        image:  "https://direct.rhapsody.com/imageserver/images/alb.301147670/500x500.jpg",
        singer: "Cantor: Edu Ribeiro",
        link: ""
    },

    {
        image:  "https://i1.sndcdn.com/artworks-000668154253-xbezdx-t500x500.jpg",
        singer: "Cantores: Robin Thicke, T.I., Pharrel Willians",
        link: ""
    },

    {
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/7/c/9/0/62811419954196.jpg",
        singer: "Cantor: Falamansa",
        link: ""
    },

    {
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/b/5/f/7/b5f746a31eba95d270af88c54214a67a.jpg",
        singer: "Cantor: Jammil",
        link: ""
    },

    {
        image:  "https://i1.sndcdn.com/artworks-n7mDhp0vDVRo-0-t500x500.jpg",
        singer: "Cantor: Forró Cintura de Mola",
        link: ""
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
        nameMusic.innerHTML += "<span class='cardMusicsName'><a href='" + listMusics[i].link +"'target=_blank''>" + "<span class='cardSingerName'>" + listMusics[i].singer + "</span>" + "<img src='" + listMusics[i].image + "'>" + "</span>"
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