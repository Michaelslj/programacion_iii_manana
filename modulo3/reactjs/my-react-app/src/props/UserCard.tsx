
export default function UserCard({ user}) {
    return <div>{user.name} - {user.age} años - {user.apellido} apellido - {user.direccion} direccion - {user.telefono}</div>;
  }
  