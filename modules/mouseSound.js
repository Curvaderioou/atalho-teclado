export default function ativarSound(){

  const btns = document.querySelectorAll(".instrumentos button")
  const audios = document.querySelectorAll(".instrumentos audio")

  Mousetrap.bind('4', function() {document.getElementById("piano").play()})
  Mousetrap.bind('5', function() {document.getElementById("bateria").play()})
  Mousetrap.bind('6', function() {document.getElementById("violino").play()})
  Mousetrap.bind('7', function() {document.getElementById("guitarra").play()})
  Mousetrap.bind('8', function() {document.getElementById("flauta").play()})
 
  function sound(){
    if (audios.length && btns.length){
      function activeSound(index){
        audios[index].play();
      }
    

      btns.forEach((iten, index)=>{
        iten.addEventListener("click", ()=>{
          activeSound(index)
        })
      })
    }
  }

  sound();


}
