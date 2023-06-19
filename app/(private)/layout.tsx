import { ReactNode } from "react"

type PrivateLayout = {
    children: ReactNode
}

export default function PrivateLayout({ children }: PrivateLayout) {
    return (
        <>
            <h1 style={{ color: 'red' }}>Private layout</h1>
            {children}
        </>
    )
}