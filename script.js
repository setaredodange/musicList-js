//
 const players = document.querySelectorAll('.fa-play')
 const audios = document.querySelectorAll('audio')
//  console.log (audios)


// console.log(players)

let musicName;

players.forEach(function (player){
    // console.log(player)

    player.addEventListener('click', function(event){
        // console.log(event.target.dataset.name)
        musicName = event.target.dataset.name

        audios.forEach(function (audio) {

            
            if( audio.dataset.name === musicName){
                audio.currentTime = 0
                audio.play()

            }else{
                audio.pause()

            }
            
        })
    })

})