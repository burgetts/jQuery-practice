
$('form').on('submit', function(e) {
    e.preventDefault()
    appendMovie()
    $("#title").val('') 
    $("#rating").val('') 
})

function appendMovie() {
    movieData = {
        title: $("#title").val(),
        rating: $("#rating").val()
    }
    $(newMovieHTML(movieData)).appendTo('table')
    $('.remove').on('click', function(e){
        console.log($(e.target))
        $(e.target).parent().parent().remove()
    })
}

function newMovieHTML(movieData){
    return `
    <tr> 
        <td> ${movieData.title} </td>
        <td> ${movieData.rating} </td>
        <td> <button class = "remove" type = "button"> Remove </button> </td>
     </tr>
           ` ;
}

