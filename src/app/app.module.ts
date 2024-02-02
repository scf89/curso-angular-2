import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"tema17ej2","appId":"1:454048811054:web:df85a917c00e2e5bcb37bf","storageBucket":"tema17ej2.appspot.com","apiKey":"AIzaSyC9JPgr2I-Yr6nrDNIhRj31fyNw5tOLpwo","authDomain":"tema17ej2.firebaseapp.com","messagingSenderId":"454048811054","measurementId":"G-78LWLBS2ZT"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
