export declare interface ApiDataTypeMap {
}

// how it works
export type Method = keyof ApiDataTypeMap
type PickString<T extends string | number | symbol> = T extends string ? T : never
export type Path<M extends Method> = PickString<keyof ApiDataTypeMap[M]>
type PR<M extends Method, P extends Path<M>> = ApiDataTypeMap[M][P]
export type Params<M extends Method, P extends Path<M>> = 'params' extends keyof PR<M, P> ? PR<M, P>['params'] : undefined
export type Return<M extends Method, P extends Path<M>> = 'returnType' extends keyof PR<M, P> ? PR<M, P>['returnType'] : ('params' extends keyof PR<M, P> ? never : PR<M, P>)
