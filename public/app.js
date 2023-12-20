let names = [];

async function getName(){
  await $.get('/api/users')
    .then(data => data.forEach(element => {
        names.push(element.name);
    }))
    .fail(error => console.error('Error:', error))  
    console.log(names);
}

getName();

