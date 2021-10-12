import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContentCardModule } from "../card/card.module";
import { ContentFodaComponent } from "./content.component";

@NgModule({
    declarations: [ ContentFodaComponent ],
    imports: [
        ContentCardModule,
        CommonModule
    ], 
    exports: [ ContentFodaComponent ]
})
export class ContentFodaModule {}