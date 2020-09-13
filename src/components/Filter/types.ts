
export type PropsType = {
    items: Array<filterType>,
    filterOption: string
}

type filterType = {
    name: string,
    type: string,
    option?: string
}
