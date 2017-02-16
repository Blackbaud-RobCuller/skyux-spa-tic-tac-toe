import { NgModule } from '@angular/core';
import { GameDataService } from './gamedata.service.ts';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  providers: [ GameDataService ],
  entryComponents: []
})
export class AppExtrasModule { }
