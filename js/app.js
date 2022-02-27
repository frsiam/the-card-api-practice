function error(errorMessage){
    Swal.fire({
        icon:'error',
        title: 'Error',
        text: errorMessage,
    })
}
function success(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been done',
        showConfirmButton: false,
        timer: 1500
      })
}
// catch the id of div where we show the card details 
const mainDiv = document.getElementById('show-card')
// check the input search and handle the error and get the fetch of url 
const searchCards = () => {
    const searchinput = document.getElementById('search-card')
    const searchValue = parseInt(searchinput.value)

    if(isNaN(searchValue) || searchValue == "" ){
        mainDiv.textContent = ''
        error('Input must be a positive number')
        searchinput.value = ''
    }
    else if(searchValue <= 0 || searchValue > 52){
        mainDiv.textContent = ''
        error('Must be greater than 0 and less than 52');
        searchinput.value = ''
    }
    else{
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${searchValue}`)
            .then(res => res.json())
            .then(data => cardsDisplay(data))
        success()
        searchinput.value = '' 
    }
}
// show the card into ui 
const cardsDisplay = inputCards => {
    console.log(inputCards)
    mainDiv.textContent = ''
    for(const card of inputCards.cards){
        console.log(card)
        const div = document.createElement('div')
        div.className = 'col'
        div.innerHTML = `
            <div class="card h-100 border-danger">
                <img src="${card.images.png}" class="card-img-top p-2 img-fluid bg-primary" alt="...">
                <div class="card-body bg-dark">
                <h5 class="card-title text-white">${card.suit}</h5>
                <ul class='border border-2 border-info'>
                    <li class='text-warning'><span class='text-primary fw-bold'>Code : </span>${card.code}</li>
                    <li class='text-warning'><span class='text-primary fw-bold'>Value : </span>${card.value}</li>
                </ul>
            </div>
        `
        mainDiv.appendChild(div)
    }
     
}
