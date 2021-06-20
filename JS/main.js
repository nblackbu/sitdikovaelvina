$(document).ready(function () {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementByid('mainCanvas'));
    
    var с = Shape.Circle(200,200,50);
    c.fillColor = 'green';

    paper.view.draw();
    console.log ('main.js loaded');
});

