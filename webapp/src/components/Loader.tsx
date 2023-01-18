interface LoaderProps {
    resourceName?: string
}
export function Loader({resourceName = ""}: LoaderProps) {
    return <div className="flex-auto">
        <p> {`Loading ${resourceName}...`}</p>
    </div>
}
