$(document).ready(function(){
    $('#newTaskButton').click(function(){
        $('#taskForm').slideDown();
    });
    
    $('#cancelButton').click(function(){
        $('#taskForm').slideUp();
    });

    $('#taskForm').on('submit', function(e){
        e.preventDefault();
        const newTask = $('#tasks').val().trim();
        if (newTask) {
            const newItem = $('<li></li>').text(newTask);
            const deleteButton = $('<button><img src="https://static-00.iconduck.com/assets.00/trash-icon-462x512-njvey5nf.png" height="15px"></button>'); 
            const deleteDiv = $('<div id="deleteButton"></div>').append(deleteButton); 
            newItem.append(deleteDiv); // Adiciona o botão de exclusão ao novo item
            newItem.appendTo('ul'); // Adiciona o novo item à lista
            $('#tasks').val(''); // Limpa o campo de entrada
        }
    });

    $('ul').on('click', '#deleteButton', function(){ 
        $(this).closest('li').remove();
    });

    $('ul').on('click', 'li', function(){
        $(this).toggleClass('check' );
    });
});
