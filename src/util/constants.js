export const BASE_URL = 'http://localhost:8000/api/'

export function GET_THEMES () {
  return {
    url: 'themes'
  }
}

export function GET_EVENTS () {
  return { url: 'events' }
}

export function GET_EVENT_BY_ID (id) {
  return { url: 'events/' + id }
}
export function REGISTER_FOR_EVENT (id, isRegistered) {
  return {
    url: 'events/' + id,
    method: 'PATCH',
    data: { isRegistered }
  }
}
export function BOOKMARK_EVENT (id, isBookmarked) {
  return {
    url: 'events/' + id,
    method: 'PATCH',
    data: { isBookmarked }
  }
}

export function UPDATE_THEME (preferredThemeId) {
  return {
    url: 'themes',
    method: 'PUT',
    data: { preferredThemeId }
  }
}
