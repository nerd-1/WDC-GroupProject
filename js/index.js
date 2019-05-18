document.addEventListener('DOMContentLoaded', () => {
    $('#sandbox-container input').datepicker({
    });
    $(function() {
        $('#test').datepicker();
    });

    $(function () {
        $('#datetimepicker3').datetimepicker({
            format: 'LT'
        });
    });
    $('#one').click(function(){
        $('#people').val('1');
    });
    $('#two').click(function(){
        $('#people').val('2');
    });
    $('#three').click(function(){
        $('#people').val('3');
    });
    $('#four').click(function(){
        $('#people').val('4');
    });
    $('#five').click(function(){
        $('#people').val('5');
    });
    $('#six').click(function(){
        $('#people').val('6');
    });
    $('#seven').click(function(){
        $('#people').val('7');
    });
    $('#eight').click(function(){
        $('#people').val('8');
    });

    $(function () {
        $('#datetimepicker4').datetimepicker({
            format: 'L'
        });
    });
});
