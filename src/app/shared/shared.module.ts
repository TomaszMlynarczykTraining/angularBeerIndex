import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [LayoutComponent, HeaderComponent, FooterComponent],
    imports: [ CommonModule, RouterModule , MaterialModule],
    exports: [LayoutComponent],
    providers: [],
})
export class SharedModule {}