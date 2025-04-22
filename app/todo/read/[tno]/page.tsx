


async function TodoReadPage({params}: {params:Promise<any>}) {

    const param = await params

    console.log(param)

    return (
        <div>
            <div className={'text-4xl'}>Todo Read Page</div>
        </div>
    )

}

export default TodoReadPage