let names = [];

function buildNamesContainer(id, name){
    //arr.forEach(el => {
       $div = $("<div>").addClass(`user${id}`); 
       $div.text(name);
       $("container").append($div);
    //})
    
    
}

async function getName(){
  await $.get('/api/users')
    .then(data => {
        data.forEach(element => {
        buildNamesContainer(element.id, element.name);
    })
})
    .fail(error => console.error('Error:', error))  
    console.log(names);
}

$(document)

getName();

