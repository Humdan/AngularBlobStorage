import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ContainerListComponent } from "./components/container-list/container-list.component";
import { InputFileComponent } from "./components/input-file/input-file.component";
import { ItemsDeletedComponent } from "./components/items-deleted/items-deleted.component";
import { ItemsDownloadedComponent } from "./components/items-downloaded/items-downloaded.component";
import { ItemsListComponent } from "./components/items-list/items-list.component";
import { ItemsUploadedComponent } from "./components/items-uploaded/items-uploaded.component";
import { SelectedContainerComponent } from "./components/selected-container/selected-container.component";
import { azureBlobStorageFactory, BLOB_STORAGE_TOKEN } from "./services/token";

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [
    ContainerListComponent,
    ItemsListComponent,
    SelectedContainerComponent,
    InputFileComponent,
    ItemsDownloadedComponent,
    ItemsUploadedComponent,
    ItemsDeletedComponent,
  ],
  providers: [
    {
      provide: BLOB_STORAGE_TOKEN,
      useFactory: azureBlobStorageFactory,
    },
  ],
  exports: [
    ContainerListComponent,
    ItemsListComponent,
    SelectedContainerComponent,
    InputFileComponent,
    ItemsDownloadedComponent,
    ItemsUploadedComponent,
    ItemsDeletedComponent,
  ],
})
export class AzureStorageModule {}
