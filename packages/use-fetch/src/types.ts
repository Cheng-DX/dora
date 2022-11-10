export declare interface ApiMap {
}

export type Path = keyof ApiMap
export type Content<P extends Path> = ApiMap[P]
export type Params<P extends Path> = 'params' extends keyof Content<P> ? Content<P>['params'] : never
export type Return<P extends Path> = 'returnType' extends keyof Content<P>
  ? Content<P>['returnType']
  : (
      'params' extends keyof Content<P>
        ? never
        : Content<P>
    )
type PickHasParams<P> = P extends Path
  ? 'params' extends keyof Content<P>
    ? P
    : never
  : never
export type HasParamsPath = PickHasParams<Path>
export type HasNotParamsPath = Exclude<Path, HasParamsPath>

export type Fetcher = <P extends Path>(path: P, params?: Params<P>, method?: string) => Promise<Return<P>>
