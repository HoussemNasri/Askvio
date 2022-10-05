import {Box, Divider, Typography, Link, Button, Stack} from "@mui/material";
import {CommunityResponse, isCurrentUserMemberOfCommunity, joinCommunity} from "../services/CommunitiesService";
import {useCallback, useEffect, useState} from "react";

interface ExploreCommunitiesListItemProps {
    communityResponse: CommunityResponse;
}

export default function ExploreCommunitiesListItem({communityResponse}: ExploreCommunitiesListItemProps) {
    const [isMember, setIsMember] = useState(false)
    useEffect(() => {
        isCurrentUserMemberOfCommunity(communityResponse.id).then(r => {
            console.log(`Is current user member of ${communityResponse.name}: ${r}`)
            setIsMember(r)
        })
    }, [])

    const doJoinCommunity = useCallback(() => {
        console.log("Heyy")
        joinCommunity(communityResponse.id).then((res) =>{
            setIsMember(true)
            console.log("waaa")
        } )
            .catch((e) => console.error("Cannot join community!"))
    }, [])

    return <Box sx={{width: '100%'}}>
        <Stack direction="row">
            <Box sx={{
                flexGrow: 1
            }}>
                <Typography variant="h4" align="left">
                    <Link href="#" underline={"none"}>
                        {communityResponse.displayName}
                    </Link>
                </Typography>
                <Typography variant="subtitle1" align="left">
                    {communityResponse.about}
                </Typography>
            </Box>
            {
                isMember
                    ? <Button variant="outlined" sx={{
                        width: '100px'
                    }}>Joined</Button>
                    : <Button variant="contained" sx={{
                        width: '100px'
                    }} onClick={doJoinCommunity}>Join</Button>
            }

        </Stack>

        <Divider sx={{
            marginTop: 2,
            width: '100%'
        }}/>
    </Box>
}