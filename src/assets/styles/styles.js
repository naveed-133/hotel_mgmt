import styled from "@emotion/styled";
import { css } from "@emotion/react";


export const LandingPageItem = styled.div`
  position: absolute;
  top: 13.38rem;
  left: 7.75rem;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    rgba(152, 3, 250, 0.26),
    rgba(248, 6, 250, 0.12)
  );
  filter: blur(147px);
  width: 12.75rem;
  height: 11.63rem;
`;

export const BlurredBackground = styled.div`
  position: absolute;
  width: 28.1875rem;
  height: 25.6875rem;
  flex-shrink: 0;
  border-radius: 28.1875rem;
  background: linear-gradient(180deg, rgba(152, 3, 250, 0.26) 0%, rgba(248, 6, 250, 0.12) 100%);
  filter: blur(24px);
  z-index: -1;
`;

export const NavBarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const CornucopiaIcon = styled.img`
  margin-top: 1.5rem;
  width: 15.13rem;
  height: 3.69rem;
  object-fit: cover;
`;
export const FlexDiv = styled.div`
  display: flex;
`;
export const NavAnchorTag = styled.a`
  text-decoration: none;
  height: 1.1875rem; 
  color: rgb(111, 111, 111);
  margin-right: ${(props) => props.marginRight || '0px'};
  &:hover {
   color: #9803fa;
  }
`;
export const LoginBtn = styled.button` 
  color: rgb(111, 111, 111);
  display: contents;
  &:hover {
    color: #9803fa;
  } 
`;
export const JoinTheVentureBtn = styled.button`
  display: flex;
  border-radius: 4px;
  border: 1px solid #9803fa;
  width: 10.13rem;
  height: 2.25rem;
  background-color: transparent;
  color:#9803fa;
  align-items: center;
  margin-left:2rem; 
  margin-top:2rem;
  gap:0.5rem;
  justify-content: center;
  transition: background-color 0.3s ease;
  &:hover {
    color: #fff;
    background-color: #9803fa;
  }
`;
export const NavDropdown = styled.div`
  display: block;
  position: absolute;
  right: 2rem;
  top: 3.6rem;
  width: 250px;
  background: #FFF;
  border: 1px solid #3F0065;
  border-radius: 15px;
  overflow: hidden;
  transition: height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;
export const NavDropdownItem = styled.li`
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.10);
`;
export const FooterSecondaryDiv = styled.div`
  width: 100%;
  height: 3.9375rem;
  flex-shrink: 0;
  background: #630078;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
`;
export const FooterSecondaryText = styled.h3`
  color: #FFF;
  font-family: Poppins;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem;
`;
export const FooterLongText = styled.h3`
  color: #000;
  font-family: Poppins;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: 0.9375rem;
  letter-spacing: 0.0825rem;
`;
const FooterTextCommonStyles = css`
  color: #000;
  font-family: Poppins;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem;
`;

export const FooterTextOne = styled.h3`
  ${FooterTextCommonStyles};
`;

export const FooterTextTwo = styled.h3`
  ${FooterTextCommonStyles};
  &:hover {
    color: #9803fa;
  }
`;
export const FooterTextBtn = styled.button`
  display:contents;
  text-align: left
`;
export const DiscoverText = styled.h3`
  color: #4E0081;
  font-family: Zen Dots;
  font-size: 3.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 102.5%;
  letter-spacing: 0.03125rem;
`;
export const AiBoostText = styled.h3`
  color: #7C0097;
  font-family: Zen Dots;
  font-size: 3.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 102.5%;
  letter-spacing: 0.03125rem;
`;
export const LandingPageHomeText = styled.h3`
  color: #626262;
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 128.688%;
  letter-spacing: 0.04rem;
`;
export const AnalyticsText = styled.h3`
  color: #ACA8A8;
  font-family: Poppins;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const ProfileImgText = styled.h3`
  color: #6C6C6C;
  font-family: Poppins;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const ViewProductBtn = styled.button`
 z-index: 1;
  border-radius: 1.125rem;
  border: 1px solid #9803FA;
  color: #9803FA;
  font-family: Poppins;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 10.125rem;
  height: 2.25rem; 
  background-color: transparent;
  transition: background-color 0.5s ease;
  &:hover {
    color: white;
    background-color: #9803FA;
  }  
`;
export const DiscoverImg = styled.img`
  width: 26.75rem;
  height: 20.0625rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  box-shadow: 0px 0px 10px 1px rgba(152, 3, 250, 0.13);
