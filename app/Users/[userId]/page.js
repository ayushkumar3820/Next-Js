// import Link from "next/link";
// import getUsers from "../../services/getUsers";

// export default async function page(props) {
//     const getUserList = getUsers(); // Keep this as is
//     const users = await getUserList; 
//     const currentId=props.params.userId;
//     const userData=users[currentId-1];
//     console.log(users[currentId-1]);
//     return(
//       <div>
//         <h3>User detail  page</h3>
//         <h4>Id:{userData.id}</h4>
//         <h4>Name:{userData.name}</h4>
//         <h4>website:{userData.website}</h4>

//       </div>
//     )}



//     export async function granterStaticParams(props) {
//         const getUserList = getUsers(); // Keep this as is
//         const users = await getUserList;
//         return users.map(user=>({
//             userId:user.id.toString(),
//         }))
        
//     }

import { redirect } from "next/navigation"
export default function page(){
    // redirect("/")
    return (

        <div>
            user detail another page
        </div>
    )
}