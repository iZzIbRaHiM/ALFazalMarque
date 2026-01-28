export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-secondary-white">
            <div className="w-16 h-16 border-4 border-primary-black/20 border-t-primary-black rounded-full animate-spin" />
        </div>
    )
}
