import { db } from "./fireBaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const fetchCategoryCards = async (collectionName, setCategoryCards) => {
  const collectionRef = collection(db, collectionName);
  const querySnapshot = await getDocs(collectionRef);
  const results = querySnapshot.docs.map((doc) => {
    return {
      collection: collectionName,
      id: doc.id,
      name: doc.data().name,
      category: doc.data().category,
      description: doc.data().description,
      example: doc.data().example,
      imageUrl: doc.data().imageUrl,
      videoUrl: doc.data().videoUrl,
    };
  });
  setCategoryCards(results);
};

export const fetchInfluencerCards = async (
  collectionName,
  setInfluencerCards
) => {
  const collectionRef = collection(db, collectionName);
  const querySnapshot = await getDocs(collectionRef);
  const results = querySnapshot.docs.map((doc) => {
    return {
      collection: collectionName,
      id: doc.id,
      bodyCopy: doc.data().bodyCopy,
      caption: doc.data().caption,
      harm: doc.data().harm,
      howToSpotIt: doc.data().howToSpotIt,
      motive: doc.data().motive,
      newsImage: doc.data().newsImage,
      newsLogoImage: doc.data().newsLogoImage,
      qrCodeImage: doc.data().qrCodeImage,
      tacticUsed: doc.data().tacticUsed,
      tacticUsedImage: doc.data().tacticUsedImage,
      takeaway: doc.data().takeaway,
      video: doc.data().video,
      villain: doc.data().villain,
    };
  });
  setInfluencerCards(results);
};
