import NextHead from 'next/head'

const Head = () => {
    return (
        <div>
            <div className="test-kimura"></div>
            <NextHead>
                <title>My page title</title>
                <meta name="description" content="Teste test teste"/>
            </NextHead>
        </div>
    )
}
export default Head
