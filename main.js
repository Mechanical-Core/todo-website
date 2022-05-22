var modal = document.querySelector('.modalBackground')
var actionButton = modal.querySelector(".SubmitEdit")

document.querySelectorAll('.modalX').forEach(item => {
    item.addEventListener('click', event => {
        modal.style.display = "none"
        removeEventListener("click", actionButton)
    })
})

window.addEventListener('mousedown', event => {
    if (event.target == modal) {
        modal.style.display = "none";
        removeEventListener("click", actionButton)
    }
})

function resetEnabled(cardElement) {
    cardElement.classList.remove("card-boxshadow-red")
    cardElement.classList.remove("card-boxshadow-orange")
    cardElement.classList.remove("card-boxshadow-yellow")
    cardElement.classList.remove("card-boxshadow-green")
    cardElement.classList.remove("card-boxshadow-blue")
    cardElement.classList.remove("card-boxshadow-purple")
    cardElement.classList.remove("card-boxshadow-pink")
}

// -----------------------------------------------------------------------
// ADDING CARDS
// -----------------------------------------------------------------------

function cardClicked(cardID){
    var cardFromID = document.getElementById(cardID)

    cardFromID.scrollIntoView()
    modal.style.display = "block"

    var titleField = modal.getElementsByClassName("modalEditCardTitle")[0]
    var descField = modal.getElementsByClassName("modalEditCardDescription")[0]

    titleField.value = cardFromID.getElementsByClassName("cardTitleText")[0].innerHTML
    descField.value = cardFromID.getElementsByClassName("cardDescription")[0].innerHTML
    
    function resetOtherColorSelections(colorToKeep) {
        modal.querySelectorAll('.colorPicker').forEach(colorObject => {
            if (colorObject.classList[1] != colorToKeep) {
                colorObject.setAttribute("style", "background: #292929")
                colorObject.classList.remove("enabled")
                colorObject.classList.add("disabled")
            }
        })
    }

    function setCurrentColorSelection(currentColorOption, cardObject, colorObject) {
        switch(currentColorOption) {
            case "OptionRed":
                colorObject.setAttribute("style", "background: #ad2828")
                resetEnabled(cardObject)
                cardObject.classList.add("card-boxshadow-red")
                colorObject.classList.remove("disabled")
                colorObject.classList.add("enabled")
                resetOtherColorSelections("OptionRed")
                break;
            case "OptionOrange":
                colorObject.setAttribute("style", "background: #ffad16")
                resetEnabled(cardObject)
                cardObject.classList.add("card-boxshadow-orange")
                colorObject.classList.remove("disabled")
                colorObject.classList.add("enabled")
                resetOtherColorSelections("OptionOrange")
                break;
            case "OptionYellow":
                colorObject.setAttribute("style", "background: #e6d820")
                resetEnabled(cardObject)
                cardObject.classList.add("card-boxshadow-yellow")
                colorObject.classList.remove("disabled")
                colorObject.classList.add("enabled")
                resetOtherColorSelections("OptionYellow")
                break;
            case "OptionGreen":
                colorObject.setAttribute("style", "background: #46ad38")
                resetEnabled(cardObject)
                cardObject.classList.add("card-boxshadow-green")
                colorObject.classList.remove("disabled")
                colorObject.classList.add("enabled")
                resetOtherColorSelections("OptionGreen")
                break;
            case "OptionBlue":
                colorObject.setAttribute("style", "background: #2043b4")
                resetEnabled(cardObject)
                cardObject.classList.add("card-boxshadow-blue")
                colorObject.classList.remove("disabled")
                colorObject.classList.add("enabled")
                resetOtherColorSelections("OptionBlue")
                break;
            case "OptionPurple":
                colorObject.setAttribute("style", "background: #5125b8")
                resetEnabled(cardObject)
                cardObject.classList.add("card-boxshadow-purple")
                colorObject.classList.remove("disabled")
                colorObject.classList.add("enabled")
                resetOtherColorSelections("OptionPurple")
                break;
            case "OptionPink":
                colorObject.setAttribute("style", "background: #c735c7")
                resetEnabled(cardObject)
                cardObject.classList.add("card-boxshadow-pink")
                colorObject.classList.remove("disabled")
                colorObject.classList.add("enabled")
                resetOtherColorSelections("OptionPink")
                break;
        }
    }

    function setModalColorPickerFromCard(cardObject) {
        
    }

    switch(cardFromID.classList[1]) {
        case "card-boxshadow-red":
            setCurrentColorSelection("OptionRed", cardFromID, modal.querySelector('.OptionRed'))
            break;
        case "card-boxshadow-orange":
            setCurrentColorSelection("OptionOrange", cardFromID, modal.querySelector('.OptionOrange'))
            break;
        case "card-boxshadow-yellow":
            setCurrentColorSelection("OptionYellow", cardFromID, modal.querySelector('.OptionYellow'))
            break;
        case "card-boxshadow-green":
            setCurrentColorSelection("OptionGreen", cardFromID, modal.querySelector('.OptionGreen'))
            break;
        case "card-boxshadow-blue":
            setCurrentColorSelection("OptionBlue", cardFromID, modal.querySelector('.OptionBlue'))
            break;
        case "card-boxshadow-purple":
            setCurrentColorSelection("OptionPurple", cardFromID, modal.querySelector('.OptionPurple'))
            break;
        case "card-boxshadow-pink":
            setCurrentColorSelection("OptionPink", cardFromID, modal.querySelector('.OptionPink'))
            break;
    }


    modal.querySelectorAll('.colorPicker').forEach(color => {
        var old_element = color;
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
        color = new_element

        color.addEventListener('click', () => {
            switch(color.classList[1]) {
                case "OptionRed":
                    setCurrentColorSelection("OptionRed", cardFromID, color)
                    break;
                case "OptionOrange":
                    setCurrentColorSelection("OptionOrange", cardFromID, color)
                    break;
                case "OptionYellow":
                    setCurrentColorSelection("OptionYellow", cardFromID, color)
                    break;
                case "OptionGreen":
                    setCurrentColorSelection("OptionGreen", cardFromID, color)
                    break;
                case "OptionBlue":
                    setCurrentColorSelection("OptionBlue", cardFromID, color)
                    break;
                case "OptionPurple":
                    setCurrentColorSelection("OptionPurple", cardFromID, color)
                    break;
                case "OptionPink":
                    setCurrentColorSelection("OptionPink", cardFromID, color)
                    break;
                default:
                    break;
            }
            var old_element = color;
            var new_element = old_element.cloneNode(true);
            old_element.parentNode.replaceChild(new_element, old_element);

            color = new_element
        })
    })

    var actionButtonClickEvent = () => {
        var old_element = actionButton;
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);

        actionButton = new_element

        if(actionButton.classList.contains("deleteCard")){
            document.getElementById(cardID).remove()
            modal.style.display = "none";
        } else {
            document.getElementById(cardID).getElementsByClassName("cardTitleText")[0].innerHTML = titleField.value
            document.getElementById(cardID).getElementsByClassName("cardDescription")[0].innerHTML= descField.value
            modal.style.display = "none";
        }

        actionButton.classList.remove("deleteCard")
        actionButton.innerHTML = "Update"
    }

    
    actionButton.addEventListener("click", actionButtonClickEvent)

    function modalFieldCheck() {
        if (titleField.value == "" && descField.value == "") {
            if(! actionButton.classList.contains("deleteCard")){
                actionButton.classList.add("deleteCard")
                actionButton.innerHTML = "Delete"
            }
        } else {
            actionButton.classList.remove("deleteCard")
            actionButton.innerHTML = "Update"
        }
    }

    [titleField, descField].forEach(item => {
        item.addEventListener("input", () => {
            modalFieldCheck()
        })
    })
}

