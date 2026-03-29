import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { SearchComponent } from './search/search';
import { ProductDetailComponent } from './product-detail/product-detail';
import { WantlistComponent } from './wantlist/wantlist';
import { ProfileComponent } from './profile/profile';
import { CrateComponent } from './crate/crate';
import { SellComponent } from './sell/sell';
import { EditProfileComponent } from './edit-profile/edit-profile';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'wantlist', component: WantlistComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'crate', component: CrateComponent },
  { path: 'sell', component: SellComponent },
  { path: 'edit-profile', component: EditProfileComponent },
];
