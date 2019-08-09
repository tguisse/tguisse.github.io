function clicked() {

/* set variables */

	var user = document.getElementById('username'); 
	var pass = document.getElementById('password');
	
	var yourname = "admin"; /* correct username */
	var yourpass = "pass";  /* correct username */
	
	/* if statement that validate users entry*/
	
	if(user.value == "admin" && pass.value == "pass") {
		
			window.alert("Welcome, Please close this tab to access my Resume");
			window.open("https://github.com/tguisse/tguisse.github.io/blob/master/Public%20Resume_Tidiani%20Guisse.pdf");

		}  
  /* This ensure that the user enter both the password and username  */    

		else if (user.value == '' || pass.value == ''){
			window.alert("All field required");
		}
/* message displying if the wrong username or Password is entered */ 
		else {
		window.alert("incorrect credentials..Please Try again");


} 

} 