import Link from "next/link";

function User(){
  return(
    <>
    <h1>User</h1>
    <Link href="/dashboard/users/1">user 1</Link>
    <Link href="/dashboard/users/2">user 2</Link>
    <Link href="/dashboard/users/3">user 3</Link>
    </>
  )
}
export default User;