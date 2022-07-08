import {Auth, database} from './Setup';

export const SignUpUser = (email, passswod) => {
  return new Promise(function(resolve, reject) {
    Auth()
      .createUserWithEmailAndPassword(email, passswod)
      .then(() => {
        resolve('Sign Up Successfully');
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const SignInUser = (email, passswod) => {
  return new Promise(function(resolve, reject) {
    Auth()
      .signInWithEmailAndPassword(email, passswod)
      .then(() => {
        resolve('Sign In Successfully');
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const SignOutUser = () => {
  return new Promise(function(resolve, reject) {
    Auth()
      .signOut()
      .then(() => {
        resolve('Sign Out Successfully');
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const submitUser = (Id,firstName, lastName, email,password) => {
  return new Promise(function(resolve, reject) {
    let key;
    if (Id != null) {
      key = Id;
    } else {
      key = database()
        .ref()
        .push().key;
    }
    let dataToSave = {
      firstName:firstName, lastName:lastName, email:email,password:password,
      Id: key,
    };
    database()
      .ref('users/' + key)
      .update(dataToSave)
      .then(snapshot => {
        resolve(snapshot);
      })
      .catch(err => {
        reject(err);
      });
  });
};