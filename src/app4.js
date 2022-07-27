import './app4.css'
import $ from 'jquery'
const $circle = $('#app4 .circle')
$circle.on('mouseenter', () => {
    console.log('鼠标来了');
    $circle.addClass('active')
}).on('mouseleave', () => {
    console.log('鼠标走了');
    $circle.removeClass('active')
})