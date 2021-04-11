import { User } from "./user.interface";

export class RoleValidator{
    isMentor(user: User):boolean{
        return user.role === 'MENTOR';
    }
    isMente(user: User):boolean{
        return user.role === 'MENTEE';
    }
    isUser(user: User):boolean{
        return user.role === 'AMBOS';
    }
}