import { Helmet } from "react-helmet";

export const genTwitterCard = data => {
    const {title, imageURL, description} = data
    return (
        <Helmet>
            <meta name="twitter:title" content={title} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content="@web3jobz_" />
            <meta name="twitter:site" content="@web3jobz_" />
            <meta name="twitter:image" content={imageURL} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    )
}