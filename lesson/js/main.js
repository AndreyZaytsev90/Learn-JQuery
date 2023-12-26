/* селекторы
$('.logo') - привязка по классу
$('#recive') - привязка по идентификатору
$('a') - по тегу
*/

/* еще 3 вида селектора*/
/*
$('nav menu') - вложенный селектор
$('nav menu li')
*/
/*
$('.icons > div') - дочерний селектор*/
/*
$('.icons img + h4') - выбор соседнего элемента после img
*/
/*<!--__________________________vis-timeline__________________________---->*/
    // DOM element where the Timeline will be attached
    var container = $('#visualization')[0];

    // Create a DataSet (allows two way data-binding)
    var items = new vis.DataSet([
    {id: 1, content: "item 1", start: '2023-12-20'},
    {id: 2, content: 'item 2', start: '2023-12-14'},
    {id: 3, content: 'item 3', start: '2023-12-18'},
    {id: 4, content: 'item 4', start: '2023-12-16', end: '2023-12-19'},
    {id: 5, content: 'item 5', start: '2023-12-25'},
    {id: 6, content: 'item 6', start: '2023-12-27', type: 'point'}
    ]);

    // Configuration for the Timeline
    var options = {};

    // Create a Timeline
    var timeline = new vis.Timeline(container, items, options);
/*
<!--__________________________vis-timeline__________________________---->*/
