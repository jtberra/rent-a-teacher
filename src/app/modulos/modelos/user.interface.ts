export type Role = 'MENTEE' | 'MENTOR' | 'AMBOS';

export interface User {
    uid: string;
    email: string;
    displayname?: string;
    emailVerified: boolean;
    password?: string;
    photoURL?: string;
    role?: Role;
}

