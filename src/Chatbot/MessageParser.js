class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    message = message.toLowerCase();
    console.log(message);

    if (
      message.includes("joke") ||
      message.includes("jokes") ||
      message.includes("funny")
    ) {
      return this.actionProvider.handleJoke();
    } else if (message.includes("thanks") || message.includes("thank you")) {
      return this.actionProvider.handleThanks();
    } else {
      return this.actionProvider.handleDataRedering(message);
    }
  }
}

export default MessageParser;
