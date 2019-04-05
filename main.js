const firstcolor = "green"
const secondcolor = "blue"


const mybutton = document.getElementById('say')
mybutton.onclick = () => {
    let color

    if (mybutton.style.background === firstcolor) {
        mybutton.style.background = secondcolor
    } else if (mybutton.style.background === secondcolor){
        mybutton.style.background = firstcolor
    } else {
        mybutton.style.background = firstcolor
    }
}