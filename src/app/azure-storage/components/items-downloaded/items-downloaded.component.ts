import { Component } from '@angular/core';
import { BlobDownloadsViewStateService } from '../../services/blob-downloads-view-state.service';

@Component({
  selector: 'app-items-downloaded',
  templateUrl: 'items-downloaded.component.html'
})
export class ItemsDownloadedComponent {
  downloads$ = this.blobState.downloadedItems$;
  constructor(private blobState: BlobDownloadsViewStateService) {}
}
