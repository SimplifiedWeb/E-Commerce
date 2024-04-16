import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { db } from "../../../../../config/Firebase"; // Make sure to import your Firestore instance
import { getAuth } from "../../auth/authContext/AuthContext";

const Add_Products_To_Firebase = () => {
  const newProduct = useSelector((state) => state.addProducts.product);
  const { currentUser } = getAuth();

  useEffect(() => {
    if (!newProduct) {
      return undefined;
    }

    const { category, ...restData } = newProduct;
    const addData = async () => {
      try {
        const productCollection = collection(db, "products");
        const allTheDocs = await getDocs(productCollection);
        allTheDocs.forEach(async (doc) => {
          if (doc.id === category) {
            try {
              const docRef = doc.ref;
              const documentSnapshot = await getDoc(docRef);
              const documentData = documentSnapshot.data();
              if (documentData && Array.isArray(documentData.data)) {
                const updatedData = [
                  ...documentData.data,
                  {
                    ...newProduct,
                    email: currentUser?.email,
                    id: documentData?.data.length + 1,
                  },
                ];
                await updateDoc(docRef, { data: updatedData });
                console.log("Data added successfully to document:", doc.id);
                localStorage.setItem("apiFetched", "false");
              } else {
                console.log("Invalid document structure or data format");
              }

              console.log("Data added successfully to document:", doc.id);
            } catch (err) {
              console.log("Error adding data to document ", doc.id, err);
            }
          } else {
            console.log("Something wrong,", doc.id);
          }
        });
      } catch (err) {
        console.log("Error fetching collections from the Firebase");
      }
    };

    addData();
  }, [newProduct]);

  return <></>;
};

export default Add_Products_To_Firebase;
