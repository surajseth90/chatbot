class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    message = message.toLowerCase();
    if (message.trim().length > 0) {
      return this.actionProvider.handleDataRedering(message);
    }
  }
}

export default MessageParser;
