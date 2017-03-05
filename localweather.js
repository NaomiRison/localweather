
$("#weather-btn").on("click",function(){

	 var getCity=$("#city").val();
	 getWeather(getCity);
});


function getWeather(city){


	$.getJSON("http://api.openweathermap.org/data/2.5/weather",
	{
	//turned pieces in url city and api into
	//objects.. then you could delete the whole query string
	//creating object
	q:city,  // its a variable so no pranthese
	appid:"88f15123640c53d6d0a2f40b8bb07e0e",
	// "my appid    88f15123640c53d6d0a2f40b8bb07e0e",
	//appid account made in weathermapp professor:
	//84bee75ccc48d73cd18de3a8c2d85c8e,
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
	console.log(data);

	//cityName, setting cityname to data.name with html();
	$("#cityName").html(data.name);
	//temperature
	//setting f to zero decimal places
	var fahrenheit=data.main.temp.toFixed(0);
	$("#temp").html(fahrenheit);
	//convert f to c degrees
       var cTemp=(data.main.temp-32)*5/9;
       var celsius=cTemp.toFixed(0);
       $("#temp2").html(celsius);

  	
	
	 
	 //humidity
	  
	  console.log(data.main.humidity);
	  $("#humidity").html(data.main.humidity);
	  //weather main
	  console.log(data.weather[0].main);
	   console.log(data.weather[0].description);
	  
	   $("#weatherMain").html(data.weather[0].main)
	   $("#weatherMain").html(data.weather[0].description)
	   //weather icon


	   /* switch(data.weather[0].description){
	    		case ' moderate rain':
	   			$("body").css("background-image","url(http://headsup.boyslife.org/files/2012/12/rain.jpg)");
	   */ 
	   
	   console.log("http://openweathermap.org/img/w/"+data.weather[0].icon+".png");
	   // from https://nycda.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=82ef00e8-c07c-411c-9bd4-055ab1a1b7af
	   //each icon has 3 letter code.. to replace 3 letter code in url with object
	   // replace it with data.weather[0].icon
	   
	   $("#icon").attr("src","http://openweathermap.org/img/w/"+data.weather[0].icon+".png")
	   //  original link was from:  https://openweathermap.org/weather-conditions under
	   //   title,   "How to get icon URL"
	   // its data.weather[0].icon becuase first, or zero, element in weather array contains the icon

	   $("#weather").show();

	});
}



