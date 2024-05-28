import { AppRequest } from '../models';

/**
 * @param {AppRequest} request
 * @returns {string}
 */
export function getUserIdFromRequest(request: AppRequest): string {
  console.log('request.user', request);
  return request.user && request.user.id;
}
