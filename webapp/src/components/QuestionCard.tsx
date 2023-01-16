export type Question = {
    communityName: string
    title: string
    content: string
    posterUsername: string
    postedAgo: string
    commentsCount: number
}

export default function QuestionCard({
                                         communityName,
                                         title,
                                         content,
                                         posterUsername,
                                         postedAgo,
                                         commentsCount
                                     }: Question) {
    return (
        <a href="#"
           className="block p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex flex-row items-center gap-1">
                <img className="w-8 h-8 rounded-full"
                     src={`https://api.dicebear.com/5.x/bottts/svg?seed=${Math.floor(Math.random() * 100)}`}
                     alt="Rounded avatar"/>
                <p className="text-sm font-bold">
                    v/java
                </p>
                <p>·</p>
                <p className="text-gray-500 text-sm font-normal">
                    Posted by u/_TheSuperiorMan 1 day ago
                </p>
            </div>
            <h5 className="mb-2 mt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                C# vs Java: in terms of fields they specialise in?
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 max-w-3xl">
                I know both are general-purpose programming languages and are very similar. But in general, which fields do they specialise in?

                Am I correct to say that most C# projects are focused on building web servers and developing games in Unity. While Java is much more broad are used in web servers, mobile apps, financial and other enterprise applications, as well as big data...
            </p>
        </a>
    )
}
