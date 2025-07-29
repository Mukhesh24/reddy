    const chat = document.getElementById('chat');
    const input = document.getElementById('input');
    const typingIndicator = document.getElementById('typing');

    function appendMessage(text, sender) {
      const msg = document.createElement('div');
      msg.classList.add('message', sender);
      msg.textContent = text;
      chat.appendChild(msg);
      chat.scrollTop = chat.scrollHeight; // auto scroll
    }

    function botReply(message) {
      message = message.toLowerCase();

      if ((message.includes('phonepe') || message.includes('payment')) && message.includes('failed')) {
        return "If your PhonePe payment failed, please check your internet connection and try again. Also, verify your bank details in the app.";
      }
      if ((message.includes('phonepe') || message.includes('refund')) && message.includes('refund')) {
        return "Refunds on PhonePe usually take 3-5 business days. You can check the status in the 'Transactions' section.";
      }
      if ((message.includes('phonepe') || message.includes('cashback')) && message.includes('cashback')) {
        return "Cashback offers vary from time to time. Check the latest offers in the 'Offers' tab of the PhonePe app.";
      }
      if ((message.includes('phonepe') || message.includes('upi')) && message.includes('not working')) {
        return "If UPI is not working on PhonePe, try restarting the app, check your bank’s UPI status, or contact your bank.";
      }

      // General replies
      if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return 'Hello! How can I assist you with PhonePe today?';
      }
      if (message.includes('how are you')) {
        return "I'm here to help you with PhonePe issues.";
      }
      if (message.includes('thank')) {
        return "You're welcome! If you have any more questions, feel free to ask.";
      }
      if (message.includes('bye') || message.includes('goodbye')) {
        return "Goodbye! Have a great day.";
      }

      return "Sorry, I don't understand. Could you please rephrase your question about PhonePe?";
    }

    function sendMessage() {
      const text = input.value.trim();
      if (!text) return;
      appendMessage(text, 'user');
      input.value = '';

      typingIndicator.textContent = "Bot is typing...";

      setTimeout(() => {
        const reply = botReply(text);
        appendMessage(reply, 'bot');
        typingIndicator.textContent = "";
      }, 1000);
    }

    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });