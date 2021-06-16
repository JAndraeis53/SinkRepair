import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests() // grab the local state of the requests data

    let html = `
        <ul>
            ${
                requests.map(request => {
                    return `<li>
                            <input value=${request.id}" /> ${request.description}
                            </li>`
                }).join("")
            }
        </ul>
    `

    return html
}
