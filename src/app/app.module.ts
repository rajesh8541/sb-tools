import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UrlSerializer } from '@angular/router';
import { TrailingSlashUrlSerializer } from 'src/trailing-slash-fix';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Base64ImageComponent } from './modules/base64-image/base64-image.component';
import { SbRelatedToolsModule } from "./shared/sb-related-tools/sb-related-tools.module";
const js2xmlparser = require('js2xmlparser');
const format = require('xml-formatter');



@NgModule({
    declarations: [AppComponent, FooterComponent, HeaderComponent, Base64ImageComponent],
    providers: [
        {
            provide: UrlSerializer,
            useClass: TrailingSlashUrlSerializer,
        },
        BrowserAnimationsModule,
        FormsModule,
    ],
    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        HttpClientModule,
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BrowserAnimationsModule,
        FormsModule, ReactiveFormsModule,
        SbRelatedToolsModule
    ]
})
export class AppModule {}
