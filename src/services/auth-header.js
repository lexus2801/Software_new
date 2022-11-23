export default function authHeader() {
  const token = localStorage.getItem('token');
    if (token) {
        return { headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
      }};
    } else {
      return {};
    }
}