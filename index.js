let React = require('react');
let ReactDOM = require('react-dom');
let Dialog = require('./src/dialog.js');

ReactDOM.render(<Dialog title="测试提示" msg="HELLO!!!" btnText="关闭" />, document.getElementById('content'));