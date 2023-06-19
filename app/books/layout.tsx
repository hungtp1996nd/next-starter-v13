import { ReactNode } from "react"

type BooksLayout = {
    children: ReactNode
}

export default function BooksLayout({ children }: BooksLayout) {
    return (
        <>
            <h1>Books layout</h1>
            {children}
        </>
    )
}