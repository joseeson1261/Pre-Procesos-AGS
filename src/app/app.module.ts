import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { Device } from "@awesome-cordova-plugins/device/ngx";
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    RouterModule
    
  ],
  providers: [{provide: RouteReuseStrategy,useClass: IonicRouteStrategy },
    SQLite,
    Vibration,
    Keyboard
  ],


  bootstrap: [AppComponent],
})
export class AppModule {}
 