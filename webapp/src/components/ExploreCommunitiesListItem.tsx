interface ExploreCommunitiesListItemProps {
    avatarUrl: string;
    displayName: string;
    description: string;
    creationDate: Date;
    askedQuestionsCount: number;
    answeredQuestionsCount: number;
}

export default function ExploreCommunitiesListItem(
    {avatarUrl, displayName, description, creationDate, askedQuestionsCount, answeredQuestionsCount}: ExploreCommunitiesListItemProps
) {
    return <h1>Item </h1>
}