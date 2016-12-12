import { Routes,RouterModule } from "@angular/router";
import { HomeComponent} from "./home/home.component";
import { UsersComponent} from "./usuarios/users.component"
import { FormularioComponent} from "./formulario/formulario.component"



const APP_ROUTES: Routes=[
    {path:'',component:HomeComponent},
    {path:'users',component: UsersComponent},
    {path:'formulario',component: FormularioComponent},  
];

export const routing = RouterModule.forRoot(APP_ROUTES)