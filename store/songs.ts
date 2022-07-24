import { database } from '../firebaseConfig';
import { collection, addDoc, DocumentData, WithFieldValue, DocumentReference } from 'firebase/firestore';
import { Song } from './types';

const dbInstance = collection(database, 'songs');

const create = (data: WithFieldValue<DocumentData>) => addDoc(dbInstance, data);

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