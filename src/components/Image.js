import axios from "axios";
import { useState, useEffect } from 'react'

function Image(destination) {

    const [linkArray, setLinksArray] = useState()

    const getFlickrImageURL = (photo, size) => {
        let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret
            }`;
        if (size) {
            url += `_${size}`;
        }
        url += '.jpg';
        return url;
    };

    const params = {
        method: 'flickr.photos.search',
        api_key: 'cdbfa6bf4091f43cacbfcb52953f2c0c',
        text: `${destination} tourism`,
        per_page: 1,
        page: 1,
        sort: 'interestingness-desc',
        format: 'json',
        license: '4',
        nojsoncallback: 1,
    };

    const parameters = new URLSearchParams(params);
    const url = `https://api.flickr.com/services/rest/?${parameters}`;
    const apiReq = async () => {
        axios.get(url)
            .then(data => {
                setLinksArray(data.data.photos.photo.map((photo) => {
                    return (getFlickrImageURL(photo, 'b'));
                }))
            })

    };

    useEffect(() => {
        apiReq();
    }, []);


    return (linkArray)

}

export default Image;