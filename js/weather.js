(function() {
"use strict";

        // Set our map options
        var mapOptions = {

            // Set the zoom level
            zoom: 9,

            // This sets the center of the map at our location
            center: {
                lat :  29.430581, 
                lng : -98.488705
            }
        };    
        // Render the map
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        // Adding trafficLayer
        var trafficLayer = new google.maps.TrafficLayer();
            trafficLayer.setMap(map);

        // Place a draggable marker on the map
        var markerTeach = '/img/weather/waldo.png';
        var marker = new google.maps.Marker({
            position: {
                lat :  29.430581, 
                lng : -98.488705
            },
            map: map,
            draggable:true,
            animation: google.maps.Animation.DROP,
            icon: markerTeach,
            title:"Umm? Like yeah totally"
        });

        // Assign variable
        var $info = function(reqLat, reqLon){
            var $city = $("#city")
            var $day1 = $("#day-one");
            var $day2 = $("#day-two");
            var $day3 = $("#day-three");
            var $jqxhr = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {

                APPID: "8c55b8902e1bdaf8667dec64b892fc7a",

                lat:    reqLat,
                lon:    reqLon,

                units: "imperial"
            });

        
            $jqxhr.done(function(data) {
                console.log(data)

                // city ------------------------------
                var html = "<p>" + data.city.name + "</p>";
                $city.html(html)
        //fix html append
                // day1 ------------------------------
                var html = "<div>"+
                                "<h3>" + "Today" + "</3>" +
                                "<p>" + '<img src="http://openweathermap.org/img/w/'+ data.list[0].weather[0].icon + '.png">' + "</p>" +
                                "<p>" + "Temperature:" + " "  + Math.round(data.list[0].temp.min) + " / " + Math.round(data.list[0].temp.max) + " " + "&#8457;" + "</p>" +
                                "<p>" + "Wind:" + " "  + Math.round(data.list[0].speed) + " " + "mph" + "</p>" +
                                "<p>" + "Humiditiy:" + " "  + data.list[0].humidity + "</p>" +
                            "</div>";
                $day1.html(" ")
                $day1.append(html);

                // day2 ------------------------------
                var $html = "<div>"+
                                "<h3>" + "Tomorrow" + "</3>" +
                                "<p>" + '<img src="http://openweathermap.org/img/w/'+ data.list[1].weather[0].icon + '.png">' + "</p>" +
                                "<p>" + "Temperature:" + " "  + Math.round(data.list[1].temp.min) + " / " + Math.round(data.list[1].temp.max) + " " + "&#8457;" + "</p>" +
                                "<p>" + "Wind:" + " "  + Math.round(data.list[1].speed) + " " + "mph" + "</p>" +
                                "<p>" + "Humiditiy:" + " "  + data.list[1].humidity + "</p>" +
                            "</div>";
                $day2.html(" ")
                $day2.append($html);

                // day3 ------------------------------
                var $html = "<div>"+
                                "<h3>" + "Day After" + "</3>" +
                                "<p>" + '<img src="http://openweathermap.org/img/w/'+ data.list[2].weather[0].icon + '.png">' + "</p>" +
                                "<p>" + "Temperature:" + " "  + Math.round(data.list[2].temp.min) + " / " + Math.round(data.list[2].temp.max) + " " + "&#8457;" + "</p>" +
                                "<p>" + "Wind:" + " "  + Math.round(data.list[2].speed) + " " + "mph" + "</p>" +
                                "<p>" + "Humiditiy:" + " "  + data.list[2].humidity + "</p>" +
                            "</div>";
                $day3.html(" ")
                $day3.append($html);
           
            }); //.done end
        }; 

        // listener for dragend and new weather update
        marker.addListener("dragend", function(){ 
            var position = marker.getPosition();
            var lat = position.lat();
            var lng = position.lng();
        $info(lat,lng);
        });

        // search box that will drop new marker + update weather
        function initAutocomplete() {

            var input = document.getElementById('pac-input');
            var searchBox = new google.maps.places.SearchBox(input);
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

            searchBox.addListener('places_changed', function() {
              var places = searchBox.getPlaces();

              var position = places[0].geometry.location;

              map.setCenter(position);
              marker.setPosition(position);
              var lat = position.lat();
              var lng = position.lng();
              $info(lat,lng);

            });
        } // initAutocomplete End

        // call initAuto
        initAutocomplete();

        // call info
        $info(29.430581, -98.488705);


        // konami code / hidden div
        $(document).ready(function(){

            var keys = [];

            var konami = '38,38,40,40,37,39,37,39,66,65';
         
           $(document).keydown(function(e) {
               
                keys.push( e.keyCode );
                    
                    if ( keys.toString().indexOf( konami ) >= 0 ){

                        // alert("YOU WILL NOW LEVEL UP !")
                        $("#secret_video").show();
                        $('#video')[0].play();
                        var timeoutId = setTimeout(function () {
                            $("#secret_video").css("display" , "none");
                        }, 26000);

                        keys = [];
                    }    
            });  
        }); 


        //___Mouse enter for audio clip on canvas
        var audio = $("#mySoundClip")[0];
        $("#map-canvas").mouseenter(function() {
          audio.play();
        });


})();