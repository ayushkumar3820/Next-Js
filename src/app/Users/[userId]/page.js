async function getUsers(){
    const response = await fetch('http://localhost:3000/api/user');
    const data = await response.json();
    return data;
}




export async function page(params) {
    console.log(params);
    return (
        <div>
            <h1>Page user detail</h1>
        </div>
    )
}