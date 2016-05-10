import React from 'react';
import fileApiUtil from '../../util/file_api_util';
import fileStore from '../../stores/file_store';

export default class FileIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = { files: [] };
  }

  componentDidMount() {
    this.fileStoreToken = fileStore.addListener(
      this.setStateFromStore.bind(this)
    );

    fileApiUtil.fetch();
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
        <div>
          <p>
            {file.title}
          </p>
          <p>
            {file.content}
          </p>
        </div>
      );
    });

    return(
      <div>
        <p>All The Files</p>
        <ul>
          {files}
        </ul>
      </div>
    );
  }
}
