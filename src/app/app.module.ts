import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { MenuInsertPageComponent } from './components/menu-insert-page/menu-insert-page.component';
import { MenuNoticesComponent } from './components/menu-notices/menu-notices.component';
import { BigCardComponent } from './components/big-card/big-card.component';

import {ContateNosModule} from './pages/contate-nos/contate-nos.module';
import {SobreNosModule} from './pages/sobre-nos/sobre-nos.module';
import {SugestoesModule} from './pages/sugestoes/sugestoes.module';
import { ContentComponent } from './pages/content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    MenuInsertPageComponent,
    HomeComponent,
    MenuNoticesComponent,
    BigCardComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ContateNosModule,
    SobreNosModule,
    SugestoesModule
  ],
  exports:[HomeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
