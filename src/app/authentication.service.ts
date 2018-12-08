import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { Contracts } from './schemas/contracts';
export interface UserDetails {
    _id: string;
    username: string;
    password: string;
    exp: number;
}

interface TokenResponse {
    token: string;
}

export interface TokenPayload {
    username: string;
    password: string;
}

@Injectable()
export class AuthenticationService {
    private emitChangeSource = new Subject<any>();
    emitChange(change: any) {
        this.emitChangeSource.next(change);
    }
    getContractDetail(){  
        return this.emitChangeSource.asObservable();  
    }  
    private token: string;

    constructor(private http: HttpClient, private router: Router) {}

    private saveToken(token: string): void {
        localStorage.setItem('mean-token', token);
        this.token = token;
    }

    private getToken(): string {
        if (!this.token) {
        this.token = localStorage.getItem('mean-token');
        }
        return this.token;
    }

    public getUserDetails(): UserDetails {
        const token = this.getToken();
        let payload;
        if (token) {
        payload = token.split('.')[1];
        payload = window.atob(payload);
        return JSON.parse(payload);
        } else {
        return null;
        }
    }

    public isLoggedIn(): boolean {
        const user = this.getUserDetails();
        if (user) {
        return user.exp > Date.now() / 1000;
        } else {
        return false;
        }
    }

    private request(method: 'post'|'get', type: 'login'|'register'|'profile', user?: TokenPayload): Observable<any> {
        let base;

        if (method === 'post') {
        base = this.http.post(`/api/${type}`, user);
        } else {
        base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
        }

        const request = base.pipe(
        map((data: TokenResponse) => {
            if (data.token) {
            this.saveToken(data.token);
            }
            return data;
        })
        );
        return request;
    }

    public register(user: TokenPayload): Observable<any> {
        return this.request('post', 'register', user);
    }

    public login(user: TokenPayload): Observable<any> {
        return this.request('post', 'login', user);
    }
    public logout(): void {
        this.token = '';
        window.localStorage.removeItem('mean-token');
        this.router.navigateByUrl('/');
    }


    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    };

    private extractData(res: Response) {
        let body = res;
        return body || {};
    }
    getContracts(): Observable<any> {
        const token = this.getToken();
        if(token){
        return this.http.get('/contracts/get-contracts', { headers: { Authorization: `Bearer ${this.getToken()}` }}).pipe(
            map(this.extractData),
            catchError(this.handleError));
        }
        else
            return null;
    }
    postContracts(contract): Observable<any> {
        return this.http.post('/contracts/post-contracts', contract ,{ headers: { Authorization: `Bearer ${this.getToken()}` }})
        .pipe(
            catchError(this.handleError)
        );
    }
}