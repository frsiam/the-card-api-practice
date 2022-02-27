function error(errorMessage){
    Swal.fire({
        icon:'error',
        title: 'Error',
        text: errorMessage,
    })
}
function success(){
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Your work has been done',
        showConfirmButton: false,
        timer: 1500
      })
}

const searchCards = () => {
    const searchinput = document.getElementById('search-card')
    const searchValue = searchinput.value
    if(isNaN(searchValue) || searchValue == "" ){
        error('Input must be a positive number')
        searchinput.value = ''
    }
    else if(searchValue <= 0 || searchValue > 52){
        error('Must be greater than zero and less than fifty two');
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
const cardsDisplay = inputCards => {
    console.log(inputCards)
}
