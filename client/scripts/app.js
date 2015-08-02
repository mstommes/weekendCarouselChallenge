$(document).ready(function(){
    var personCounter = 0;

    $("#buttons").append("<button id='back' class='btn btn-group-lg'>Back </button>");
    $("#buttons").append("<button id='forward' class='btn btn-group-lg'>Forward</button>");

    function addNextClassmate (index, people) {
        for (var i = 0; i < people.length; i++) {
            if (i == personCounter) {
                initialCall();
            }
        }
    }

     var initialCall = $("#buttons").on('click', '#forward', function () {
            $.ajax({
                url: "/data",
                success: function (data) {
                    console.log(data);
                    $.each(data, function (index, people) {
                        var newDiv = $("#classmatecard").last();
                        newDiv.append("<p class='well'>Classmate Name : " + people.name + "</p>");
                        newDiv.append("<p class='well'>Summary Statement:  " + people.desc + "</p>");
                        newDiv.append("<p class='well'>Shoutout:  " + people.thanks + "</p>");


                    });
                },
                complete: function(data){
                    addNextClassmate(index, people);
                }
            });
     });

});






