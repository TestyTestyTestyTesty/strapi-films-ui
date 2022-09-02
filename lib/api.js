import qs from "qs";
export async function fetcher(url, options = {}) {
    let response;
    if (!options) {
        response = await fetch(url);
    } else {
        response = await fetch(url, options);
    }
    const data = await response.json();
    return data;
}

export function getStrapiURL(path = "") {
    return `${process.env.NEXT_PUBLIC_STRAPI_URL}${path}`;
}

export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
    let error = null;
    const mergedOptions = {
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    };

    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
        `${path}${queryString ? `?${queryString}` : ""}`
    )}`;
    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    // Handle response
    if (!response.ok) {
        error = "Something went wrong, please reload or check later";
    }
    const data = await response.json();
    return { data, error };
}
