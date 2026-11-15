// JavaScript Document

const message = document.querySelector('.message-input')
const msgBody = document.querySelector('.message-body')
const sendButton = document.querySelector('.send-button')

if (message && msgBody && sendButton) {

	let count = Number(localStorage.getItem('chatCount'))

	function addMessageToPage(text) {
		const messageElement = document.createElement('div')
		messageElement.textContent = text
		msgBody.appendChild(messageElement)
		msgBody.scrollTop = msgBody.scrollHeight
	}

	for (let i = 0; i < count; i++) {
		addMessageToPage(localStorage.getItem('chatMsg' + i))
	}

	function sendMessage() {
		const text = message.value.trim()

		if (!text) {
			alert('You can\'t send empty message')
		} else {
			addMessageToPage(text)

			localStorage.setItem('chatMsg' + count, text)
			count++
			localStorage.setItem('chatCount', count)

			message.value = ''
			message.focus()
		}
	}

	sendButton.addEventListener('click', sendMessage)

	message.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			sendMessage()
		}
	})

}
