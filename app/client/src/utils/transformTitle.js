export const transformTitle = (data, length) => {
    if (data.length > length) {
        return data.slice(0, length) + '...'
    } else {
        return  data
    }
}