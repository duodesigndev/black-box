import { Injectable } from '@angular/core';
import { Observable ,  of ,  throwError as _throw } from 'rxjs';

import { Authenticate, User } from '@models/user';

@Injectable()
export class AuthService {
  constructor() {}

  login({ username, password }: Authenticate): Observable<User> {
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    if (username !== 'test') {
      return _throw('Invalid username or password');
    }

    return null;
  }

  logout() {
    return of(true);
  }
}
