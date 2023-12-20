

function showNames(id, name){
       $div = $("<div>").addClass(`user`).attr("id", `user${id}`); 
       $div.text(name);
       $div.on("click", function(){
            alert(`Clicked user${id}`)
            getPosts(id);
        })
       $("container").append($div);
       
}

function showPosts(obj){
    $("h1").text(obj.name)
    
    $div = $("<div>").addClass(`post`).attr("id", `post${obj.id}`);
    $txt = $("<p>").text(`${obj.blog}`);
    $feels = $("<p>").text(`feeling : ${obj.feeling}`)
    $div.append($txt);
    $div.append($feels);
    $("container").append($div)
}

function getNames(){
   $.get('/api/users')
    .then(data => {
        data.forEach(element => {
        showNames(element.id, element.name);
    })
})
    .fail(error => console.error('Error:', error))   
}
  
function getPosts(id){
    $.get(`/api/${id}/posts`)
     .then(data => {
        $("container").empty();
         data.forEach(element => {
         showPosts(element);
     })
 })
     .fail(error => console.error('Error:', error))   
 }
//equivalent to .ready
$(function(){
    getNames();
})



