import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
// import { PostListComponent } from './posts/post-list/post-list.component';
// import { PostDetailComponent } from './posts/post-detail/post-detail.component';
// import { PostCategoryComponent } from './posts/post-list/post-category/post-category.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { LatestNewsListComponent } from './latest-news/latest-news-list/latest-news-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { WorkComponent } from './work/work.component';
import { WorkListComponent } from './work/work-list/work-list.component';
import { WorkDetailComponent } from './work/work-detail/work-detail.component';
import { OpeningsComponent } from './openings/openings.component';
import { OpeningsListComponent } from './openings/openings-list/openings-list.component';
import { OpeningsDetailComponent } from './openings/openings-detail/openings-detail.component';
import { ServicesComponent } from './services/services.component';
import { ServicesListComponent } from './services/services-list/services-list.component';
import { ServicesDetailComponent } from './services/services-detail/services-detail.component';
import { TeamComponent } from './team/team.component';
import { DevelopmentTeamComponent } from './team/development-team/development-team.component';
import { DevelopmentTeamListComponent } from './team/development-team/development-team-list/development-team-list.component';
import { DevelopmentTeamDetailComponent } from './team/development-team/development-team-detail/development-team-detail.component';
import { ProductionTeamComponent } from './team/production-team/production-team.component';
import { ProductionTeamListComponent } from './team/production-team/production-team-list/production-team-list.component';
import { ProductionTeamDetailComponent } from './team/production-team/production-team-detail/production-team-detail.component';
import { SupportTeamComponent } from './team/support-team/support-team.component';
import { SupportTeamListComponent } from './team/support-team/support-team-list/support-team-list.component';
import { SupportTeamDetailComponent } from './team/support-team/support-team-detail/support-team-detail.component';
import { SalesAndMarketingTeamComponent } from './team/sales-and-marketing-team/sales-and-marketing-team.component';
import { SalesAndMarketingTeamListComponent } from './team/sales-and-marketing-team/sales-and-marketing-team-list/sales-and-marketing-team-list.component';
import { SalesAndMarketingTeamDetailComponent } from './team/sales-and-marketing-team/sales-and-marketing-team-detail/sales-and-marketing-team-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PostService } from './posts/post.service';
import { HttpClient } from 'selenium-webdriver/http';
import { GlobalService } from './global.service';
import { LogoutComponent } from './logout/logout.component';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    })
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    // PostListComponent,
    // PostDetailComponent,
    // PostCategoryComponent,
    LatestNewsComponent,
    LatestNewsListComponent,
    WorkComponent,
    WorkListComponent,
    WorkDetailComponent,
    OpeningsComponent,
    OpeningsListComponent,
    OpeningsDetailComponent,
    ServicesComponent,
    ServicesListComponent,
    ServicesDetailComponent,
    TeamComponent,
    DevelopmentTeamComponent,
    DevelopmentTeamListComponent,
    DevelopmentTeamDetailComponent,
    ProductionTeamComponent,
    ProductionTeamListComponent,
    ProductionTeamDetailComponent,
    SupportTeamComponent,
    SupportTeamListComponent,
    SupportTeamDetailComponent,
    SalesAndMarketingTeamComponent,
    SalesAndMarketingTeamListComponent,
    SalesAndMarketingTeamDetailComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LogoutComponent
      

    
  ],
  providers: [PostService, GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
