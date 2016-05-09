import React from 'react';
import fileApiUtil from '../../util/file_api_util';

export default class FileIndex extends React.Component {
  componentDidMount() {
    fileApiUtil.fetch();
  }
  render() {
    return(
      <div>
        <p>All The Files</p>
        <ul>
          files
        </ul>
      </div>
    );
  }
}
