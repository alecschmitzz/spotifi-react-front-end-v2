export function isLoggedIn(): boolean {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("jwt="));
    
  return !!cookieValue; // Return true if the cookie is found, false otherwise
}
