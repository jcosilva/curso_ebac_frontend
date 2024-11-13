$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const NovaTarefa = $('#nova-tarefa').val();
        const NovoItem = $(`<li style="display: none">${NovaTarefa}</li>`);
        $(NovoItem).appendTo('ol');
        $(NovoItem).fadeIn(1000);
        $('#nova-tarefa').val('')
    })

    $('ol').on('click', 'li', function() {
        $(this).css('text-decoration', 'line-through');
    });
})