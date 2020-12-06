//_1eNef

const interval = setInterval(() => {
    const header = document.querySelector("._1eNef") //usnado o ponto como no css
    if(header){
        console.log(header)
        clearInterval(interval)

        const button = document.createElement("button")
        button.innerHTML = "2x"
        button.classList.add("twoTimesButton")
        

        button.addEventListener("click",() => {
            const audios = document.querySelectorAll("audio")
            audios.forEach((x) => {
                x.playbackRate = 2;
            })
        })

        header.appendChild(button)
    }
},1000)

