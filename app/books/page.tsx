const wait = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Something not working"), 3000)
    })
}

export default async function Books() {
    const data = await wait();
    return <div>Books page: {`${data}`}</div>
}