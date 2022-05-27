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

        $.ajax({
            type: 'PUT',
            url: `http://127.0.0.1:8000/api/tasks/${cardObject.id.split("-")[2]}`,
            data: {
                "board_id": cardObject.parentElement.parentElement.id,
                "title": cardObject.querySelector(".cardTitleText").innerText,
                "description": cardObject.querySelector(".cardDescription").innerText,
                "color": cardObject.classList[1],
            }
        })
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

            $.ajax({
                type: 'PUT',
                url: `http://127.0.0.1:8000/api/tasks/${cardFromID.id.split("-")[2]}`,
                data: {
                    "board_id": cardFromID.parentElement.parentElement.id,
                    "title": cardFromID.querySelector(".cardTitleText").innerText,
                    "description": cardFromID.querySelector(".cardDescription").innerText,
                    "color": cardFromID.classList[1],
                }
            })
        })
    })

    var actionButtonClickEvent = () => {
        var old_element = actionButton;
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);

        actionButton = new_element

        if(actionButton.classList.contains("deleteCard")){
            cardFromID.remove()
            modal.style.display = "none";

            $.ajax({
                type: 'DELETE',
                url: `http://127.0.0.1:8000/api/tasks/${cardFromID.id.split("-")[2]}`,
            })

        } else {
            cardFromID.getElementsByClassName("cardTitleText")[0].innerHTML = titleField.value
            cardFromID.getElementsByClassName("cardDescription")[0].innerHTML= descField.value
            modal.style.display = "none";

            $.ajax({
                type: 'PUT',
                url: `http://127.0.0.1:8000/api/tasks/${cardFromID.id.split("-")[2]}`,
                data: {
                    "board_id": cardFromID.parentElement.parentElement.id,
                    "title": cardFromID.querySelector(".cardTitleText").innerText,
                    "description": cardFromID.querySelector(".cardDescription").innerText,
                    "color": cardFromID.classList[1],
                }
            })
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

function appendWithID(board, card, id=null) {
    if(id != null){
        var elements = board.querySelector(".cardContainer").getElementsByClassName("card");
        card.id = "card-" + board.id + "-" + id;
        board.querySelector(".cardContainer").appendChild(card)
    } else {
        var elements = board.querySelector(".cardContainer").getElementsByClassName("card");
        card.id = "card-" + board.id + "-" + elements.length;
        board.querySelector(".cardContainer").appendChild(card)
    }
}

function addCard(boardPassed, title, description="", colorClass="", id=null, isLoad=false) {
    var board

    if(typeof boardPassed === "string"){
        board = document.getElementById(boardPassed)
    } else {
        board = boardPassed
    }

    var cardContainer = board.querySelector(".cardContainer")
    var node = document.getElementsByClassName("template")[0]
    var cardTemplate = node.cloneNode(true)

    cardTemplate.classList.remove("template")
    cardTemplate.getElementsByClassName("cardTitleText")[0].innerHTML = title

    if(description != ""){
        cardTemplate.getElementsByClassName("cardDescription")[0].innerHTML = description
    } else {
        cardTemplate.getElementsByClassName("cardDescription")[0].innerHTML = "Click me to edit the description!"
    }

    if(colorClass != ""){
        resetEnabled(cardTemplate) 
        cardTemplate.classList.add(colorClass)
    }

    if(!isLoad){
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8000/api/tasks',
            data: {
                "board_id": board.id,
                "title": cardTemplate.querySelector(".cardTitleText").innerText,
                "description": cardTemplate.querySelector(".cardDescription").innerText,
                "color": cardTemplate.classList[1],
            },
            success: (data) => {    
                appendWithID(board, cardTemplate, id=`${data.data.id}`)
            }
        })
    } else if(id){
        appendWithID(board, cardTemplate, id)
    } else {
        appendWithID(board, cardTemplate)
    }
    
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
            item.getElementsByClassName("taskTitleInput")[0].value = ""
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

    if (dragSrcEl !== cardFromEvent) {
        var toClasses = [... cardFromEvent.classList]
        var fromClasses = [... dragSrcEl.classList]

        dragSrcEl.innerHTML = cardFromEvent.innerHTML;
        cardFromEvent.innerHTML = event.dataTransfer.getData('text/html');

        cardFromEvent.classList.remove(toClasses[1])
        dragSrcEl.classList.remove(fromClasses[1])

        cardFromEvent.classList.add(fromClasses[1])
        dragSrcEl.classList.add(toClasses[1])

        $.ajax({
            type: 'PUT',
            url: `http://127.0.0.1:8000/api/tasks/${cardFromEvent.id.split("-")[2]}`,
            data: {
                "board_id": cardFromEvent.parentElement.parentElement.id,
                "title": cardFromEvent.querySelector(".cardTitleText").innerText,
                "description": cardFromEvent.querySelector(".cardDescription").innerText,
                "color": cardFromEvent.classList[1],
            }
        })

        $.ajax({
            type: 'PUT',
            url: `http://127.0.0.1:8000/api/tasks/${dragSrcEl.id.split("-")[2]}`,
            data: {
                "board_id": dragSrcEl.parentElement.parentElement.id,
                "title": dragSrcEl.querySelector(".cardTitleText").innerText,
                "description": dragSrcEl.querySelector(".cardDescription").innerText,
                "color": dragSrcEl.classList[1],
            }
        })
    }
    cardFromEvent.removeAttribute("style")
}

function handleDropCardContainer(event){
    event.preventDefault()
    event.stopPropagation();
    var boardName = event.target.parentNode.id
    components = dragSrcEl.id.split("-")
    components[1] = boardName

    dragSrcEl.id = `${components[0]}-${components[1]}-${components[2]}`

    event.target.append(dragSrcEl)

    $.ajax({
        type: 'PUT',
        url: `http://127.0.0.1:8000/api/tasks/${dragSrcEl.id.split("-")[2]}`, // card-ToDo-3 ["card",]
        data: {
            "board_id": dragSrcEl.parentElement.parentElement.id,
            "title": dragSrcEl.querySelector(".cardTitleText").innerText,
            "description": dragSrcEl.querySelector(".cardDescription").innerText,
            "color": dragSrcEl.classList[1],
        }
    })
}

function LoadCardData() {
    $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:8000/api/tasks',
        success: (data) => {
            data.data.forEach((dataNode) => {
                var board = document.querySelector("#" + dataNode.board_id)
                addCard(board, dataNode.title, dataNode.description, dataNode.color, dataNode.id, true)
            });
        }
    })
}

window.addEventListener('DOMContentLoaded', () => {
    LoadCardData()
});