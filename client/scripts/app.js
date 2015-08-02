$(document).ready(function(){
    var personCounter = 0;

    $("#buttons").append("<button id='load' class='btn btn-group-lg'>Load Carousel</button>");
    $("#buttons").append("<button id='up' class='btn btn-group-lg'>Click To Slide Carousel Up</button>");
    $("#buttons").append("<button id='down' class='btn btn-group-lg'>Click To Slide Carousel Down</button>");

    var initialCall = $("#buttons").on('click', '#load', function () {
        $.ajax({
            url: "/data",
            success: function (data) {
                console.log(data);
                $.each(data, function (index, people) {
                    var newDiv = $("#classmatecard").last();
                    newDiv.append("<p class='well'><strong>Classmate Name : </strong>" + people.name + "</br>" + "<strong>Summary Statement:</strong> " + people.desc + "</br>" + "<strong>Kudos:</strong>" + people.thanks + "</p>");

                });
            }
        });
    });

    var setSlide = true;

    $("#buttons").on('click', '#up', function(){
      if(setSlide) {
          $("#classmatecard").slideUp(3500);
          setSlide = false;
      }else {
          $("#buttons").on('click', '#down', function(){
              $("#classmatecard").slideDown(3500);
          setSlide = true;
      });
      }
    });

});


