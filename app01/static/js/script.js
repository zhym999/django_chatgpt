const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');
const chatBody = document.querySelector('.chat-body');

// Generate a response using OpenAI's GPT-3 API
async function generateResponse(message) {
	// Replace with your own API key and endpoint
	const apiKey = 'your_api_key_here';
	const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

	// Compose the request data
	const requestData = {
		prompt: `Q: ${message}\nA:`,
		max_tokens: 50,
		temperature: 0.5,
		n: 1,
		stream: false,
		logprobs: null,
		stop: ['\n']
	};

	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${apiKey}`
		},
		body: JSON.stringify(requestData)
	};

	try {
		// Send the request to the API endpoint
		const response = await fetch(apiUrl, requestOptions);
		const responseData = await response.json();

		// Extract the generated response text from the API response
		const generatedText = responseData.choices[0].text.trim();

		return generatedText;
	} catch (error) {
		console.error(error);
		return 'I am sorry, but I was not able to generate a response.';
	}
}

// Add a new message to the chat
function addMessage(text, isUser) {
	// const avatar = isUser ? 'user-avatar.png' : '../static/img/user.png';
	const alignment = isUser ? 'chat-reply' : '';

	const messageElement = document.createElement('div');
	messageElement.classList.add('chat-message', alignment);
	messageElement.innerHTML = `
		<div class="chat-avatar">
			<img src="../static/img/user.png">
		</div>
		<div class="chat-text">
			<p>${text}</p>
			<span class="chat-time">${new Date().toLocaleTimeString()}</span>
		</div>
	`;

	chatBody.appendChild(messageElement);

	scrollToBottom();
}

// Scroll to the bottom of the chat window
function scrollToBottom() {
	chatBody.scrollTop = chatBody.scrollHeight;
}

// Handle form submission
chatForm.addEventListener('submit', async (event) => {
	event.preventDefault();

	// Get the user's input
	const userInput = messageInput.value.trim();

	if (!userInput) {
		return;
	}

	// Add the user's message to the chat
	addMessage(userInput, true);

	// Clear the input field
	messageInput.value = '';

	// Generate a response using OpenAI's GPT-3 API
	const response = await generateResponse(userInput);

	// Add the response to the chat
	addMessage(response, false);
});

// Focus on the input field when the page loads
messageInput.focus();
