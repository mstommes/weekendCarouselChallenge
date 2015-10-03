$(document).ready(function(){
    $.ajax({
        url: "/data",
        success: function (data) {
            console.log(data);
            $.each(data, function (index,people) {
                console.log (index);
                var newDiv = $(".classcontainer").last();
                newDiv.append("<p class='well classmatecard'><strong>Classmate Name : </strong>" + people.name + "</br>" + "<strong>Summary Statement:</strong> " + people.desc + "</br>" + "<strong>Kudos:</strong>" + people.thanks + "</p>");
            });
            $(".classmatecard").first().addClass("active");
        }
    });


    $("#buttons").append("<button id='previous' class='btn btn-group-lg'>previous</button>");
    $("#buttons").append("<button id='next' class='btn btn-group-lg'>next</button>");

     $("#buttons").on('click', '#next', function () {
        var currentClass = $(".active");
         var nextClass = currentClass.next();
         if (nextClass.length ===0){
             nextClass = $('.classmatecard').first();
         }
         currentClass.removeClass("active");
         nextClass.addClass("active");
    });


    $("#buttons").on('click', '#previous', function () {
        var currentClass = $(".active");
        var previousClass = currentClass.prev();
        if (previousClass.length ===0){
            previousClass = $('.classmatecard').last();
        }
        currentClass.removeClass("active");
        previousClass.addClass("active");
    });



});


