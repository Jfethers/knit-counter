export const hex = (hex: string): string | undefined => {
    const hexRegex = /^(?:[0-9A-F]{3}|[0-9A-F]{6})$/i
    if (!hexRegex.test(hex)) {
        return 'Invalid hexidecimal value'
    }
}