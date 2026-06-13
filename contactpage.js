function validateAndSubmit() {
  // Get the message text area value
  const message = document.getElementById('message').value;

  // Regular expression to check for special characters
  // This allows only letters, numbers, spaces, and basic punctuation (. , ! ?)
  const specialCharRegex = /[^a-zA-Z0-9\s.,!?]/;

  // Checks if message has any special characters
  if (specialCharRegex.test(message)) {
    alert(
      'Error: Message cannot contain special characters. Only letters, numbers, spaces, and basic punctuation (. , ! ?) are allowed.'
    );
    return false;
  }

  // Whenver the validation passes, it redirects to success page
  window.location.href = 'successpage.html';
  return false;
}
