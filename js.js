// JavaScript Document

const message = document.querySelector('.message-input')
const msgBody = document.querySelector('.message-body')

document.querySelector('.send-button').addEventListener('click', () => {
	
	const text = message.value;
	
	if(!text) {
		alert('You can\'t send empty message')
	}else{
		// create message element
		const MessageElement = document.createElement('div')
		MessageElement.textContent = text;
		
		msgBody.appendChild(MessageElement)
		
		message.value = ''
		
		msgBody.scrollTop = msgBody.scrollHeight
	}
})