const submit = document.querySelector('button')
const advice = document.querySelector('q')
const id = document.getElementById('id')



// function for get data 
const getData = async() =>{
    try{
      
       const response = await fetch(`https://api.adviceslip.com/advice`);
       const data = await response.json()
       return data
       
    }catch(err){
      console.error(err.message)
    }
  
  }

//   function for randomize advices 

function randomAdvice(){
    getData().then(res => {
        advice.innerHTML = res.slip.advice ;
        id.innerHTML = res.slip.id
    })

}
submit.addEventListener('click', randomAdvice)
document.onload = randomAdvice()
