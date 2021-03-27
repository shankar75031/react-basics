import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }
  render() {
    if (this.state.errorInfo) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Error occured</h1>
          <h1>{this.state.errorMessage} </h1>
        </div>
      );
    }

    return this.props.children;
  }
}
