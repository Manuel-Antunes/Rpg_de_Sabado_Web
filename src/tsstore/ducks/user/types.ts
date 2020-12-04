import firebase from "firebase";

export interface User {
  user?: firebase.User | null;
}

export interface UserState {
  data: User;
}
