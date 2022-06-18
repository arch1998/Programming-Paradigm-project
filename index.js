var input = document.getElementById("my-message");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn-submit").click();
  }
}); 
const messageContainer = document.querySelector('.container');
const appender = (message, position) =>{
	const messageElement = document.createElement('div');
	messageElement.innerText = message;
	messageElement.classList.add('message');
	messageElement.classList.add(position);
	messageContainer.appendChild(messageElement);
	scrollthewindow();
}

function send(){
	var message = document.getElementById('my-message');
	if (message.value != ''){
	appender('You: \n' + message.value, 'right');
	eel.response(message.value)(function(ret){
		appender(ret, 'left');
	});
	}
	message.value = '';
}
function scrollthewindow() {
  var elem = document.getElementById('bottom');
  elem.scrollTop = elem.scrollHeight;
};
