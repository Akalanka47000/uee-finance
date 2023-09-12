import React from 'react';
import { Button, Text, View } from 'react-native';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { error, hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <View>
          <Text>Something happened!</Text>
          <Text>{this.state.error.toString()}</Text>
          <Button onPress={this.resetError} title={'Try again'} />
        </View>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
