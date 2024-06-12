// Challenge: 
// Rewrite the GET API call from the previous challenge using async-await


// Challenge: 
// fetch('https://jsonplaceholder.typicode.com/users/3')
//   .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);  
//       }
      
//       return response.json()
//   })
//   .then(person => console.log(`${person.name} works for ${person.company.name}`))
//   .catch(err => console.error(err))



//solution
async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/3');
    if (!response.ok) {
      throw new Error(response.status);
    }
    const person = await response.json();
    console.log(person);    
  }
    catch (error) {
      console.log(error);
  }

}

getUser()


//output
{id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', address: {street: 'Douglas Extension', suite: 'Suite 847', city: 'McKenziehaven', zipcode: '59590-4157', geo: {lat: '-68.6102', lng: '-47.0653'}}, phone: '1-463-123-4447', website: 'ramiro.info', company: {name: 'Romaguera-Jacobson', catchPhrase: 'Face to face bifurcated interface', bs: 'e-enable strategic applications'}}
Challenge: async-await
