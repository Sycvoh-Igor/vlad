
export type PropsType = {
    items: Array<filterType>,
    filterOption: FilterOption
}

interface FilterOption {
    name: string,
    gender: string,
    status: string
}

type filterType = {
    name: string,
    type: string,
    option?: string
}
