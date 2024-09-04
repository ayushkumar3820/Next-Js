// import Link from "next/link";
// import getUsers from "../../services/getUsers";

// export default async function page() {
//     const getUserList = getUsers(); // Keep this as is
//     const users = await getUserList; // Await the result
//     console.log(users);

//     return (
//         <div>
//             <h1>User Lists</h1>
//             {
//                 users.map((user) => {
//                     return (
//                         <h2 key={user.id}>
//                             <Link href={`/users/${user.id}`}>{user.name}</Link>
//                             console.log(users);
//                         </h2>
//                     );
//                 })
//             }
//             </div>
//     );
// }


// direction ka case ma
import { redirect } from "next/navigation"
export default function page(){
    // redirect("/")
    return (

        <div>
            user detail page
        </div>
    )
}