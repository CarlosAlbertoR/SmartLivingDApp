import { auth, googleProvider } from "@config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { conectFirebaseUser, destroyWeb3auth, getWeb3AuthInstance } from ".";

export const loginWithGoogle = async () => {
  try {
    const userData = signInWithPopup(auth, googleProvider).then(
      async (data) => {
        console.log("data", data);
        const idToken = await data.user.getIdToken(true);
        console.log("idToken", idToken);
        const user = conectFirebaseUser(idToken);
        return user;
      }
    );

    // await conectFirebaseUser(idToken);
    // const user = await getUserInfo();
    // console.log("user", user);

    return userData;
  } catch (error) {
    console.error("Error during Google signup:", error);
  }
};

export const signupWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    const idToken = await data.user.getIdToken(true);
    await conectFirebaseUser(idToken);
    const user = await getUserInfo();
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const loginWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const data = await signInWithEmailAndPassword(auth, email, password);
    console.log("data", data);

    const idToken = await data.user.getIdToken(true);
    await conectFirebaseUser(idToken);
    const user = await getUserInfo();
    console.log("user", user);

    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUserInfo = async () => {
  try {
    const web3authInstance = await getWeb3AuthInstance();
    if (!web3authInstance) return null;

    const user = await web3authInstance?.getUserInfo();
    return user;
  } catch (error) {
    console.error("Error al obtener información del usuario:", error);
  }
};

export const logout = async () => {
  const web3authInstance = await getWeb3AuthInstance();
  if (!web3authInstance) {
    console.error("web3auth not initialized yet");
    return;
  }

  await web3authInstance.logout();
  destroyWeb3auth();
};