import getUser from "@/lib/getUser"

type UserDetailProps = {
    params: {
        userId: string
    }
}

export async function generateMetadata({ params: { userId = '' } }: UserDetailProps) {
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res => res.json())
    return {
        title: `User detail of ${user.name}`
    }
}

export default async function UserDetail({ params: { userId = '' } }: UserDetailProps) {
    const userDetailData: Promise<User> = await getUser(userId);
    const userDetail = await userDetailData;
    return <>
        <h2>User detail page</h2>
        <p>{userDetail.name} - {userDetail.email} - {userDetail.company.name}</p>
    </>
}