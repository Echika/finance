// src/theme.js
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { fontSize } from "@mui/system";

let theme = createTheme({
  palette: {
    primary: {
      main: "#000080",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#228B22",
      paper: "#ffffff",
    },
    text: {
      primary: "#000080", 
      secondary: "#555555",
    },
  },
  
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  typography: {
    allVariants: {
      color: '#000080'
    },
    fontFamily: "Poppins, Arial, sans-serif",
    
    h1: {
      fontSize: "1.5rem",
      fontWeight: 600,

    },
    h2: {
      fontSize: "1.35rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.35rem",
      fontWeight: 400,
    },
    h4: {
      fontSize: "1rem",
      fontWeight: "300",
    },
    h6: {
      fontSize: ".8rem",
      marginBottom: "8px",
    },

    body1: {
      fontSize: ".6rem",
    },
    body2: {
      fontSize: ".4rem"
    },
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "25px",
          border: "none",
          marginBottom: "10px",
          padding: '6px 12px',
          fontSize: '0.5rem',
        },
        contained: {
          backgroundColor: "hsl(187, 100%, 40%)",
          color: "#000",
          borderColor: "none",
          "&:hover": {
            backgroundColor: "hsl(185, 90%, 60%)",
            color: "#000",
            borderColor: "none",
          },
        },
        outlined: {
          backgroundColor: "#fdb515",
          color: "#000",
          border: "none",
          borderColor: '#fdb515',
          "&:hover": {
            backgroundColor: "white",
            borderColor: "#fdb515",
          },
        },
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          marginBottom: "100px",
          fontSize: ".8rem",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: "30px",
          borderRadius: "10px",
        },
      },
      defaultProps: {
        size: "small",
        margin: "normal",
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1976d2", 
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "16px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Default shadow for papers
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#000080",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          backgroundColor: "#ffffff",
          border: "1px solid #cccccc",
          padding: "8px",
        },
      },
    },
  },
  spacing: [0, 4, 8, 16, 24, 32, 40, 48, 80, 96],
  zIndex: {},
});

theme.components.MuiButton.styleOverrides.root = {
  ...theme.components.MuiButton.styleOverrides.root,
  [theme.breakpoints.up('sm')]: {
    padding: '10px 20px',
    fontSize: '.9rem',
  },
  [theme.breakpoints.up('md')]: {
    padding: '10px 25px',
    fontSize: '1rem'
  },
  [theme.breakpoints.up('lg')]: {
    padding: '12px 30px',
    fontSize: '1.1rem'
  }
};

theme = responsiveFontSizes(theme);
theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.5rem'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.5rem'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '4.5rem'
  }
};
theme.typography.h2 = {
  ...theme.typography.h2,
  [theme.breakpoints.up('sm')]: {
    fontSize: '2rem'
  }
}

export default theme;
