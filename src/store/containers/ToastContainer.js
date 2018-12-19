import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toast from '../../Ui/Toast';
import { toastmsg } from '../store/modules/card';


class ToastContainer extends Component {
  
  openToast = tstmsg => {
    const { toastmsg } = this.props;
    console.log('what');
    toastmsg (tstmsg);

    //setTimeout(()=> this.setState({toast: false}), 1000);
  }
  render() {
    return <Toast toast={this.openToast}
                  msg={tstmsg}
           />
  }
}

const mapStateToProps = state => ({
  tstmsg: state.card.tstmsg,
});

const mapDispatchToProps = dispatch => ({
  toastmsg: tstmsg => dispatch(toastmsg(tstmsg)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToastContainer);