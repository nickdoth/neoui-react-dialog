let React = require('react');
let ReactDOM = require('react-dom');
let Dialog = require('./src/dialog.js');

var opts = {
    title:"测试提示",
    msg:"HELLO!!!",
    btnText:"关闭"
}

// title="测试提示" msg="HELLO!!!" btnText="关闭"
ReactDOM.render(<Dialog  {...opts} />, document.getElementById('content'));