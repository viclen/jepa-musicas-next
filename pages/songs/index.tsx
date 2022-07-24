import { useEffect, useState } from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import type { NextPage } from 'next';
import { getAllSongs } from '../../store/songs';
import { Song } from '../../store/types';

const SongList: NextPage = () => {
  const [songs, setSongs] = useState<Array<Song>>([]);

  useEffect(() => {
    getAllSongs().then((result) => setSongs(result));
  }, []);

  return (
    <main>
      <List>
        {songs.map((song) => (
          <ListItemText primary={song.title} />
        ))}
      </List>
    </main>
  );
};

export default SongList;