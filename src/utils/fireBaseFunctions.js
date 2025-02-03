import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/fireBaseConfig";
// import axios from "axios";

export const fetchTactics = async (collectionName, setTacticCategories) => {
  const collectionRef = collection(db, collectionName);
  const querySnapshot = await getDocs(collectionRef);
  const results = querySnapshot.docs.map((doc) => ({
    collection: collectionName,
    id: doc.id,
    title: doc.data().title,
    author: doc.data().author,
    description: doc.data().description,
    thumbnail: doc.data().thumbnail,
    cost: doc.data().cost,
  }));
  setTacticCategories(results);
};
