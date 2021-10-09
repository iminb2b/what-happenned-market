const Theme = {
    colors: {
        black: "#1a1a1a",
        white: "#ffffff",
        orange: "#ea4913",
        carrot: "#f96400",
        blue: "#0565bb",
        yellow: "#fcd32a",
        lightOrange: "#ff5500",
        gray: "#c0c0c0"
    },
    fonts: {
        english: ["Montserrat", "sans-serif"],
        korean: ["noto-sans-cjk-kr", "sans-serif"]
    },
    fontSizes: {
        extraSmall: "14px",
        small: "20px",
        medium: "45px",
        large: "50px"
    },
    fontWeight: {
        regular: "400",
        bold: "800"
    },
    textSmallBold: [
        `font-size: Montserrat, sans-serif; 
        font-weight: 800;
        margin:20px 0;
        font-size: 20px;
        line-height: 25px;
        `]
    ,
    textSmallRegular: [
        `font-size: Montserrat, sans-serif; 
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        `]
    ,
    textExtraSmallRegular: [
        `font-size: Montserrat, sans-serif; 
        font-weight: 400;
        font-size: 14px;
        line-height: 30px;
        `]
    ,
    textExtraSmallBold: [
        `font-size: Montserrat, sans-serif; 
        font-weight: 800;
        font-size: 16px;
        line-height: 20px;
        `]
    ,
    textMediumBold: [
        `font-size: Montserrat, sans-serif; 
        font-weight: 800;
        font-size: 25px;
        margin:20px 0;
        line-height: 60px;
        `]
    ,
    textLargeBold: [
        `font-size: Montserrat, sans-serif; 
        font-weight: 800;
        font-size: 50px;
        line-height: 60px;
        margin:20px 0;
        letter-spacing: 5px;
        `]
    ,


}

export default Theme;