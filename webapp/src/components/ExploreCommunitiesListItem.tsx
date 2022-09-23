import {Box, Divider, Typography, Link, Button, Stack} from "@mui/material";
import {CommunityResponse} from "../services/CommunitiesService";

interface ExploreCommunitiesListItemProps {
    communityResponse: CommunityResponse;
}

export default function ExploreCommunitiesListItem({communityResponse}: ExploreCommunitiesListItemProps) {
    return <Box sx={{width: '100%'}}>
        <Stack direction="row">
            <Box sx={{
                flexGrow: 1
            }}>
                <Typography variant="h4" align="left" >
                    <Link href="#" underline={"none"}>
                        {communityResponse.displayName}
                    </Link>
                </Typography>
                <Typography variant="subtitle1" align="left">
                    {communityResponse.about}
                </Typography>
            </Box>
            <Button variant="contained">
                Join
            </Button>
        </Stack>

        <Divider sx={{
            marginTop: 2,
            width: '100%'
        }}/>
    </Box>
}