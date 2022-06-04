import { AppBar, SvgIcon, Toolbar, Typography } from "@mui/material";
const Header = () => {

    const displayToolbar = () => {
        return (
            <Toolbar >
                <SvgIcon htmlColor="#4060af">
                    <path d="M3,22.239H26.88V19.533H3Zm0-6.766H26.88V12.766H3ZM3,6V8.707H26.88V6Z" />
                </SvgIcon>
            </Toolbar>
        )
    }
    return (
        <>
            <div>
                Header
                <AppBar sx={{ bgcolor: "white" }}>{displayToolbar()}</AppBar>
            </div>
        </>
    )
}

export default Header;