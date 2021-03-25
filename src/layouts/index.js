import React from 'react';
import { Grommet, Footer, Text, Main, Header, Menu, Nav, ResponsiveContext, Box, Sidebar, Collapsible, Layer } from 'grommet';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Link from '../components/link';
// import Header from '../components/header';
// import Footer from '../components/footer';
import Icon from '../components/icon';
import Button from '../components/button';
// import 'typeface-roboto';
import "./base.css";
// import styles from "./index.module.css";
import logo from "../images/logo.png";

const theme = {
  "name": "ohiocmf",
  "rounding": 4,
  "spacing": 24,
  "defaultMode": "light",
  "global": {
    "colors": {
      "brand": {
        "light": "#2d7436",
        "dark": "#5da361"
      },
      "background": {
        "dark": "#111111",
        "light": "#FFFFFF"
      },
      "background-back": {
        "dark": "#111111",
        "light": "#EEEEEE"
      },
      "background-front": {
        "dark": "#222222",
        "light": "#FFFFFF"
      },
      "background-contrast": {
        "dark": "#FFFFFF11",
        "light": "#11111111"
      },
      "text": {
        "dark": "#EEEEEE",
        "light": "#333333"
      },
      "text-strong": {
        "dark": "#FFFFFF",
        "light": "#000000"
      },
      "text-weak": {
        "dark": "#CCCCCC",
        "light": "#444444"
      },
      "text-xweak": {
        "dark": "#999999",
        "light": "#666666"
      },
      "border": {
        "dark": "#444444",
        "light": "#CCCCCC"
      },
      "control": "brand",
      "active-background": "background-contrast",
      "active-text": "text-strong",
      "selected-background": "brand",
      "selected-text": "text-strong",
      "status-critical": "#FF4040",
      "status-warning": "#FFAA15",
      "status-ok": "#00C781",
      "status-unknown": "#CCCCCC",
      "status-disabled": "#CCCCCC",
      "graph-0": "brand",
      "graph-1": "status-warning"
    },
    "font": {
      "family": "",
      "face": "/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7mxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4WxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",
      "size": "18px",
      "height": "24px",
      "maxWidth": "432px"
    },
    "active": {
      "background": "active-background",
      "color": "active-text"
    },
    "hover": {
      "background": "active-background",
      "color": "active-text"
    },
    "selected": {
      "background": "selected-background",
      "color": "selected-text"
    },
    "borderSize": {
      "xsmall": "1px",
      "small": "2px",
      "medium": "4px",
      "large": "12px",
      "xlarge": "24px"
    },
    "breakpoints": {
      "small": {
        "value": 768,
        "borderSize": {
          "xsmall": "1px",
          "small": "2px",
          "medium": "4px",
          "large": "6px",
          "xlarge": "12px"
        },
        "edgeSize": {
          "none": "0px",
          "hair": "1px",
          "xxsmall": "2px",
          "xsmall": "3px",
          "small": "6px",
          "medium": "12px",
          "large": "24px",
          "xlarge": "48px"
        },
        "size": {
          "xxsmall": "24px",
          "xsmall": "48px",
          "small": "96px",
          "medium": "192px",
          "large": "384px",
          "xlarge": "768px",
          "full": "100%"
        }
      },
      "medium": {
        "value": 1536
      },
      "large": {}
    },
    "edgeSize": {
      "none": "0px",
      "hair": "1px",
      "xxsmall": "3px",
      "xsmall": "6px",
      "small": "12px",
      "medium": "24px",
      "large": "48px",
      "xlarge": "96px",
      "responsiveBreakpoint": "small"
    },
    "input": {
      "padding": "12px",
      "weight": 600
    },
    "spacing": "24px",
    "size": {
      "xxsmall": "48px",
      "xsmall": "96px",
      "small": "192px",
      "medium": "384px",
      "large": "768px",
      "xlarge": "1152px",
      "xxlarge": "1536px",
      "full": "100%"
    }
  },
  "chart": {},
  "diagram": {
    "line": {}
  },
  "meter": {},
  "layer": {
    "background": {
      "dark": "#111111",
      "light": "#FFFFFF"
    }
  },
  "button": {
    "border": {
      "width": "2px",
      "radius": "18px"
    },
    "padding": {
      "vertical": "4px",
      "horizontal": "22px"
    }
  },
  "calendar": {
    "small": {
      "fontSize": "14px",
      "lineHeight": 1.375,
      "daySize": "27.43px"
    },
    "medium": {
      "fontSize": "18px",
      "lineHeight": 1.45,
      "daySize": "54.86px"
    },
    "large": {
      "fontSize": "30px",
      "lineHeight": 1.11,
      "daySize": "109.71px"
    }
  },
  "checkBox": {
    "size": "24px",
    "toggle": {
      "radius": "24px",
      "size": "48px"
    }
  },
  "clock": {
    "analog": {
      "hour": {
        "width": "8px",
        "size": "24px"
      },
      "minute": {
        "width": "4px",
        "size": "12px"
      },
      "second": {
        "width": "3px",
        "size": "9px"
      },
      "size": {
        "small": "72px",
        "medium": "96px",
        "large": "144px",
        "xlarge": "216px",
        "huge": "288px"
      }
    },
    "digital": {
      "text": {
        "xsmall": {
          "size": "10px",
          "height": 1.5
        },
        "small": {
          "size": "14px",
          "height": 1.43
        },
        "medium": {
          "size": "18px",
          "height": 1.375
        },
        "large": {
          "size": "22px",
          "height": 1.167
        },
        "xlarge": {
          "size": "26px",
          "height": 1.1875
        },
        "xxlarge": {
          "size": "34px",
          "height": 1.125
        }
      }
    }
  },
  "heading": {
    "level": {
      "1": {
        "small": {
          "size": "34px",
          "height": "40px",
          "maxWidth": "816px"
        },
        "medium": {
          "size": "50px",
          "height": "56px",
          "maxWidth": "1200px"
        },
        "large": {
          "size": "82px",
          "height": "88px",
          "maxWidth": "1968px"
        },
        "xlarge": {
          "size": "114px",
          "height": "120px",
          "maxWidth": "2736px"
        }
      },
      "2": {
        "small": {
          "size": "30px",
          "height": "36px",
          "maxWidth": "720px"
        },
        "medium": {
          "size": "42px",
          "height": "48px",
          "maxWidth": "1008px"
        },
        "large": {
          "size": "54px",
          "height": "60px",
          "maxWidth": "1296px"
        },
        "xlarge": {
          "size": "66px",
          "height": "72px",
          "maxWidth": "1584px"
        }
      },
      "3": {
        "small": {
          "size": "26px",
          "height": "32px",
          "maxWidth": "624px"
        },
        "medium": {
          "size": "34px",
          "height": "40px",
          "maxWidth": "816px"
        },
        "large": {
          "size": "42px",
          "height": "48px",
          "maxWidth": "1008px"
        },
        "xlarge": {
          "size": "50px",
          "height": "56px",
          "maxWidth": "1200px"
        }
      },
      "4": {
        "small": {
          "size": "22px",
          "height": "28px",
          "maxWidth": "528px"
        },
        "medium": {
          "size": "26px",
          "height": "32px",
          "maxWidth": "624px"
        },
        "large": {
          "size": "30px",
          "height": "36px",
          "maxWidth": "720px"
        },
        "xlarge": {
          "size": "34px",
          "height": "40px",
          "maxWidth": "816px"
        }
      },
      "5": {
        "small": {
          "size": "16px",
          "height": "22px",
          "maxWidth": "384px"
        },
        "medium": {
          "size": "16px",
          "height": "22px",
          "maxWidth": "384px"
        },
        "large": {
          "size": "16px",
          "height": "22px",
          "maxWidth": "384px"
        },
        "xlarge": {
          "size": "16px",
          "height": "22px",
          "maxWidth": "384px"
        }
      },
      "6": {
        "small": {
          "size": "14px",
          "height": "20px",
          "maxWidth": "336px"
        },
        "medium": {
          "size": "14px",
          "height": "20px",
          "maxWidth": "336px"
        },
        "large": {
          "size": "14px",
          "height": "20px",
          "maxWidth": "336px"
        },
        "xlarge": {
          "size": "14px",
          "height": "20px",
          "maxWidth": "336px"
        }
      }
    }
  },
  "paragraph": {
    "small": {
      "size": "16px",
      "height": "22px",
      "maxWidth": "384px"
    },
    "medium": {
      "size": "18px",
      "height": "24px",
      "maxWidth": "432px"
    },
    "large": {
      "size": "22px",
      "height": "28px",
      "maxWidth": "528px"
    },
    "xlarge": {
      "size": "26px",
      "height": "32px",
      "maxWidth": "624px"
    },
    "xxlarge": {
      "size": "34px",
      "height": "40px",
      "maxWidth": "816px"
    }
  },
  "radioButton": {
    "size": "24px"
  },
  "text": {
    "xsmall": {
      "size": "14px",
      "height": "20px",
      "maxWidth": "336px"
    },
    "small": {
      "size": "16px",
      "height": "22px",
      "maxWidth": "384px"
    },
    "medium": {
      "size": "18px",
      "height": "24px",
      "maxWidth": "432px"
    },
    "large": {
      "size": "22px",
      "height": "28px",
      "maxWidth": "528px"
    },
    "xlarge": {
      "size": "26px",
      "height": "32px",
      "maxWidth": "624px"
    },
    "xxlarge": {
      "size": "34px",
      "height": "40px",
      "maxWidth": "816px"
    }
  },
  "scale": 1
};

