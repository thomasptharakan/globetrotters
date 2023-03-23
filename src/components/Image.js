import axios from "axios";
import { useState, useEffect } from 'react'

//declating function which will return call the api and return 8 image links 
function Image(destination) {
    //using useState as that's the only way to save variables when using useEffect
    const [linkArray, setLinksArray] = useState()

    //the api will return image attributes
    //this function takes the attributes and turns them into links.
    const getFlickrImageURL = (photo, size) => {
        let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`;
        if (size) {
            url += `_${size}`;
        }
        url += '.jpg';
        return url;
    };

    //parameters used when calling the array
    const params = {
        method: 'flickr.photos.search',
        api_key: process.env.REACT_APP_FLICKR_API_KEY,
        text: `${destination} landmark`,
        per_page: 12,
        page: 1,
        sort: 'interestingness-desc',
        format: 'json',
        license: '4',
        nojsoncallback: 1,
    };

    //create the url for the api query
    const parameters = new URLSearchParams(params);
    const url = `https://api.flickr.com/services/rest/?${parameters}`;

    //calling the api with our url, and updating linkArray
    const apiReq = async () => {
        axios.get(url)
            .then(data => {
                setLinksArray(data.data.photos.photo.map((photo) => {
                    return (getFlickrImageURL(photo, 'b'));
                }))
            })

    };

    //using use effect to ensure api call only occurs once per component load
    useEffect(() => {
        apiReq();
    }, []);

    //returning the image array
    console.log(linkArray);
    return (linkArray)

}

export default Image;