function appendWithUniqueID(borad, card) {
    var elements = borad.querySelector(".cardContainer").getElementsByClassName("card");
    card.id = "card-" + borad.id + "-" + elements.length;
    borad.querySelector(".cardContainer").appendChild(card)
}

function addCard(board, title) {
    var cardContainer = board.getElementsByClassName("cardContainer")[0]
    var node = document.getElementsByClassName("template")[0]
    var cardTemplate = node.cloneNode(true)
    cardTemplate.classList.remove("template")
    cardTemplate.getElementsByClassName("cardTitleText")[0].innerHTML = title
    cardTemplate.getElementsByClassName("cardDescription")[0].innerHTML = "Click me to edit the description!"

    appendWithUniqueID(board, cardTemplate)

    var cardClickEvent = () => {
        cardClicked(cardTemplate.id)
    }


    cardTemplate.addEventListener('click', cardClickEvent);

    cardTemplate.addEventListener('dragstart', handleDragStart);
    cardTemplate.addEventListener('dragover', handleDragOver);
    cardTemplate.addEventListener('dragenter', handleDragEnter);
    cardTemplate.addEventListener('dragleave', handleDragLeave);
    cardTemplate.addEventListener('dragend', handleDragEnd);
    cardTemplate.addEventListener('drop', handleDrop);
}

