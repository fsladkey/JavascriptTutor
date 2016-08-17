import React from 'react';
import ReactDOM from 'react-dom';
import CodeMirror from 'codemirror';
import CodeFileStore from '../../stores/file_store';
import FileApiUtil from '../../util/file_api_util';

export default class FileDetail extends React.Component {

  constructor(props) {
    super(props);
    const file = CodeFileStore.find(this.props.params.id);
    this.state = { file: file, logs: [] };
    this.clear = this.clear.bind(this);
    this.run = this.run.bind(this);
    this.update = this.update.bind(this);
    this.setIframe = this.setIframe.bind(this);
  }

  componentDidMount() {
    let id = this.props.params.id,
        file = CodeFileStore.find(id);

    this.fileToken = CodeFileStore.addListener(this.setStateFromStore.bind(this));

    if (file) {
      this.setStateFromStore(id);
    } else {
      FileApiUtil.fetch(id);
    }

  }

  componentWillUnmount() {
    this.fileToken.remove();
  }

  componentWillReceiveProps(newProps) {
    let id = newProps.params.id;
    this.setStateFromStore(id);
  }

  setStateFromStore(id) {
    let file = CodeFileStore.find(id || this.props.params.id);
    this.setState({ file: file });
    this.setUpCodeMirror();
  }

  setIframe(iframe) {
    var component = this;
    if (iframe) {
      this.iframe = iframe;

      iframe.contentWindow.console.log = this.log.bind(this);
      iframe.contentWindow.onerror = function(message, url, lineNumber) {
        component.log(message);
      };

      iframe.contentWindow.run = function (content) {
        console.log = component.log.bind(component);
        onerror = function(message, url, lineNumber) {
          component.log(message);
        };

        try {
          eval(content);
        } catch (e) {
          component.log(e.name, e.message);
        }
      };
    }
  }

  log() {
    var args = [].slice.call(arguments);
    var newLogs = this.state.logs;
    newLogs.push(args);
    this.setState({ logs: newLogs });
  }

  clear() {
    this.setState({logs: []});
  }

  handleChange(e) {
    var value = e.getValue();
    this.state.file.content = value;
    this.setState({ file: this.state.file });
  }

  render() {
    var file = this.state.file;
    if (!file) { return <div></div>; }
    return(
      <div>
        <h3>
          {file.title}
        </h3>

        <div className="flex-row code-container">
          <div ref={(node) => this.codeNode = node}/>
          <div className="file-detail-log">
            {this.logs()}
          </div>
        </div>

        <button onClick={this.run}>Run</button>
        <button onClick={this.update}>Save</button>
        <button onClick={this.clear}>Clear</button>
        <iframe ref={this.setIframe} className="hidden"/>
      </div>
    );
  }

  logs () {
    return this.state.logs.map(function (log, idx) {
      return <p key={idx}>{log.join(" ")}</p>;
    });
  }

  run() {
    this.iframe.contentWindow.run(this.state.file.content);
  }

  update() {
    FileApiUtil.update(this.state.file);
  }

  setUpCodeMirror(codeNode) {
    if (this.CodeMirror) return;
    this.CodeMirror = CodeMirror(this.codeNode, {
      value: this.state.file.content,
      mode:  "javascript",
      tabSize: 2,
      theme: "midnight"
    });

    this.CodeMirror.on("change", this.handleChange.bind(this));
  }

}
