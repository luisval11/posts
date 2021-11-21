import React from 'react'
import AuthorItem from '../components/AuthorItem'
import Loading from '../components/Loading'
import { useFetchBlob } from '../hooks/useFetchBlob'
import { BASE_URL_IMAGE, ENDPOINT_IMAGE } from '../utils/endpoints'
import { buildUrl } from '../utils/http'

const UserContainer = ({ author }) => {

    const { data: image, loading } = useFetchBlob(buildUrl(BASE_URL_IMAGE, ENDPOINT_IMAGE(author[0].id), {}))

    return (
        <>
            {loading
                ? <Loading />
                : <AuthorItem author={author[0]} image={image} />
            }
        </>
    )
}
export default UserContainer