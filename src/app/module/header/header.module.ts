import { NgModule } from "@angular/core";
import { HeaderFoda } from "./header.component";
import {MatTabsModule} from '@angular/material/tabs';
import { ContentFodaModule } from "../content/content.module";

@NgModule({
    declarations: [ HeaderFoda ],
    imports: [
        MatTabsModule,
        ContentFodaModule
    ],
    exports: [ HeaderFoda ]
})
export class HeaderFodaModulo {}