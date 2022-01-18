import { createContext } from "react";
import { CssBaseline } from "@mui/material";
import {ThemeProvider } from "@mui/material/styles";
import {createMuiTheme} from '@material-ui/core/styles';

const TemplateContext=createContext(null);

export const TemplateProvider=({children})=>{
    const theme=createMuiTheme({
        overrides:{
            MuiDialog:{
                paperWidthSm:{
                    maxWidth:'unset'
                },
                '&:first-child':{
                    padding:0
                }
            },
            MuiDialogContent:{
                root:{
                    padding:0,
                    '&:first-child':{
                        padding:0
                    }
                }
            }
            
        }
    });

    return (
        <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
                <CssBaseline></CssBaseline>
                {children}
            </ThemeProvider>
        </TemplateContext.Provider>
    )
}