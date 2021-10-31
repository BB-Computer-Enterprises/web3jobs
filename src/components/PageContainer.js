export default function PageContainer(content, title, subtitle) {
    return (
        <div className="dark:bg-gray bg-gray">
            
            <div className="container mx-auto px-4 lg:px-8 p-8 lg:py-20 lg:px-52">
                {content}
            </div>
        </div>
    )
}
