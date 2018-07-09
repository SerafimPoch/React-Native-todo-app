import React, { Fragment, Component } from "react";
import { Button } from "react-native";
import { Container } from "./style";
import { connect } from "react-redux";
import { mapDispatchToProps } from "./addContainer";
import { AddTextInput } from "./style";

class Add extends Component {
  state = {
    text: ""
  };

  handleClick = () => {
    this.props.add(this.state.text);
  };

  render() {
    return (
      <Fragment>
        <Container>
          <AddTextInput
            placeholder="Add your task"
            onChangeText={text => this.setState({ text })}
          />
          <Button title="ADD" onPress={this.handleClick} />
        </Container>
      </Fragment>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Add);
