import {Box, Container, CssBaseline, Stack, Tab, Tabs} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import TabPanel from "../components/TabPanel";
import {loadAllCommunities, CommunityResponse} from '../redux/communitiesAPI'

import ExploreCommunitiesListItem from "../components/ExploreCommunitiesListItem";

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

export default function ExploreCommunities() {
    /*const [category, setCategory] = useState(1)
    const [communities, setCommunities] = useState(new Array<CommunityResponse>())

    useEffect(() => {
        loadAllCommunities().then(communityList => {
            if (communityList) {
                setCommunities(communityList!)
            }
        })
    }, [])

    return <Container maxWidth="lg" sx={{
        marginTop: 6,
        display: 'flex',
        flexDirection: 'column'
    }}>
        <CssBaseline/>
        <Box sx={{display: 'inline-flex', flexDirection: 'column', alignSelf: 'flex-start', alignItems: 'flex-start'}}>
            <Typography variant='h3'>
                Explore Communities
            </Typography>
            <Typography variant='subtitle1' mt={1}>
                Browse Askvio’s top growing communities. Find the top communities in your favorite category.
            </Typography>
        </Box>
        <Box sx={{
            width: '100%',
            mt: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            flexGrow: 1
        }}>
            <Box sx={{borderBottom: 1, borderColor: 'divider', width: '100%'}}>
                <Tabs value={category} onChange={(e, newValue) => setCategory(newValue)}
                      aria-label="basic tabs example">
                    <Tab value={1} label="All Communities"/>
                    <Tab value={2} label="Technology"/>
                    <Tab value={3} label="Life and Arts"/>
                </Tabs>
            </Box>
            <TabPanel index={1} value={category}>
                <Stack spacing={2} mt={5}>
                    {
                        communities.map(ca => {
                            return <ExploreCommunitiesListItem communityResponse={ca}/>
                        })
                    }
                </Stack>
            </TabPanel>
            <TabPanel index={2} value={category}>
                <h3>Hello Two</h3>
            </TabPanel>
            <TabPanel index={3} value={category}>
                <h3>Hello Three</h3>
            </TabPanel>
        </Box>
    </Container>;*/
}
