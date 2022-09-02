//alert("Am here");
 



//alert("Joy is comming");
$("h3").css("color", "red");
	

$("button").click( function(){
var roundNumber= "image/" + "dice" + Math.floor(Math.random() * 6 + 1) + ".png"; 
var roundNumber2= "image/" + "dice" + Math.floor(Math.random() * 6 + 1) + ".png";  

$("img.first").attr("src", roundNumber);	
$("img.second").attr("src", roundNumber2);

if( roundNumber > roundNumber2){
	$("h2").html(" PLAYER 1 WINS!");
} else if( roundNumber2 > roundNumber){
	$("h2").html(" PLAYER 2 WINS!");
} else{
	$("h2").html(" Draw !");
}


location.href = "dicegame.html";
	
});


	
