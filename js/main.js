//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getDate)

// `https://api.nasa.gov/planetary/apod?api_key=r2o1xc86wWU3uZKCphX8NWzAB2xNhJB6xsD6cbEm`

function getDate(){
    let dateVal = document.querySelector('input').value
    console.log(dateVal)
    let url =   `https://api.nasa.gov/planetary/apod?api_key=r2o1xc86wWU3uZKCphX8NWzAB2xNhJB6xsD6cbEm&date=${dateVal}`
    fetch(url)     
    .then(res => res.json()) 
// parse response as JSON     
    .then(data => {       
    console.log(data)     
    document.querySelector('h2').innerText = data.title
    document.querySelector('img').src = data.url
    document.querySelector('h3').innerText = data.explanation
    })     
    .catch(err => {         
    console.log(`error ${err}`)     
    }); 
}