import NextHead from 'next/head'

const Head = ({title, description}) => {
    return (
        <div>
            <NextHead>
                <title>{title}</title>
                <meta name="description" content="{description}"/>
            </NextHead>
        </div>
    )
}
export default Head
