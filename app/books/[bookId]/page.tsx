type BookParams = {
    params: {
        bookId: string
    }
}

export default function BookDetail({ params: { bookId = '' } }: BookParams) {
    return <div>Book detail page with bookId: {bookId}</div>
}