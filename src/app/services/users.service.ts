import { Injectable } from '@angular/core';
import { doc, docData, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
import { from, Observable, of, switchMap } from 'rxjs';
import { ProfileUser } from '../Models/user.profile';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  
  constructor(private firestore:Firestore, private authservice:AuthenticationService) { }
  
  get currentUserProfile$(): Observable<ProfileUser | null> {
    return this.authservice.currentUser$.pipe(
      switchMap((user) => {

        if (!user?.uid) {
          return of(null);
        }

        const ref = doc(this.firestore, 'users', user?.uid);
        return docData(ref) as Observable<ProfileUser>;
        
      })
    );
  }


  addUser(user: ProfileUser) : Observable<any> {
    const ref = doc(this.firestore, 'users' , user?.uid!);
    return from(setDoc(ref, user)); 
  }

  updateUser(user: ProfileUser) : Observable<any> {
    const ref = doc(this.firestore, 'users' , user?.uid!);
    return from(updateDoc(ref, { ...user })); 
  }
}
