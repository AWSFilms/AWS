export function addTwo(p1:number,p2:number){
    if ((p1 === undefined) || (p2 === undefined))
    {
        return -1;
    }
    return p1 + p2
}

export function subTwo(p1:number,p2:number) {
    if ((p1 === undefined) || (p2 === undefined))
    {
        return -1;
    }

    return p1 -p2;
}