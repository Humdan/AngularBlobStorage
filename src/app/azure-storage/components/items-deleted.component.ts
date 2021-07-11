import { Component } from '@angular/core';
import { BlobDeletesViewStateService } from '../services/blob-deletes-view-state.service';

@Component({
  selector: 'app-items-deleted',
  templateUrl: 'items-deleted.component.html'
})
export class ItemsDeletedComponent {
  deletedItems$ = this.blobState.deletedItems$;
  constructor(private blobState: BlobDeletesViewStateService) {}
}
