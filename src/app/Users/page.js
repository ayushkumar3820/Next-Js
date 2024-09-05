import Link from "next/link";

async function getUsers(){
    const response = await fetch('http://localhost:3000/api/user');
    const data = await response.json();
    return data;
}


export default async function page({params}){

    const user= await getUsers(params.userId);
    console.log(user);
    return (
        <div>
            <h1>User detail</h1>
            <h4>
                Name: {user.name}
            </h4>
            <h4>Age : {user.age}</h4>
            <h4>Email: {user.email}</h4>
            <h4>
                ID:{user.id}
            </h4>
        </div>
    )
    {
        user.map((item)=>{
            <div>
                <Link href={`users/${item.id}`}>{item.name}</Link>
            </div>
        })
    }
}