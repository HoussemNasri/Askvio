import {Box, Divider, Typography, Link, Button, Stack} from "@mui/material";
import {useCallback, useEffect, useState} from "react";
import {CommunityResponse, join, isCurrentUserMemberOfCommunity} from '../redux/communitiesAPI'
import {useAppSelector} from "../redux/app/hooks";
import {getAuthState} from "../redux/authSlice";

interface ExploreCommunitiesListItemProps {
    communityResponse: CommunityResponse;
}

export default function ExploreCommunitiesListItem({communityResponse}: ExploreCommunitiesListItemProps) {
    const [isMember, setIsMember] = useState(false)
    const {jwt, isAuthenticated} = useAppSelector(getAuthState)

    useEffect(() => {
        isCurrentUserMemberOfCommunity(jwt!, communityResponse.id).then(r => {
            setIsMember(r)
        })
    }, [])

    const doJoinCommunity = useCallback(() => {
        if (isAuthenticated) {
            join(jwt!, communityResponse.id).then(() => setIsMember(true))
        }
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