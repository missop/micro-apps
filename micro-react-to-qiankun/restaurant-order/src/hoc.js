import React, { Component } from 'react';

class Ap extends Component {
  static getName() {
    return '';
  }
  render() {
    return <div>123</div>;
  }
}

const hoc = Comp => {
  // console.log(Object.keys(Comp))
  return () => (
    <div>
      <Comp ran={Math.random()} />
    </div>
  );
};

const newAp = hoc(Ap);
console.log("newAp.getName",Ap.getName,newAp.getName)

export default newAp;
