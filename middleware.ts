import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon\\.ico|images|textures|sitemap\\.xml|robots\\.txt|manifest\\.webmanifest|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|woff2?|ttf|eot)$).*)',
  ],
};
