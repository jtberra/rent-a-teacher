export type Roles = 'MENTEE' | 'MENTOR' | 'AMBOS';

export interface User {
    uid: string;
    email: string;
    displayName?: string;
    emailVerified: boolean;
    phoneNumber?: string;
    password?: string;
    photoURL?: string;
    role?: Roles;
}

