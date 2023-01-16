export function convertToRelativeDate(date: Date): string {
    const agos = ["15 days ago", "2 hours ago", "1 minute ago", "2 days ago", "9 hours ago", "5 minutes ago"]
    return agos[Math.floor(Math.random() * agos.length)]
}
