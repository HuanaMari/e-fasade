$(document).ready(function () {
    function main() {
        var calc = new Kalkulator();
        calc.square();
        calc.createInput();
        calc.displayWeatherDetails("skopje");
        calc.displayInput();
        
        // calc.display10Cities();
        calc.footer();
    }
    main();
});