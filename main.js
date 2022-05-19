var modal = document.querySelector('.modalBackground')

document.querySelectorAll('.modalX').forEach(item => {
    item.addEventListener('click', event => {
        modal.style.display = "none";
    })
})

window.addEventListener('click', event => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})

function resetEnabled(clickedItem) {
    if(clickedItem.classList.contains("enabled")){ //if is enabled then disable
        clickedItem.classList.replace("enabled", "disabled")
        if(clickedItem.classList.contains("disabled")){
            clickedItem.classList.remove("disabled")
        }
        clickedItem.getElementsByTagName("svg")[0].removeAttribute("filter")
    } else { // else enable and disable all other
        clickedItem.classList.replace("disabled", "enabled")
        if(clickedItem.classList.contains("disabled")){
            clickedItem.classList.remove("disabled")
        }
        clickedItem.getElementsByTagName("svg")[0].setAttribute("filter", "brightness(100) contrast(100)")
        clickedItem.setAttribute("style", "background: #292929")
    }

    document.querySelectorAll('.colorPicker').forEach(a => {
        a.classList.remove("enabled")
        a.getElementsByTagName("svg")[0].removeAttribute("filter");
        a.classList.add("disabled")
        a.setAttribute("style", "background: #292929")
    })
}

document.querySelectorAll('.colorPicker').forEach(item => {
    item.addEventListener('click', event => {
        resetEnabled(item)
        if(item.classList.contains("OptionRed")){ item.setAttribute("style", "background: #ad2828"); item.classList.remove("disabled")}
        if(item.classList.contains("OptionOrange")){ item.setAttribute("style", "background: #ffad16"); item.classList.remove("disabled")}
        if(item.classList.contains("OptionYellow")){ item.setAttribute("style", "background: #e6d820"); item.classList.remove("disabled")}
        if(item.classList.contains("OptionGreen")){ item.setAttribute("style", "background: #46ad38"); item.classList.remove("disabled")}
        if(item.classList.contains("OptionBlue")){ item.setAttribute("style", "background: #2043b4"); item.classList.remove("disabled")}
        if(item.classList.contains("OptionPurple")){ item.setAttribute("style", "background: #5125b8"); item.classList.remove("disabled")}
        if(item.classList.contains("OptionPink")){ item.setAttribute("style", "background: #c735c7"); item.classList.remove("disabled")}
        item.classList.add("enabled")
    })
})


// -----------------------------------------------------------------------
// ADDING CARDS
// -----------------------------------------------------------------------

function addCard(board, title) {
    var cardContainer = board.getElementsByClassName("cardContainer")[0]
    var node = document.getElementsByClassName("template")[0]
    var cardTemplate = node.cloneNode(true)
    cardTemplate.classList.remove("template")
    cardTemplate.getElementsByClassName("cardTitleText")[0].innerHTML = title
    cardTemplate.getElementsByClassName("cardDescription")[0].innerHTML = "Click me to edit the description!"

    cardTemplate.addEventListener('click', () => { cardTemplate.scrollIntoView(); modal.style.display = "block"; })

    cardContainer.appendChild(cardTemplate)
}

document.querySelectorAll(".board").forEach(item => {
    item.getElementsByClassName("createNewTask")[0].addEventListener('click', () => {
        var inputValue = item.getElementsByClassName("taskTitleInput")[0].value
        if (inputValue != "") {
            addCard(document.getElementById(item.id), inputValue)
        }
    })
})