import { database } from '../firebaseConfig';
import { collection, addDoc, DocumentData, WithFieldValue, getDocs, Query } from 'firebase/firestore';
import { Song } from './types';

const dbInstance = collection(database, 'songs');

const create = (data: WithFieldValue<DocumentData>) => addDoc(dbInstance, data);
const list = () => getDocs(dbInstance);

export const createSong = async (songData: Song): Promise<Song | null> => {
  try {
    const createdSong = await create(songData);

    return {
      ...songData,
      id: createdSong.id,
    };
  } catch (e: any) {
    return null;
  }
};

export const getAllSongs = async (): Promise<Array<Song>> => {
  const docs = await (await list()).docs;

  return docs.map((doc) => ({ id: doc.id, ...doc.data() as Song }));
}