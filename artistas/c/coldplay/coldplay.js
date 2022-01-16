let musics = [

    { 
        name: "My Universe",
        image: "https://rollingstone.uol.com.br/media/_versions/coldplay-bts-my-universe-rproducao-divulgacao_widelg.jpg",
        singer: "Coldplay",
        album: "Music of the Spheres",
        link: "https://www.youtube.com/watch?v=3YqPKLZF_WU"
    },

    { 
        name: "A Sky Full of Stars",
        image: "https://i.ytimg.com/vi/NDonh28AY3I/maxresdefault.jpg",
        singer: "Coldplay",
        album: "Ghost Stories",
        link: "https://www.youtube.com/watch?v=VPRjCeoBqrI"
    },

    { 
        name: "Paradise",
        image: "https://i.ytimg.com/vi/J6ZWlDks0nQ/maxresdefault.jpg",
        singer: "Coldplay",
        album: "Mylo Xyloto",
        link: "https://www.youtube.com/watch?v=1G4isv_Fylg"
    },

    { 
        name: "Clocks",
        image: "https://i.ytimg.com/vi/BRITQaokayw/maxresdefault.jpg",
        singer: "Coldplay",
        album: "Pepsi: More Music, Volume 2",
        link: "https://www.youtube.com/watch?v=d020hcWA_Wg"
    },

    { 
        name: "Yellow",
        image: "https://i.ytimg.com/vi/tjq0sXIPKJs/maxresdefault.jpg",
        singer: "Coldplay",
        album: "Yellow",
        link: "https://www.youtube.com/watch?v=yKNxeF4KMsY"
    },

    { 
        name: "Hymn For The Weekend",
        image: "https://miro.medium.com/max/1200/1*oagXv_KAOfKj-5VCcOb_iA.jpeg",
        singer: "Coldplay",
        album: "A Head Full of Dreams",
        link: "https://www.youtube.com/watch?v=YykjpeuMNEk"
    },
]

let artitsMusics = document.getElementById("artists__musics")

function showArtistsMusics() {
    for (let i = 0; i < musics.length; i++) {
        artitsMusics.innerHTML += "<span class='musicsName'><a href='" + musics[i].link +"'target=_blank''>" + "<span class='musicsSinger'>" + musics[i].name + '<hr>' + musics[i].singer + '<hr>' + musics[i].album + "</span>" + "<img class='musicsImage' src='" + musics[i].image + "'>" + "</span>"
    }
}

showArtistsMusics()

  function load() {
    //Setamos o valor inicial
    var count = 5
  
    //escondemos todos os elementos maior que o valor inicial
    $("#artists__musics").slice(count).hide()
  
    $('#load__more').click(function() {
  
      //Somamos a quantidade nova a ser exibida
      count += 5
  
      //Rodamos o loop no valor total
      for (var i = 0; i < count; i++) {
        //Mostramos o item
        $('#artists__musics').eq(i).show()
      }
    })
}