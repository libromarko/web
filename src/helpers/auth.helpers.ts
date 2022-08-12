export default function getAuthUser() {
    const user = JSON.parse(localStorage.getItem('libromarko') || '{}');
    return user;
}
