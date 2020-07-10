export interface IResponse {
    statusCode: number
    body: any
}

export interface IRequest {
    body?: any
    headers?: any
    params?: any
}
