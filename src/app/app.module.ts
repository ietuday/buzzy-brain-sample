import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {
    AccordionModule,
    AutoCompleteModule,
    BreadcrumbModule,
    ButtonModule,
    CalendarModule,
    CarouselModule,
    ChartModule,
    CheckboxModule,
    CodeHighlighterModule,
    SharedModule,
    ContextMenuModule,
    DataGridModule,
    DataListModule,
    DataScrollerModule,
    DataTableModule,
    DialogModule,
    ConfirmDialogModule,
    DragDropModule,
    DropdownModule,
    EditorModule,
    FieldsetModule,
    FileUploadModule,
    GalleriaModule,
    GMapModule,
    GrowlModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    LightboxModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessagesModule,
    MultiSelectModule,
    OrderListModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    ScheduleModule,
    SelectButtonModule,
    SlideMenuModule,
    SliderModule,
    SpinnerModule,
    SplitButtonModule,
    TabMenuModule,
    TabViewModule,
    TerminalModule,
    TieredMenuModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TreeModule,
    TreeTableModule,
    TriStateCheckboxModule,
    BlockUIModule
} from 'primeng/primeng';

import { AlertService} from './services/alert.service';
import { UserService} from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutes,
        AccordionModule,
        AutoCompleteModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CarouselModule,
        ChartModule,
        CheckboxModule,
        CodeHighlighterModule,
        SharedModule,
        ContextMenuModule,
        DataGridModule,
        DataListModule,
        DataScrollerModule,
        DataTableModule,
        DialogModule,
        ConfirmDialogModule,
        DragDropModule,
        DropdownModule,
        EditorModule,
        FieldsetModule,
        FileUploadModule,
        GalleriaModule,
        GMapModule,
        GrowlModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        ScheduleModule,
        SelectButtonModule,
        SlideMenuModule,
        SliderModule,
        SpinnerModule,
        SplitButtonModule,
        TabMenuModule,
        TabViewModule,
        TerminalModule,
        TieredMenuModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        TriStateCheckboxModule,
        BlockUIModule
  ],
  providers: [AlertService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }