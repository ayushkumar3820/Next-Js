export default async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
}
