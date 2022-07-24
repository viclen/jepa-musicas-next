import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Button, TextField } from '@mui/material';

import { createSong } from '../store/songs';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [lyrics, setLyrics] = useState("");

  const save = async () => {
    const song = await createSong({
      author: "test",
      lyrics,
      title: "test song " + Math.random(),
      url: "test-song-" + Math.random(),
    });

    console.log(song);

    setLyrics("");
  };

  return (
    <div>
      <Head>
        <title>Músicas JEPA</title>
      </Head>

      <main>
        <div>
          <TextField onChange={(e) => setLyrics(e.target.value)} value={lyrics} />
        </div>
        <div>
          <Button variant="contained" onClick={save}>Outlined</Button>
        </div>
      </main>
    </div>
  );
};

export default Home;
