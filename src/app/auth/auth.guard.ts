import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = async (
  // route: ActivatedRouteSnapshot,
  // state: RouterStateSnapshot
): Promise<boolean> => {
  // const authService = inject(AuthService);
  const router = inject(Router);

  if (!(AuthService.isAuthenticated())) {
    router.navigate(['/login']);
    return false;
  }
  // router.navigate(['/dashboard']);
  return true;
};
