

export type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}


export type FilterType = {
    userId?: number | null,
    title?: string,
}
