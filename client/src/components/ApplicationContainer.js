import {AppShell, Box, MediaQuery} from "@mantine/core"
import {DefaultHeader} from "./Header";

export const ApplicationContainer = ({children}) => {
    return (<AppShell
            styles={{
                main: {
                    background: '#F5F5F5',
                    width: "100vw",
                    paddingTop: "40px"
                }
            }}
            fixed
            header={<DefaultHeader/>}
        >
            <MediaQuery
                query="(min-width: 50em)"
                styles={{padding: "0 88px 0 145px"}}
            >
                <Box>
                    {children}
                </Box>

            </MediaQuery>

        </AppShell>)
}