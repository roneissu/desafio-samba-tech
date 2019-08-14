const baseUrl = 'https://www.breakingbadapi.com/api/'

export default function getPaginatedCharacterList({ limit, offset }) {
    return (fetch(baseUrl + `characters?limit${limit}&offset${offset}`)
            .then((response) => response.json())
            .catch((error) => console.log('An error ocourred' + error)));
}