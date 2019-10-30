import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableAkitaProdMode, persistState } from '@datorama/akita';
import { debounceTime } from 'rxjs/operators';
import { AppModule } from './app/root/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();
}

persistState({
  key: 'contacty',
  include: ['contact'],
  preStorageUpdateOperator: () => debounceTime(100)
});

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));
