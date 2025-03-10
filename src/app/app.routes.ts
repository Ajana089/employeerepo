import { Routes } from '@angular/router';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeregistrationComponent } from './pages/employeeregistration/employeeregistration.component';
import { LeaveComponent } from './pages/leave/leave.component';

export const routes: Routes = [
    {path:'',
     redirectTo:'login',
     pathMatch:'full'

    },
    
    {path:'login',component:LoginpageComponent},
    {
        path:'',
        component:LayoutComponent,
        children:
        [{
            path:'dashboard',
            component:DashboardComponent
        },
    {
        path:'employe',
        component:EmployeeregistrationComponent,

    },
{
    path:'leave',
    component:LeaveComponent
}]
    }

];
