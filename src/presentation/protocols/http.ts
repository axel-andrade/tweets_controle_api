export interface IResponse {
    statusCode: number
    body: any
}

export interface IRequest {
    body?: any
    query?: any
    headers?: any
    params?: any
}
