import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  } // close constructor

  handleNameChange(event) {
   let name = event.target.value;
   this.props.onNameChange(name);
  } // close handleNameChange method

  render() {
    return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'} onChange={this.handleNameChange} />
      <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} />
      <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
    </div>
  ) // close return
  } // close render
} // close Playlist component

export default Playlist;
