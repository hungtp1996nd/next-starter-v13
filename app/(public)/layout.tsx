import { ReactNode } from "react"

type PublicLayout = {
    children: ReactNode
}

export default function PublicLayout({ children }: PublicLayout) {
    return (
        <>
            <h1 style={{ color: 'green' }}>Public layout</h1>
            {children}
        </>
    )
}