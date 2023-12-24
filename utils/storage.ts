export const getLS = (key) => {
    const o = localStorage.getItem(key)
    return o ? JSON.parse(o) : ''
}
export const setLS = (key, val) => {
    localStorage.setItem(key, JSON.stringify(val))
}
export const clearLS = () => {
    localStorage.clear()
}