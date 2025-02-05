export type Ract = {
    target: string
    members: Member[],
    compiles?: number[] 
}

export type Member = {
    source: string,
    target: string
}

export type GenUIToml = {
    dependencies: string[],
    plugins: string[]
}