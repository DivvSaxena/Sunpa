let countdownEl = document.getElementById('countdown')
let sunlightBtnEl = document.getElementById('sunlight-btn')

function countdown(a , targetElementIdEl){
    let min = a
    let sec = 60

        let timer = setInterval(() => {
            sec--
            targetElementIdEl.innerHTML = min+ ":" +sec     
            if(sec == 0){
                if(min > 0){
                    min--
                    sec = 60
                    targetElementIdEl.innerHTML = min+ ":" +sec  
                }
                else{
                    targetElementIdEl.textContent = "Times up"
                    clearInterval(timer)
                }            
            }
        },1000)
    
}

function handleSunlightBtnClick(e){
    if(e.target.parentNode.parentNode.children[0].id == 'countdown' ){
        let targetElementId = e.target.parentNode.parentNode.children[0].id
        let targetElementIdEl = document.getElementById(`${targetElementId}`)
        countdownEl.innerHTML = "00:00"
        countdown(9, targetElementIdEl)
        let parent = e.target.parentNode
        let child = e.target.parentNode.children[0]
        let span = document.createElement('span')
        span.innerHTML = 'stop'
        span.classList.add('stop-btn')
        child = parent.replaceChild(span,child)
    }
    else if(e.target.parentNode.parentNode.children[0].id == 'heybabes'){
        let targetElement = e.target.parentNode.parentNode.children[0]
        let targetElementId = targetElement.id
        let targetElementIdEl = document.getElementById(`${targetElementId}`)
        targetElement.innerHTML = "00:00"
        countdown(9,targetElementIdEl)
        let parent = e.target.parentNode
        let child = e.target.parentNode.children[0]
        let span = document.createElement('span')
        span.innerHTML = 'stop'
        span.classList.add('stop-btn')
        child = parent.replaceChild(span,child)
    }
}

function handleStopBtnClick(e){
    let parent = e.target.parentNode.parentNode
    let targetElementId = parent.children[0].id
    let targetElementIdEl = document.getElementById(`${targetElementId}`)
    targetElementIdEl.innerHTML = 'Stopped'
    let stoppedh1 = document.createElement('h1')
    stoppedh1.textContent = 'stopped'
    stoppedh1.setAttribute("id", "countdown")
    targetElementIdEl = parent.replaceChild(stoppedh1,targetElementIdEl)

    let subparent = e.target.parentNode
    let currentstopbtn = e.target.parentNode.children[0]
    currentstopbtn = subparent.replaceChild(sunlightBtnEl,currentstopbtn)
}

document.addEventListener('click', (e)=>{
    if(e.target.id == 'sunlight-btn'){
       handleSunlightBtnClick(e)
    }
    else if(e.target.textContent == 'stop'){
        handleStopBtnClick(e)
    }

})
