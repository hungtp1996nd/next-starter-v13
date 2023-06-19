import getUsers from "@/lib/getUsers"
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'User list'
}

export default async function Users() {
    const userData: Promise<User[]> = await getUsers()
    const users = await userData;
    return <>
        <h2>User page</h2>
        {users?.map((user: User) => (
            <div key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
            </div>
        ))}
    </>
}