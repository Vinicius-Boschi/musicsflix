let musics = [

    { 
        name: "My Universe",
        image: "https://i.ytimg.com/vi/3YqPKLZF_WU/maxresdefault.jpg",
        singer: "Coldplay, BTS",
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

    { 
        name: "Higher Power",
        image: "https://i.ytimg.com/vi/qm5a30AJNI8/maxresdefault.jpg",
        singer: "Coldplay",
        album: "Music of the Spheres",
        link: "https://www.youtube.com/watch?v=3lfnR7OhZY8"
    },

    { 
        name: "Adventure of a Lifetime",
        image: "https://www.vagalume.com.br/dynimage/news26414-big.jpg",
        singer: "Coldplay",
        album: "A Head Full of Dreams",
        link: "https://www.youtube.com/watch?v=QtXby3twMmI"
    },

    { 
        name: "Viva La Vida",
        image: "https://timeline.coldplay.com/wp-content/uploads/2018/08/VivaLaVida-2-1024x523.jpg",
        singer: "Coldplay",
        album: "Viva La Vida",
        link: "https://www.youtube.com/watch?v=dvgZkm1xWPE"
    },

    { 
        name: "Something Just Like This",
        image: "https://i.ytimg.com/vi/q4JQvxLbnoY/maxresdefault.jpg",
        singer: "Coldplay, Chainsmokers ",
        album: "Memories... Do Not Open",
        link: "https://www.youtube.com/watch?v=FM7MFYoylVs"
    },

    { 
        name: "Fix You",
        image: "https://i.ytimg.com/vi/k4V3Mo61fJM/maxresdefault.jpg",
        singer: "Coldplay",
        album: "X&Y",
        link: "https://www.youtube.com/watch?v=k4V3Mo61fJM"
    },

    { 
        name: "Charlie Brown",
        image: "https://www.vagalume.com.br/dynimage/news2813-big.jpg",
        singer: "Coldplay",
        album: "Mylo Xyloto",
        link: ""
    },
]

let artistsMusics = document.getElementById("artists__musics")

function showArtistsMusics() {
    for (let i = 0; i < musics.length; i++) {
        artistsMusics.innerHTML += "<span class='musicsName'><a href='" + musics[i].link +"'target=_blank''>" + "<span class='musicsSinger'>" + musics[i].name + '<hr>' + musics[i].singer + '<hr>' + musics[i].album + "</span>" + "<img class='musicsImage' src='" + musics[i].image + "'>" + "</span>"
    }
}

showArtistsMusics()

  function load() {
    //Setamos o valor inicial
    let count = 6
  
    //escondemos todos os elementos maior que o valor inicial
    $(".musicsName").slice(count).hide()
  
    $('.load__more').click(function() {
  
      //Somamos a quantidade nova a ser exibida
      count += 3
  
      //Rodamos o loop no valor total
      for (let i = 0; i < count; i++) {
        //Mostramos o item
        $('.musicsName').eq(i).show()
      }
    })
}