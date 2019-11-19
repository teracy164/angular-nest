import { Component } from '@angular/core';
import { DefaultService } from './api-client';
import { HelloDto } from './api-client/model/helloDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor(private api: DefaultService) {}

  async onClickTest() {
    const result: HelloDto = await this.api.rootGet().toPromise();
    this.title = result.message;
  }
}
