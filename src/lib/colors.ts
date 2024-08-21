interface ColorsI {
    primary: ColorI,
    secondary: ColorI,
    tertiary: ColorI,
    quaternary: ColorI
}

interface ColorI {
    normal: string;
    hover: string;
}

export const Colors: ColorsI = {
    primary: {
        normal: "#edd8bb",
        hover: "#CDBFA2"
    },
    secondary: {
        normal: "#e2aa87",
        hover: "#C69577"
    },
    tertiary: {
        normal: "#fef7e1",
        hover: "#E2DCC9"
    },
    quaternary: {
        normal: "#a2d3c7",
        hover: "#8DB7AC"
    }
}

export const Colors2: ColorsI = {
    primary: {
        normal: "#f6eddc",
        hover: "#7f1d1d"
    },
    secondary: {
        normal: "#e3e5d7",
        hover: "#"
    },
    tertiary: {
        normal: "#bdd6d2",
        hover: "#"
    },
    quaternary: {
        normal: "#a5c8ca",
        hover: "#"
    }
}