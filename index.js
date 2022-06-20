// Add your code here
function submitData(name, email) {
    return fetch('http://localhost:3000/users',{
         method: 'POST',
         headers: {
            'content-Type' : 'application/json',
            Accept: 'application/json'
         },
         body: JSON.stringify({name, email})
      })
      
      .then(response => response.json())
      .then(dataGot => document.body.innerHTML = dataGot['id'])
      
      .catch((error) => {
          document.body.innerHTML = error.message
let message='Unauthorized Access'
          
      })
      
    }
