$(document).ready(function(){
    let sum =2;
    $('#paragraph').text(sum);
    $('#input-zone').change(function(){
        let sum = $('input:checked');
        $('#paragraph').text(sum.length);
    });
});