document.querySelectorAll(".board").forEach(item => {
    item.getElementsByClassName("createNewTask")[0].addEventListener('click', () => {
        var inputValue = item.getElementsByClassName("taskTitleInput")[0].value
        if (inputValue != "") {
            addCard(document.getElementById(item.id), inputValue)
        }
    })

    item.querySelectorAll(".cardContainer").forEach(container =>{
        container.addEventListener('dragenter', handleDragEnter);
        container.addEventListener('dragover', handleDragOver);
        container.addEventListener('drop', handleDropCardContainer)
    })
})


// -----------------------------------------------------------------------
// DRAG AND DROP
// -----------------------------------------------------------------------

var allCards = document.querySelectorAll(".card")
var allBoards = document.querySelectorAll(".board")

function cardObjectFromEvent(event) {
    if(event.target.classList.contains("card")) {
        return event.target
    } else if(event.target.parentNode.classList.contains("card")){
        return event.target.parentNode
    } else if (event.target.parentNode.parentNode.classList.contains("card")){
        return event.target.parentNode.parentNode
    }
}

function handleDragStart(event) {
    var cardFromEvent = cardObjectFromEvent(event)

    cardFromEvent.style.opacity = '0.4';
    cardFromEvent.style.border = "3px dashed #333333"
    cardFromEvent.style.margin = "-3px"
    cardFromEvent.style.borderRadius = "12px"
    cardFromEvent.style.transition = "0.1s"

    dragSrcEl = cardFromEvent;

    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/html', this.innerHTML);
}
function handleDragEnd(event) {
    if(event.target.classList.contains("cardContainer")){
        event.preventDefault()
    } else {
        var cardFromEvent = cardObjectFromEvent(event)
        if (cardFromEvent) {
            cardFromEvent.removeAttribute("style")
        }
    }
}

function handleDragOver(event) {
    if(event.target.classList.contains("cardContainer")){
        event.preventDefault()
    } else {
        var cardFromEvent = cardObjectFromEvent(event)
        
        event.preventDefault();
        cardFromEvent.style.opacity = '0.4';
        cardFromEvent.style.border = "3px dashed #425130"
        cardFromEvent.style.margin = "-3px"
        cardFromEvent.style.borderRadius = "12px"
        cardFromEvent.style.transition = "0.1s"
    }
}

function handleDragEnter(event) {
    if(event.target.classList.contains("cardContainer")){
        event.preventDefault()
        console.log("ENTERED")
    } else {
        var cardFromEvent = cardObjectFromEvent(event)
        if(cardFromEvent != dragSrcEl) {
            cardFromEvent.style.opacity = '0.4';
            cardFromEvent.style.border = "3px dashed #425130"
            cardFromEvent.style.margin = "-3px"
            cardFromEvent.style.borderRadius = "12px"
            cardFromEvent.style.transition = "0.1s"
        }
    }
}

function handleDragLeave(event) {
    if(cardFromEvent != dragSrcEl) {
        var cardFromEvent = cardObjectFromEvent(event)
        cardFromEvent.removeAttribute("style")
        cardFromEvent.removeAttribute("style")
    }
}

function handleDrop(event) {
    event.stopPropagation();
    var cardFromEvent = cardObjectFromEvent(event)

    console.log(event.target)

    if (dragSrcEl !== cardFromEvent) {
        var toClasses = [... cardFromEvent.classList]
        var fromClasses = [... dragSrcEl.classList]

        dragSrcEl.innerHTML = cardFromEvent.innerHTML;
        cardFromEvent.innerHTML = event.dataTransfer.getData('text/html');

        cardFromEvent.classList.remove(toClasses[1])
        dragSrcEl.classList.remove(fromClasses[1])

        cardFromEvent.classList.add(fromClasses[1])
        dragSrcEl.classList.add(toClasses[1])
    }
    cardFromEvent.removeAttribute("style")
}

function handleDropCardContainer(event){
    event.preventDefault()
    event.stopPropagation();
    var boardName = event.target.parentNode.id
    console.log(boardName)

    components = dragSrcEl.id.split("-")
    console.log(components)
    components[1] = boardName

    dragSrcEl.id = `${components[0]}-${components[1]}-${components[2]}`
    console.log(dragSrcEl.id)

    event.target.append(dragSrcEl)
}