`;
export const AnalystImg = styled.img`
  width: 7.3125rem;
  height: 6.375rem;
  border-radius: 0.3125rem;
`;
export const AnalystText = styled.h3`
  color: #7300BE;
  font-family: Poppins;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  margin-bottom: 0px;
`;
export const UserCenteredText = styled.h3`
  color: #2D2D2D;
  font-family: Poppins;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  margin-bottom: 0px;
`;
export const AnalystLongText = styled.h3`
  width: 11.125rem;
  color: #757474;
  font-family: Poppins;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 0px;
`;
export const InputFilterDiv = styled.div`
  display: flex;
  padding-top: 5.62rem;
  padding-left: 6.38rem;
  padding-right: 7rem;
`;
export const InputFilter = styled.input`
  width: 100%;
  height: 4.0625rem;
  border-radius: 0.625rem 0rem 0rem 0.625rem;
  border: 1px solid #9D40B1;
  padding-left: 2.06rem;
  background: #FFF;
  color: #646464;
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6875rem;
  &:focus{
    font-weight: bold;
  }
`;
export const InputFilterButton = styled.button`
  width: 4.875rem;
  border-radius: 0rem 0.625rem 0.625rem 0rem;
  background: #9D40B1;
  border: 1px solid #9D40B1;
  cursor:pointer;
`;
export const MagnifyGlassImg = styled.img`
  width: 2.1875rem;
  height: 2.1875rem;
`;
export const TrendingProductsText = styled.h3`
  color: #4E0081;
  font-family: Poppins;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 0px;
`;
export const AiProductsText = styled.h3`
  color: #9C9C9C;
  font-family: Poppins;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 0px;
`;
export const ViewBtn = styled.button`
  width: 5.75rem;
  height: 2.1875rem;
  border-radius: 0.3125rem;
  color: #9D40B1;
  text-align: center;
  font-family: Poppins;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: 1px solid #4E00816B;
  background: transparent;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #9D40B1;
    color: white;
  }  
  z-index: 1;
`;
export const TrendProductTitle = styled.h3`
  color: #656565;
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 0px;
`;
export const TrendProductsText = styled.h3`
  color: #656565;
  font-family: Poppins;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 137.188%;
  letter-spacing: 0.00438rem;
  margin-bottom: 0px;
  width: 13.75rem;
`;
export const LoginHeading = styled.h1`
  color: #6D0085;
  font-family: Gothic A1;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 100.187%; 
`;
export const LoginText = styled.h3`
  color: #58006B;
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100.187%;
`;
export const LoginBox = styled.div`
  height: 760px;
  width: 36.4375rem;
  border-radius: 0.625rem;
  background: #FFF;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.25);
`;
export const LoginBoxHeader = styled.h3`
  color: #4E0081;
  font-family: Zen Dots;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 102.5%;
  letter-spacing: 0.01563rem;
`;
export const LoginBoxText = styled.h3`
  color: #780093;
  font-family: Poppins;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const LoginBottomText = styled.h5`
  color: #58006B;
  font-family: Poppins;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    text-decoration: underline;
  }  
`;
export const LoginBoxBtn = styled.button`
  width: 21.625rem;
  height: 2.8125rem;
  border-radius: 0.375rem;
  background: #3F0065;
  margin-top:5rem;
  text-align:center;
  color: #FFF;
  font-family: Poppins;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: 1px solid #3F0065; 
  transition: background-color 0.3s ease;
  &:hover {
    color: #3F0065;
    background: #FFF;
  }      
`;
export const OrText = styled.h3`
  color: #BDBDBD;
  font-family: Poppins;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const ContinueSignText = styled.h3`
  color: #737373;
  font-family: Poppins;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top:1.5rem;
  text-align:center;
`;
export const ContentButton = styled.button`
  display: contents;
`;
export const LoginPageBlur = styled.div`
  position: absolute;
  top: 13.38rem;
  left: 7.75rem;
  border-radius: 20.4375rem;
  background: linear-gradient(180deg, rgba(152, 3, 250, 0.26) 0%, rgba(248, 6, 250, 0.12) 100%);
  filter: blur(132px);
  width: 20.4375rem;
  height: 7.75rem;
`;
export const SellerSignUpHeader = styled.h1`
  color: #3F0065;
  font-family: Gothic A1;
  font-size: 2.8125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 113.687%;