const Layout = ({ children, showHeader }) => {
  const [openNav, setOpenNav] = React.useState();

  return (
    <StaticQuery
      query={graphql`
        query siteTitleQuery {
          site {
            siteMetadata {
              title,
              description,
              keywords,
              language,
              web_author,
              robots,
              donations
            }
          }
        }
      `}
      render={data => (
        <Grommet theme={theme}>
          <Helmet
            title={data.site.siteMetadata.title}
            htmlAttributes={{
              lang: data.site.siteMetadata.language,
            }}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: data.site.siteMetadata.keywords },
              { name: 'web_author', content: data.site.siteMetadata.web_author },
              { name: 'robots', content: data.site.siteMetadata.robots },
            ]}
          >
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          </Helmet>
          {/* <Header show={showHeader} siteTitle={data.site.siteMetadata.title} giveUrl={data.site.siteMetadata.donations}/> */}
          <Header background="brand" pad="medium">
            <ResponsiveContext.Consumer>
              {responsive =>
                responsive === 'small' ? (
                  <Button id="menu-button" type="button" onClick={() => setOpenNav(!openNav)}><Icon name="menu"/></Button>
                  // <Menu
                  //   a11yTitle="Navigation Menu"
                  //   icon={<Button id="menu-button" type="button"><Icon name="menu"/></Button>}
                  //   items={[
                  //     {
                  //       label: <Box alignSelf="center"><Link to="/"><Icon name="home"/>{data.site.siteMetadata.title}</Link></Box>,
                  //     },
                  //     {
                  //       label: <Box alignSelf="center"><Link to="/activities"><Icon name="local_activity"/>Activities</Link></Box>,
                  //     },
                  //     {
                  //       label: <Box alignSelf="center"><Link to="/speakers"><Icon name="group"/>Speakers</Link></Box>,
                  //     },
                  //     {
                  //       label: <Box alignSelf="center"><Link to="https://www.google.com/maps/dir//Camp+Lebanon+Retreat+Center,+4464+Emmons+Rd,+Oregonia,+OH+45054/@39.4442621,-84.186648,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8840f26c0df4b0a7:0x6b20972cafa62441!2m2!1d-84.1166079!2d39.4442831"><Icon name="place"/>Directions</Link></Box>,
                  //     },
                  //     {
                  //       label: <Box alignSelf="center"><Link to="/contactus"><Icon name="contact_support"/>Contact Us</Link></Box>,
                  //     },
                  //     {
                  //       label: <Box alignSelf="center"><Link to={data.site.siteMetadata.donations}><Icon name="attach_money"/>Give</Link></Box>,
                  //     },
                  //   ]}
                  ///>
                ) : (
                  <Nav direction="row">
                    <Link to="/">
                      <Icon name="home"/>
                      {data.site.siteMetadata.title}
                    </Link>
                    <Link to="/activities">
                      <Icon name="local_activity"/>
                      Activities
                    </Link>
                    <Link to="/speakers">
                      <Icon name="group"/>
                      Speakers
                    </Link>
                    <Link to="https://www.google.com/maps/dir//Camp+Lebanon+Retreat+Center,+4464+Emmons+Rd,+Oregonia,+OH+45054/@39.4442621,-84.186648,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8840f26c0df4b0a7:0x6b20972cafa62441!2m2!1d-84.1166079!2d39.4442831">
                      <Icon name="place"/>
                      Directions
                    </Link>
                    <Link to="/contactus">
                      <Icon name="contact_support"/>
                      Contact Us
                    </Link>
                    <Link to={data.site.siteMetadata.donations}>
                      <Icon name="attach_money"/>
                      Give
                    </Link>
                  </Nav>
                )
              }
            </ResponsiveContext.Consumer>
          </Header>
          <Main flex direction="row">
            <Box flex align="center" justify="center" pad="small">
              {/* <p className={styles.warning}>
                Due to COVID-19, we understand any hesitation in purchasing tickets. We assure you that we are planning on having this year's event and will follow all state guidelines to keep everyone safe. If for some reason the event is canceled your money will be refunded back to you.
              </p> */}
              <Box>
                <Box>
                <h1><img src={logo} alt="Ohio Christian Men's Fellowship"/></h1>
                {showHeader ?
                    <>
                      <h2>A New Begining</h2>
                      <h3>September 10th &amp; 11th 2021</h3>
                    </>
                :
                  ""
                }
                </Box>
              </Box>
              {children}
            </Box>
            {/* <Collapsible direction="horizontal" open={openNav}> */}
            { openNav && (
                <Layer
                  onEsc={() => setOpenNav(false)}
                  onClickOutside={() => setOpenNav(false)}
                  position="left"
                  animate
                  modal={false}
                  responsive={false}
                >
                  <Box
                    flex
                    width="medium"
                    background="light-2"
                    pad="large"
                    elevation="xlarge"
                    height={{"min": "100vh"}}
                  >
                    <Nav>
                      <Link to="/">
                        <Icon name="home"/>
                        {data.site.siteMetadata.title}
                      </Link>
                      <Link to="/activities">
                        <Icon name="local_activity"/>
                        Activities
                      </Link>
                      <Link to="/speakers">
                        <Icon name="group"/>
                        Speakers
                      </Link>
                      <Link to="https://www.google.com/maps/dir//Camp+Lebanon+Retreat+Center,+4464+Emmons+Rd,+Oregonia,+OH+45054/@39.4442621,-84.186648,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8840f26c0df4b0a7:0x6b20972cafa62441!2m2!1d-84.1166079!2d39.4442831">
                        <Icon name="place"/>
                        Directions
                      </Link>
                      <Link to="/contactus">
                        <Icon name="contact_support"/>
                        Contact Us
                      </Link>
                      <Link to={data.site.siteMetadata.donations}>
                        <Icon name="attach_money"/>
                        Give
                      </Link>
                    </Nav>
                  </Box>
                  </Layer>
                )
              }
            {/* </Collapsible> */}
            
            {/* <div>
              <Button to="/registration" variant="contained"><Icon name="event" variant="dense"/>Register</Button>
            </div> */}
          </Main>
          <Footer background="brand" pad="medium">
            <Text>
              {`“Iron Sharpens Iron, so one man sharpens another.” ~ Proverbs 27:17`}
            </Text>
          </Footer>
        </Grommet>
      )}
    />
  );
};

export default Layout;