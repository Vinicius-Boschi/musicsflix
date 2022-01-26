//Att1 Adicionar mais cantores/bandas.
//Att2 Adicionar o input de pesquisa, pra poder escrever o nome da música e achar ela no meio das outras.
var listMusics = [

    {   
        image:  "https://www.radiorock.com.br/wp-content/uploads/2021/12/coldplay.jpg",
        singer: "Cantor: <br> Coldplay",
        link: "/artistas/c/coldplay/coldplay.html"
    },

    {
        image:  "https://marcas-logos.net/wp-content/uploads/2020/03/Red-Hot-Chili-Peppers-logo-1.jpg",
        singer: "Cantor: <br> Red Hot Chili Peppers",
        link: ""
    },

    {
        image:  "https://static.quizur.com/i/b/578f379f7e82b0.46538839578f379f6f5e92.67619234.jpg",
        singer: "Cantor: <br> Nirvana",
        link: ""
    },

    {
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/7/a/1/0/7a10bf4a1d68182a106b14b6dbccb7c5.jpg",
        singer: "Cantor: <br> Oriente",
        link: ""
    },

    {
        image:  "https://embarquenaviagem.com/wp-content/uploads/2020/12/Seu-Jorge-Credito-Getty-Images.jpg",
        singer: "Cantor: <br> Seu Jorge",
        link: ""
    },

    {
        image:  "https://f.i.uol.com.br/fotografia/2019/01/17/15477433765c40b0909a9e2_1547743376_3x2_md.jpg",
        singer: "Cantor: <br> Natiruts",
        link: ""
    },

    {   
        image:  "https://jpimg.com.br/uploads/2021/04/tales-de-polli-fabinho-araujo-e-felipe-souza.jpg",
        singer: "Cantor: <br> Maneva",
        link: ""
    },

    {
        image:  "https://f.i.uol.com.br/fotografia/2020/05/19/15899108995ec41d73e3bdd_1589910899_3x2_md.jpg",
        singer: "Cantor: <br> Péricles",
        link: ""
    },

    {
        image:  "https://s2.glbimg.com/G6wanOJo5pIZDQKo4bfqbssClpg=/0x0:1600x1067/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/A/o/GKhxtHRIGpdU7IFxLChg/racionaisdivulgacao.jpg",
        singer: "Cantor: <br> Racionais",
        link: ""
    },

    {
        image:  "https://rollingstone.uol.com.br/media/_versions/legacy/2017/img-1047094-blitz_widelg.jpg",
        singer: "Cantor: <br> Blitz",
        link: ""
    },

    {
        image:  "https://www.rbsdirect.com.br/filestore/6/7/4/5/3/3/1_f6809a559ea1c8d/1335476_91e43898ff89745.jpg?w=700",
        singer: "Cantor: <br> Charlie Brown Jr.",
        link: "../artistas/c/charlieBrownJr/charlieBrownJr.html"
    },

    {
        image:  "https://onorte.net/polopoly_fs/1.753824!/image/image.jpg_gen/derivatives/landscape_653/image.jpg",
        singer: "Cantor: <br> Capital Inicial",
        link: ""
    },

    {   
        image:  "https://www.embrashow.com.br/wp-content/uploads/2020/03/contato-contratar-capa-atitude-67-1.jpg",
        singer: "Cantor: <br> Atitude 67",
        link: ""
    },

    {   
        image:  "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/7/b/d/a/7bda8810fb3661290d9744100cecd82d.jpg",
        singer: "Cantor: <br> Pearl Jam",
        link: ""
    },

    {   
        image:  "https://static.ndmais.com.br/2021/08/alok-dj-e1630007642798-800x482.jpg",
        singer: "Cantor: <br> Alok",
        link: ""
    },

    {   
        image:  "https://www.meioemensagem.com.br/wp-content/uploads/2020/12/jorge_e_mateus.jpg",
        singer: "Cantor: <br> Jorge & Mateus",
        link: ""
    },

    {   
        image:  "https://f.i.uol.com.br/fotografia/2021/03/27/1616871887605f81cf3a801_1616871887_3x2_md.jpg",
        singer: "Cantor: <br> Zé Neto & Cristiano",
        link: ""
    },

    {   
        image:  "https://f.i.uol.com.br/fotografia/2021/01/18/161097312660057fc6870ff_1610973126_3x2_md.jpg",
        singer: "Cantor: <br> Justin Timberlake",
        link: ""
    },

    {   
        image:  "https://www12.senado.leg.br/radio/1/capitulo-rock/2020/12/18/acdc/acdc_uada.jpg/@@images/c4a74bac-7c58-4b40-8854-b39e7a0381d6.jpeg",
        singer: "Cantor: <br> AC/DC",
        link: ""
    },

    {   
        image:  "https://cdn.falauniversidades.com.br/wp-content/uploads/2020/07/02133648/Banda-Lagum.jpg",
        singer: "Cantor: <br> Lagum",
        link: "/artistas/l/lagum/lagum.html"
    },
] // Array onde contém todas as informações que vão ser mostradas na tela.

alert("Há três cantores/bandas adicionados, Charlie Brown Jr, Lagum e Coldplay.")

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
    
    nameMusic.innerHTML += "<div class='cardMusicsName'>" + "<div class='cardSingerName'>" + "Música: " + "<br>" + name + "<hr>" + "Cantor: " + "<br>" + singer + "<hr>" + "Album: " + "<br>" + album +"</div>" + "<img src='" + image + "'>" + "</div>"
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
        nameMusic.innerHTML += "<div class='cardMusicsName'><a href='" + listMusics[i].link +"'target=_blank''>" + "<div class='cardSingerName'>" + listMusics[i].singer + "</div>" + "<img src='" + listMusics[i].image + "'>" + "</div>"
    }
}
// Função que vai mostrar as músicas adicionadas pelo array na tela.

var crescOrder = document.getElementById("crescentOrder")
var descOrder = document.getElementById("descendingOrder")

function crescentOrder() {
    listMusics.sort(function (a, b) {  
        if (a.singer < b.singer) {
        return -1
    }
    return 0
  }) 
    nameMusic.innerHTML = ""
    showMusics()
}  // Função que vai deixar as músicas em ordem crescente.

function descendingOrder() {
    listMusics.sort(function (a, b) {  
     if (a.singer > b.singer) {
       return -1
     }
     return 0
   }) 
    nameMusic.innerHTML = ""
    showMusics()
} // Função que vai deixar as músicas em ordem decrescente.

function load() {
    //Setamos o valor inicial.
    let count = 8

    //escondemos todos os elementos maior que o valor inicial.
    $(".cardMusicsName").slice(count).hide()

    $('.load__more').click(function() {
        //Somamos a quantidade nova a ser exibida.
        count += 2

        //Rodamos o loop no valor total.
        for (let i = 0; i < count; i++) {
            //Mostramos o item.
            $(".cardMusicsName").eq(i).show(600) // Mostras as músicas com um delay.
        }
    }) 
}

load()

let button = $('.btn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    button.addClass('show');
  } else {
    button.removeClass('show');
  }
})

button.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300')
})