`;
export const SellerSignUpText = styled.h1`
  color: #6D0085;
  font-family: Poppins;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const SignUpPageBlur = styled.div`
  position: absolute;
  top: 13.38rem;
  left: 7.75rem;
  border-radius: 21.375rem;
  background: linear-gradient(180deg, rgba(152, 3, 250, 0.26) 0%, rgba(248, 6, 250, 0.12) 100%);
  filter: blur(132px);
  width: 21.375rem;
  height: 10.8125rem;
`;

export const CheckBoxLabel = styled.div`
  color: #58006B;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;



export const BuyerSellerRect = styled.div`
border-radius: 1.3125rem;
border: 1px solid #B9B9B9;
box-shadow: 0px 0px 4px 1px #D4D4D4;
width: 53.6875rem;
height: 48.125rem;
flex-shrink: 0;
`;

export const Boundless = styled.div`
color: #6D0085;
text-align: center;
font-family: Poppins;
font-size: 2.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`;

export const SelectAccount = styled.div`
color: #9D33B4;
font-family: Poppins;
font-size: 1.5rem;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: 2.5rem;
text-align: left;
`;

export const Morbi = styled.div`
color: #676767;
font-family: Poppins;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const SavvyShopper = styled.div`
color: #9600AF;
font-family: Poppins;
font-size: 1.375rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const ImageStyle = styled.div`
 height: '1rem';
    width: 'auto';
    marginRight: theme.spacing(1);
`;

export const ButtonStyle = styled.div`
color: #FFF;
font-family: Poppins;
font-size: 1.25rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`;
export const Container = styled.div`
display: 'flex';
    flexDirection: 'column'; 
    alignItems: 'center';
    gap: theme.spacing(2);
    border: '5px solid #e0e0e0';
`;

export const CardStyle = styled.div`
height: '6rem'; 
cursor: 'pointer';
`;


export const AlreadyAccount = styled.div`
color: #797979;
font-family: Poppins;
font-size: 1.25rem;
font-style: normal;
font-weight: 400;
line-height: normal;
display:flex;
justify-content:center;
align-items:center;
`;

export const LogIn = styled.div`
color: #9D40B1;
font-family: Poppins;
font-size: 1.25rem;
font-style: normal;
font-weight: 400;
line-height: normal;
whiteSpace: nowrap;
`;

export const TwoFactor = styled.div`
color: #6D0085;
text-align: center;
font-family: Poppins;

font-style: normal;
font-weight: 600;
line-height: normal;
`;

export const Authentication = styled.div`
color: #B500D3;
font-family: Poppins;

font-style: normal;
font-weight: 600;
line-height: normal;
`;

export const ToSignIn = styled.div`
color: #676767;
font-family: Poppins;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const GetTwoFa = styled.div`
color: #6A007C;
font-family: Poppins;
font-size: 1.25rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`; 

export const EnterCode = styled.div`
color: #676767;
font-family: Poppins;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const SidebarDiv = styled.div`
  position: fixed;
  width: 13.3125rem;
  background: #FDFDFD;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.19); 
  height:100vh; 
`;

export const MobileSidebarDiv = styled.div`
  position: fixed;
  width: 100%;
  height:4rem;
  background: #FDFDFD;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index:12;
`;


export const SidebarBtn = styled.button`
  width: 11.4375rem;
  height: 2.6875rem;
  border-radius: 1.40625rem;
  border: transparent;
  background: transparent;
  transition: all 0.5s;
`;

export const SidebarText = styled.h1`
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SidebarBtnBottom = styled.button`
  position: fixed;
  left: 0; 
  right: 0; 
  bottom: 0;
  margin-bottom: 20px;
  width: 11.4375rem;
  height: 2.6875rem;
  border-radius: 1.40625rem;
  border: transparent;
`;

export const SellerProfileDiv = styled.div`
  border-radius: 1.40625rem;
  background: #F9F9F9;
`;

export const VerticalLine = styled.div`
  width: 1.4375rem;
  height: 0rem;
  transform: rotate(-90deg);
  stroke-width: 1px;
  stroke: #A5A5A5;
`;

export const AnalystDiv = styled.div`
  display: flex;
  width: 22.625rem;
  height: 9.7rem;
  border-radius: 0.5rem;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const TermsAndConditionText = styled.div`
  color: #656565;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;

export const TermsAndConditionDiv = styled.div`
  padding: 0.5625rem;
  border-radius: 0.5rem;
  height:12rem;
  width: 100%;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  overflow-y: scroll;
`;
