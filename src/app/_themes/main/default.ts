'use client';
import { JumboThemeOptions } from '@jumbo/types';
import { Shadows } from '@mui/material';

const shadows: Shadows = [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0 5px 10px rgba(0, 0, 0, 0.085)',
    '0 5px 10px rgba(0, 0, 0, 0.175)',
];

export const mainTheme: JumboThemeOptions = {
    type: 'light',
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
        },
    },

    palette: {
        primary: {
            main: '#000000',
            light: '#9d9d9d',
            dark: '#434343',
            contrastText: '#FFF',
        },
        secondary: {
            main: '#E44A77',
            light: '#FF7EA6',
            dark: '#DF295E',
            contrastText: '#FFF',
        },
        error: {
            main: '#8C1414',
            light: '#C84543',
            dark: '#BA2B29',
            contrastText: '#FFF',
        },
        warning: {
            main: '#BB5911',
            light: '#DCA136',
            dark: '#D3881E',
            contrastText: '#FFF',
        },
        info: {
            main: '#2EB5C9',
            light: '#6FE7FC',
            dark: '#008598',
            contrastText: '#FFF',
        },
        success: {
            main: '#2EAC59',
            light: '#9BD4AA',
            dark: '#107A38',
            contrastText: '#FFF',
        },
        text: {
            primary: '#000000',
            secondary: '#353535',
            disabled: '#A2B2C3',
        },
        // divider: '#DEE2E6',
        // background: {
        //   paper: '#FFFFFF',
        //   default: '#F5F7FA',
        // },
        // action: {
        //   active: '#475259',
        //   hover: '#F5F7FA',
        // },
        // nav: {
        //   action: {
        //     active: '#7352C7',
        //     hover: '#7352C7',
        //   },
        //   background: {
        //     active: '#7352C7',
        //     hover: '#E9ECEF',
        //   },
        //   tick: {
        //     active: '#7352C7',
        //     hover: '#ADB5BD',
        //   },
        // },
    },
    // shadows: shadows,
    typography: {
        fontFamily: 'Lexend, Arial',
        fontSize: 16,
        h1: {
            fontFamily: 'EB Garamond, Arial',
            fontSize: '5rem',
            lineHeight: '5.25rem',
            fontWeight: 600,
            color: '#000000',
            margin: '0 0 .5rem',
        },
        h2: {
            fontFamily: 'Lexend, Arial',
            fontSize: '2.25rem',
            lineHeight: '2.5rem',
            fontWeight: 700,
            color: '#000000',
            margin: '0 0 .5rem',
        },
        h3: {
            fontFamily: 'Lexend, Arial',
            fontSize: '2rem',
            lineHeight: '2.5rem',
            fontWeight: 500,
            color: '#000000',
            margin: '0 0 .5rem',
        },
        h4: {
            fontFamily: 'Lexend, Arial',
            fontSize: '1.85rem',
            lineHeight: '2rem',
            fontWeight: 500,
            color: '#000000',
            margin: '0 0 .5rem',
        },
        h5: {
            fontFamily: 'Lexend, Arial',
            fontSize: '1rem',
            lineHeight: 1.2,
            fontWeight: 400,
            color: '#000000',
            margin: '0 0 .5rem',
        },
        h6: {
            fontFamily: 'Lexend, Arial',
            fontSize: '.875rem',
            lineHeight: 1.2,
            fontWeight: 400,
            color: '#000000',
            margin: '0 0 .5rem',
        },
        body1: {
            fontSize: '1rem',
            color: '#353535',
            lineHeight: '1.5rem'
        },
        subtitle1: {
            fontSize: '1rem',
            color: '#767676',
            lineHeight: '1.5rem'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'contained' && {
                        padding: '1.125rem 2rem',
                        fontSize: '1rem',
                    }),
                    ...(ownerState.variant === 'outlined' && {
                        padding: '0.5rem 1rem',
                        fontSize: '0.875rem',
                    }),
                    ...(ownerState.variant === 'text' && {
                        padding: '1.25rem 2rem',
                        fontSize: '1rem',
                    }),
                    fontWeight: 500,
                    lineHeight: '1.25rem',
                    boxShadow: 'none',
                    textTransform: 'none',
                }),
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#0E33BA',
                    textDecoration: 'none',
                    fontWeight: 500,
                },
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    width: '4rem',
                    height: '4rem',
                },
            },
        },
        // MuiMenuItem: {
        //     styleOverrides: {
        //         root: {
        //             backgroundColor: '#727272',
        //             borderRadius: '50%',
        //             padding: '3px'
        //         }
        //     }
        // },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: '#727272',
                }
            }
        }
    },
}
// components: {
//   MuiTableCell: {
//     styleOverrides: {
//       root: {
//         borderColor: rgb(0, 0, 0, 0.1),
//         },
//     },
//   },
//     MuiMenuItem: {
//       styleOverrides: {
//         root: {
//           minHeight: 'auto',
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           borderRadius: 12,
//           boxShadow: 0 0.5rem 1.25rem rgba(115, 82, 199, 0.175),
//         },
//       },
//     },
//     MuiCardContent: {
//       styleOverrides: {
//         root: {
//           padding: 24,
//         },
//       },
//     },
//     MuiCardHeader: {
//       styleOverrides: {
//         root: {
//           padding: '18px 24px',
//         },
//         title: {
//           fontSize: '1.1rem',
//           marginBottom: 0,
//         },
//         subheader: {
//           margin: '4px 0 0',
//         },
//         action: {
//           margin: 0,
//         },
//       },
//     },
//     MuiCardActions: {
//       styleOverrides: {
//         root: {
//           padding: '8px 24px',
//         },
//       },
//     },
//     MuiChip: {
//       styleOverrides: {
//         sizeSmall: {
//           height: 22,
//           fontSize: 12,
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           fontWeight: 400,
//           letterSpacing: 1,
//         },
//         sizeSmall: {
//           fontSize: '12px',
//         },
//       },
//     },
//     MuiPopover: {
//       styleOverrides: {
//         paper: {
//           borderRadius: 8,
//         },
//       },
//     },
//     MuiDialogTitle: {
//       styleOverrides: {
//         root: {
//           fontSize: 18,
//         },
//       },
//     },
//     MuiDialogActions: {
//       styleOverrides: {
//         root: {
//           padding: '16px 24px',
//         },
//       },
//     },
//     MuiAvatarGroup: {
//       styleOverrides: {
//         avatar: {
//           backgroundColor: '#757575',
//           fontSize: 16,
//         },
//       },
//     },
//   },
//   jumboComponents: {
//     JumboSearch: {
//       background: '#F5F5F5',
//     },
//   },

// };