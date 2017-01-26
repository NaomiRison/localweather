// second page 5day/3hour forcast


$(" #page2 .btn-success").on("click",function(){

	 var getCity=$("#cityagain").val();
	 getWeather(getCity);
});


function getWeather(city){


	$.getJSON("http://api.openweathermap.org/data/2.5/forecast",
	{
	//turned pieces in url city and appi into
	//objects.. then you could delete the whole query string
	//creating object
	q:city,  // its a variable so no pranthese
	appid:"84bee75ccc48d73cd18de3a8c2d85c8e",
	// "my appid    88f15123640c53d6d0a2f40b8bb07e0e",
	//appid account made in weathermapp,
	units: "imperial",
	// adding units: "imperial", converts kelvin to F degrees
    /*
        without units: "imperial", tempertaure is in kelvin
        inside function(data)
         var kTemp= data.main.temp
         changing from kevin to C and F
        fTemp=(kTemp)*(9/5)-259.67
        cTemp=kTemp-273

        then,
        $(#fTemp).html(fTemp);

    */
	
	},
		function(data){  // success function
	// do this stuff once we have data from url

	//setting f to zero decimal places
	console.log(data.wind.speed);
	
	$("#forecast").html(data.name);
	var fahrenheit=data.main.temp.toFixed(0);
	$("#temp").html(fahrenheit);
	//convert f to c degrees
       var cTemp=(data.main.temp-32)*5/9;
       var celsius=cTemp.toFixed(0);
       $("#temp2").html(celsius);

  	
	
	 
	 //humidity
	  $("#weatherMain").html(data.weather[0].main)
	   $("#weatherMain").html(data.weather[0].description)
	   //weather icon
		
	   $("#icon").attr("src","http://openweathermap.org/img/w/"+data.weather[0].icon+".png")
	   //  original link was from:  https://openweathermap.org/weather-conditions under
	   //   title,   "How to get icon URL"
	   // its data.weather[0].icon becuase first, or zero, element in weather array contains the icon

	   $("#weather2").show();



	});
}



// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=84bee75ccc48d73cd18de3a8c2d85c8e