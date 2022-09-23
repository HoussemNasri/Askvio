import {Box} from "@mui/material";

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}
export default function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <Box
            role="tabpanel"
            sx={{
                width: '100%'
            }}
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}>
            {value === index && (
                children
            )}
        </Box>
    );
}