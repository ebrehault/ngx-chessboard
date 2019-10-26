import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxChessboardModule } from 'projects/ngx-chessboard/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxChessboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
