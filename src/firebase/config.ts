
// src/firebase/config.ts
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, deleteDoc, serverTimestamp } from "firebase/firestore";
// import { FieldValue } from "firebase/firestore";
import { collection, query, where, limit, startAfter, getDocs, orderBy } from "firebase/firestore";
// import { firebaseConfig as devConfig } from "./config.dev";
// import { firebaseConfig as prodConfig } from "./config.prod";


const firebaseConfig = {
    apiKey: "AIzaSyBFVCGbCW3XnS7PIEn8U6UTBO84AMOedXI",
    authDomain: "sivan-dekel.firebaseapp.com",
    projectId: "sivan-dekel",
    storageBucket: "sivan-dekel.firebasestorage.app",
    messagingSenderId: "949882426114",
    appId: "1:949882426114:web:86a949a1e6e408052e281b",
    measurementId: "G-QVJ182FM17"
  };

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

interface Customer {
    name: string;
    email?: string;
    phone?: string;
    address?: string; // פה את יכולה לשים את ההודעה
    typeMap?: string; // פה את שומרת את סוג הקורס
  }
  

export const addCustomer = async (
    
    customer: Omit<Customer, "id">
  ): Promise<string> => {
    try {
      const customerRef = doc(
        collection(db, "customers")
      );
      await setDoc(customerRef, {
        ...customer,
        createdAt: serverTimestamp(),
      });
      return customerRef.id;
    } catch (error) {
      console.error("Error adding customer:", error);
      throw error;
    }
  };