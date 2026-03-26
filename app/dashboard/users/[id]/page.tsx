async function UserDetail({params}:{params: Promise<{id: string}>}){
    const {id} = await params;
    console.log(id);
  return(
    <h1>UserDetail # {id}</h1>
  )
}
export default UserDetail;