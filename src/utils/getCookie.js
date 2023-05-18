export const getCookie = cookieName => {
  const cookies = document.cookie.split(';');
  const cookie = cookies.find(cookie =>
    cookie.trim().startsWith(`${cookieName}=`)
  );

  return cookie ? cookie.split('=')[1] : null;
};
