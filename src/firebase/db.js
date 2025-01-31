//db
import { getFirestore, query, where, collection, getDocs, doc, getDoc, addDoc } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);


export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    const products = []

    querySnapshot.forEach((doc) => {
        products.push(doc.data())
    });
    return products
};

export const getProductsByCategory = async (category) =>{
    const q = query(collection(db, "productos"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const products= []

    querySnapshot.forEach((doc) => {
        products.push(doc.data());
    });

    return products;
}


export const getItem = async (id) => {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
    console.log("No such document!");
    return null;
    }

}



export const newOrder = async (order) => {
    try {
        const docRef = await addDoc(collection(db, "ordenes"), order);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    console.error("Error adding document: ", e);
  }
}

