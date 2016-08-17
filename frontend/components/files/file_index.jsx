import React from 'react';
import FileDetail from './file_detail';
import FileApiUtil from '../../util/file_api_util';
import fileStore from '../../stores/file_store';
import { Link } from 'react-router';

export default class FileIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = { files: [] };
  }

  componentDidMount() {
    this.fileStoreToken = fileStore.addListener(
      this.setStateFromStore.bind(this)
    );

    FileApiUtil.fetch();
  }

  componentWillUnmount() {
    this.fileStoreToken.remove();
  }

  setStateFromStore() {
    this.setState({ files: fileStore.all() });
  }

  render() {
    let files = this.state.files.map((file) => {
      return (
        <li key={file.id}>
          <Link to={"/files/" + file.id}>{file.title}</Link>
        </li>
      );
    });
    return(
      <div>
        <h3>All The Files</h3>
        <ul>
          {files}
        </ul>
      </div>
    );
  }
}
