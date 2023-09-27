import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from 'src/app/pages/shop/shop.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';

export const routes: Routes = [
    { path: '', component: FooterComponent, outlet: 'footer' },
    {
        path: '', component: ShopComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
