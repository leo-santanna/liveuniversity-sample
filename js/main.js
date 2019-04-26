$('#menu-cursos').click(() => {
    $('#detalhamento-curso').hide();
    $('#checklist').hide();
    $('#listagem-cursos').show();
})

$('.btn-abrir-curso').click(() => {
    $('#listagem-cursos').hide();
    $('#detalhamento-curso').show();
})

$('.btn-toggle-checklist').click(() => {
    $('#checklist').slideToggle();
})