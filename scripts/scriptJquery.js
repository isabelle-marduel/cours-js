$("#services a").click(function(e) {
    console.log(e); // e = event, NE PAS OUBLIER DE LE METTRE EN PARAMETRE DE LA FONCTION ANONYME
    e.preventDefault();
    if ($(this).html() == "Read More »") { // document.querySelectorAll() = $()
        // jQuery.data(
        //     $(this).parent().parent().children("p"),
        //     "text",
        //     $(this).parent().parent().children("p").text()
        // )
        $(this).parent().parent().children("p").append(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in sem porta, gravida felis efficitur, accumsan lacus. Sed lorem ipsum, pellentesque vitae elementum sed, viverra id metus. Donec sagittis tellus felis, sed egestas lorem placerat eu. Sed porttitor pretium diam, eget tristique risus malesuada vel. Pellentesque sagittis eleifend quam, ac sagittis nisi condimentum nec.");
        $(this).html("Read Less &raquo;");
    } else {
        $(this).html("Read More &raquo;");
    }
});

/*
age: function() {
    let date = new Date;
    let birthday = [date.getDate(), date.getMonth(), date.getFullYear()];
    console.log(birthday);
}
console.log(date);
*/