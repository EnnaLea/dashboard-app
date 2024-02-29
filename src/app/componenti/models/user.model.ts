// import { Observable } from 'rxjs';
// import { AuthService } from '../../auth/auth.service';

// export class User{
//     constructor(
//         public email: string,
//         public password: string
//     ){}


//     get userEmail(){
//         if(this.email){
//             return this.email
//         } else {
//             return "User not logged"
//         }
//     }
    
//     get userPassword(){
//         if(this.password){
//             return this.password
//         } else {
//             return "User not logged"
//         }
            
//     }
// }

export class User{
    constructor(
        public email: string,
        public password: string,
        
    ){
        // this.authService = authService;
    }

    // authenticate(): Observable<boolean> {
    //     return this.authService.authenticate(this.email, this.password);
    // }

    get userEmail(){
        if(this.email){
            return this.email
        } else {
            return "User not logged"
        }
    }
    
    get userPassword(){
        if(this.password){
            return this.password
        } else {
            return "User not logged"
        }
            
    }
}