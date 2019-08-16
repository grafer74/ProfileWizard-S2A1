import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { StartComponent } from './start/start.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { FinishedComponent } from './finished/finished.component';

const routes: Routes = [
  {path: "personal-details", component: PersonalDetailsComponent},
  {path: "contact-details", component: ContactDetailsComponent},
  {path: "skills", component: SkillsComponent},
  {path: "work-experience", component: WorkExperienceComponent},
  {path: "finished", component: FinishedComponent},
  {path: "start", component: StartComponent},
  {path: "", redirectTo: "start", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
