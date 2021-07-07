import { Injectable, InjectionToken } from '@angular/core';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { FirebaseFirestore } from 'firebase/firestore';

export const MoviesFirebase = new InjectionToken<FirebaseApp>('movies-firebase-app');
export const MoviesFirestore = new InjectionToken<FirebaseFirestore>('movies-firestore');
