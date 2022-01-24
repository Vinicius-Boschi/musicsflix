let artistsMusics = document.getElementById("artists__musics") // Definimos onde vão ser mostradas as músicas.

function showArtistsMusics() {
  for (let i = 0; i < musics.length; i++) {
    artistsMusics.innerHTML += "<div class='musicsName'><a href='" + musics[i].link +"'target=_blank''>" + "<div class='musicsSinger'>" + musics[i].name + '<hr>' + musics[i].singer + '<hr>' + musics[i].album + "</div>" + "<img class='musicsImage' src='" + musics[i].image + "'>" + "</div>" 
}} // Aqui todas as músicas que estiverem no array vão ser mostradas na tela.

showArtistsMusics()

function load() {
  //Setamos o valor inicial.
  let count = 6

  //escondemos todos os elementos maior que o valor inicial.
  $(".musicsName").slice(count).hide()

  $('.load__more').click(function() {
      //Somamos a quantidade nova a ser exibida.
      count += 3

      //Rodamos o loop no valor total.
      for (let i = 0; i < count; i++) {
          //Mostramos o item.
          $(".musicsName").eq(i).show(800) // Mostras as músicas com um delay.
      }
  }) 
}

load()

let button = $('.btn')

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) { 
    button.addClass('show') // Aqui o botão aparece na página.
  } else {
    button.removeClass('show') // Botão desaparece.
  }
})

button.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300') // Deixa o botão com animação.
})