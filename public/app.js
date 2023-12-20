

function showNames(id, name){
       $div = $("<div>").addClass(`user`).attr("id", `user${id}`); 
       $div.text(name);
       $div.on("click", function(){
            //alert(`Clicked user${id}`)
            getPosts(id);
        })
       $("container").append($div);
       
}

function showPosts(obj){
    $("h1").text(obj.name).css("margin-right", "46%")
    
    $div = $("<div>").addClass(`post`).attr("id", `post${obj.id}`);
    $txt = $("<p>").text(`${obj.blog}`).addClass("postText");
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
     $form = $("<form>").css("display", "block").attr("action", `/api/${id}/posts`).attr("method", "post");
     $textLabel = $("<label>").text("Blog")
     $textArea = $("<textarea>").attr("rows", "3").attr("name", "blog");
     $feelsLabel = $("<label>").text("Feeling:")
     $input = $("<input>").attr("name", "feeling");
     $button = $("<button>").text("Post!");
    //  $button.on("click", function(){
    //     //postBlog(id)
    //  })
     $form.append($textLabel);
     $form.append($textArea);
     $form.append($feelsLabel);
     $form.append($input);
     $form.append($button);
     $("container").append($form);
 })
     .fail(error => console.error('Error:', error))   
 }


//equivalent to .ready
$(function(){
    getNames();
})



