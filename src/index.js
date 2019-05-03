import React from "react";
import styled, { ThemeProvider, createGlobalStyle, css } from "styled-components";
import {
  style,
  space,
  color,
  display,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  width,
  height,
  flex,
  order,
  flexWrap,
  flexDirection,
  flexBasis,
  alignItems,
  alignContent,
  alignSelf,
  justifyItems,
  justifyContent,
  justifySelf,
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
  fontSize,
  fontFamily,
  fontWeight,
  fontStyle,
  textAlign,
  lineHeight,
  letterSpacing,
  border,
  borders,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  buttonStyle,
  boxShadow,
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  overflow,
  position,
  top,
  right,
  bottom,
  left,
  zIndex,
  textStyle,
  colorStyle,
  size,
  verticalAlign,
  variant
} from "styled-system";
import {normalize} from "./normalize/normalize"
import {normalizeOpenType} from "./normalizeOpenType/normalizeOpenType"

const themed = key => props => props.theme[key];

const all = style({
  prop: "all",
  cssProperty: "all"
});
const animation = style({
  prop: "animation",
  cssProperty: "animation"
});
const animationDelay = style({
  prop: "animationDelay",
  cssProperty: "animationDelay"
});
const animationDirection = style({
  prop: "animationDirection",
  cssProperty: "animationDirection"
});
const animationDuration = style({
  prop: "animationDuration",
  cssProperty: "animationDuration"
});
const animationFillMode = style({
  prop: "animationFillMode",
  cssProperty: "animationFillMode"
});
const animationIterationCount = style({
  prop: "animationIterationCount",
  cssProperty: "animationIterationCount"
});
const animationName = style({
  prop: "animationName",
  cssProperty: "animationName"
});
const animationPlayState = style({
  prop: "animationPlayState",
  cssProperty: "animationPlayState"
});
const animationTimingFunction = style({
  prop: "animationTimingFunction",
  cssProperty: "animationTimingFunction"
});
const backfaceVisibility = style({
  prop: "backfaceVisibility",
  cssProperty: "backfaceVisibility"
});
const backgroundAttachment = style({
  prop: "backgroundAttachment",
  cssProperty: "backgroundAttachment"
});
const backgroundBlendMode = style({
  prop: "backgroundBlendMode",
  cssProperty: "backgroundBlendMode"
});
const backgroundClip = style({
  prop: "backgroundClip",
  cssProperty: "backgroundClip"
});
const backgroundOrigin = style({
  prop: "backgroundOrigin",
  cssProperty: "backgroundOrigin"
});
const borderBottomColor = style({
  prop: "borderBottomColor",
  cssProperty: "borderBottomColor"
});
const borderBottomLeftRadius = style({
  prop: "borderBottomLeftRadius",
  cssProperty: "borderBottomLeftRadius"
});
const borderBottomRightRadius = style({
  prop: "borderBottomRightRadius",
  cssProperty: "borderBottomRightRadius"
});
const borderBottomStyle = style({
  prop: "borderBottomStyle",
  cssProperty: "borderBottomStyle"
});
const borderBottomWidth = style({
  prop: "borderBottomWidth",
  cssProperty: "borderBottomWidth"
});
const borderCollapse = style({
  prop: "borderCollapse",
  cssProperty: "borderCollapse"
});
const borderImage = style({
  prop: "borderImage",
  cssProperty: "borderImage"
});
const borderImageOutset = style({
  prop: "borderImageOutset",
  cssProperty: "borderImageOutset"
});
const borderImageRepeat = style({
  prop: "borderImageRepeat",
  cssProperty: "borderImageRepeat"
});
const borderImageSlice = style({
  prop: "borderImageSlice",
  cssProperty: "borderImageSlice"
});
const borderImageSource = style({
  prop: "borderImageSource",
  cssProperty: "borderImageSource"
});
const borderImageWidth = style({
  prop: "borderImageWidth",
  cssProperty: "borderImageWidth"
});
const borderLeftColor = style({
  prop: "borderLeftColor",
  cssProperty: "borderLeftColor"
});
const borderLeftStyle = style({
  prop: "borderLeftStyle",
  cssProperty: "borderLeftStyle"
});
const borderLeftWidth = style({
  prop: "borderLeftWidth",
  cssProperty: "borderLeftWidth"
});
const borderRightColor = style({
  prop: "borderRightColor",
  cssProperty: "borderRightColor"
});
const borderRightStyle = style({
  prop: "borderRightStyle",
  cssProperty: "borderRightStyle"
});
const borderRightWidth = style({
  prop: "borderRightWidth",
  cssProperty: "borderRightWidth"
});
const borderSpacing = style({
  prop: "borderSpacing",
  cssProperty: "borderSpacing"
});
const borderTopColor = style({
  prop: "borderTopColor",
  cssProperty: "borderTopColor"
});
const borderTopLeftRadius = style({
  prop: "borderTopLeftRadius",
  cssProperty: "borderTopLeftRadius"
});
const borderTopRightRadius = style({
  prop: "borderTopRightRadius",
  cssProperty: "borderTopRightRadius"
});
const borderTopStyle = style({
  prop: "borderTopStyle",
  cssProperty: "borderTopStyle"
});
const borderTopWidth = style({
  prop: "borderTopWidth",
  cssProperty: "borderTopWidth"
});
const boxSizing = style({
  prop: "boxSizing",
  cssProperty: "boxSizing"
});
const captionSide = style({
  prop: "captionSide",
  cssProperty: "captionSide"
});
const clear = style({
  prop: "clear",
  cssProperty: "clear"
});
const clip = style({
  prop: "clip",
  cssProperty: "clip"
});
const columnCount = style({
  prop: "columnCount",
  cssProperty: "columnCount"
});
const columnFill = style({
  prop: "columnFill",
  cssProperty: "columnFill"
});
const columnGap = style({
  prop: "columnGap",
  cssProperty: "columnGap"
});
const columnRule = style({
  prop: "columnRule",
  cssProperty: "columnRule"
});
const columnRuleColor = style({
  prop: "columnRuleColor",
  cssProperty: "columnRuleColor"
});
const columnRuleStyle = style({
  prop: "columnRuleStyle",
  cssProperty: "columnRuleStyle"
});
const columnRuleWidth = style({
  prop: "columnRuleWidth",
  cssProperty: "columnRuleWidth"
});
const columnSpan = style({
  prop: "columnSpan",
  cssProperty: "columnSpan"
});
const columnWidth = style({
  prop: "columnWidth",
  cssProperty: "columnWidth"
});
const columns = style({
  prop: "columns",
  cssProperty: "columns"
});
const content = style({
  prop: "content",
  cssProperty: "content"
});
const counterIncrement = style({
  prop: "counterIncrement",
  cssProperty: "counterIncrement"
});
const counterReset = style({
  prop: "counterReset",
  cssProperty: "counterReset"
});
const cursor = style({
  prop: "cursor",
  cssProperty: "cursor"
});
const direction = style({
  prop: "direction",
  cssProperty: "direction"
});
const emptyCells = style({
  prop: "emptyCells",
  cssProperty: "emptyCells"
});
const filter = style({
  prop: "filter",
  cssProperty: "filter"
});
const flexFlow = style({
  prop: "flexFlow",
  cssProperty: "flexFlow"
});
const flexGrow = style({
  prop: "flexGrow",
  cssProperty: "flexGrow"
});
const flexShrink = style({
  prop: "flexShrink",
  cssProperty: "flexShrink"
});
const float = style({
  prop: "float",
  cssProperty: "float"
});
const font = style({
  prop: "font",
  cssProperty: "font"
});
const fontFace = style({
  prop: "fontFace",
  cssProperty: "@fontFace"
});
const fontSizeAdjust = style({
  prop: "fontSizeAdjust",
  cssProperty: "fontSizeAdjust"
});
const fontStretch = style({
  prop: "fontStretch",
  cssProperty: "fontStretch"
});
const fontVariant = style({
  prop: "fontVariant",
  cssProperty: "fontVariant"
});
const hangingPunctuation = style({
  prop: "hangingPunctuation",
  cssProperty: "hangingPunctuation"
});
const keyframes = style({
  prop: "keyframes",
  cssProperty: "@keyframes"
});
const listStyle = style({
  prop: "listStyle",
  cssProperty: "listStyle"
});
const listStyleImage = style({
  prop: "listStyleImage",
  cssProperty: "listStyleImage"
});
const listStylePosition = style({
  prop: "listStylePosition",
  cssProperty: "listStylePosition"
});
const listStyleType = style({
  prop: "listStyleType",
  cssProperty: "listStyleType"
});
const media = style({
  prop: "media",
  cssProperty: "@media"
});
const navDown = style({
  prop: "navDown",
  cssProperty: "navDown"
});
const navIndex = style({
  prop: "navIndex",
  cssProperty: "navIndex"
});
const navLeft = style({
  prop: "navLeft",
  cssProperty: "navLeft"
});
const navRight = style({
  prop: "navRight",
  cssProperty: "navRight"
});
const navUp = style({
  prop: "navUp",
  cssProperty: "navUp"
});
const outline = style({
  prop: "outline",
  cssProperty: "outline"
});
const outlineColor = style({
  prop: "outlineColor",
  cssProperty: "outlineColor"
});
const outlineOffset = style({
  prop: "outlineOffset",
  cssProperty: "outlineOffset"
});
const outlineStyle = style({
  prop: "outlineStyle",
  cssProperty: "outlineStyle"
});
const outlineWidth = style({
  prop: "outlineWidth",
  cssProperty: "outlineWidth"
});
const overflowX = style({
  prop: "overflowX",
  cssProperty: "overflowX"
});
const overflowY = style({
  prop: "overflowY",
  cssProperty: "overflowY"
});
const pageBreakAfter = style({
  prop: "pageBreakAfter",
  cssProperty: "pageBreakAfter"
});
const pageBreakBefore = style({
  prop: "pageBreakBefore",
  cssProperty: "pageBreakBefore"
});
const pageBreakInside = style({
  prop: "pageBreakInside",
  cssProperty: "pageBreakInside"
});
const perspective = style({
  prop: "perspective",
  cssProperty: "perspective"
});
const perspectiveOrigin = style({
  prop: "perspectiveOrigin",
  cssProperty: "perspectiveOrigin"
});
const quotes = style({
  prop: "quotes",
  cssProperty: "quotes"
});
const resize = style({
  prop: "resize",
  cssProperty: "resize"
});
const tabSize = style({
  prop: "tabSize",
  cssProperty: "tabSize"
});
const tableLayout = style({
  prop: "tableLayout",
  cssProperty: "tableLayout"
});
const textAlignLast = style({
  prop: "textAlignLast",
  cssProperty: "textAlignLast"
});
const textDecoration = style({
  prop: "textDecoration",
  cssProperty: "textDecoration"
});
const textDecorationColor = style({
  prop: "textDecorationColor",
  cssProperty: "textDecorationColor"
});
const textDecorationLine = style({
  prop: "textDecorationLine",
  cssProperty: "textDecorationLine"
});
const textDecorationStyle = style({
  prop: "textDecorationStyle",
  cssProperty: "textDecorationStyle"
});
const textIndent = style({
  prop: "textIndent",
  cssProperty: "textIndent"
});
const textJustify = style({
  prop: "textJustify",
  cssProperty: "textJustify"
});
const textOverflow = style({
  prop: "textOverflow",
  cssProperty: "textOverflow"
});
const textShadow = style({
  prop: "textShadow",
  cssProperty: "textShadow"
});
const textTransform = style({
  prop: "textTransform",
  cssProperty: "textTransform"
});
const transform = style({
  prop: "transform",
  cssProperty: "transform"
});
const transformOrigin = style({
  prop: "transformOrigin",
  cssProperty: "transformOrigin"
});
const transformStyle = style({
  prop: "transformStyle",
  cssProperty: "transformStyle"
});
const transition = style({
  prop: "transition",
  cssProperty: "transition"
});
const transitionDelay = style({
  prop: "transitionDelay",
  cssProperty: "transitionDelay"
});
const transitionDuration = style({
  prop: "transitionDuration",
  cssProperty: "transitionDuration"
});
const transitionProperty = style({
  prop: "transitionProperty",
  cssProperty: "transitionProperty"
});
const transitionTimingFunction = style({
  prop: "transitionTimingFunction",
  cssProperty: "transitionTimingFunction"
});
const unicodeBidi = style({
  prop: "unicodeBidi",
  cssProperty: "unicodeBidi"
});
const visibility = style({
  prop: "visibility",
  cssProperty: "visibility"
});
const whiteSpace = style({
  prop: "whiteSpace",
  cssProperty: "whiteSpace"
});
const wordBreak = style({
  prop: "wordBreak",
  cssProperty: "wordBreak"
});
const wordSpacing = style({
  prop: "wordSpacing",
  cssProperty: "wordSpacing"
});
const wordWrap = style({
  prop: "wordWrap",
  cssProperty: "wordWrap"
});

const hoverState = variant({
  prop: "hover",
  key: "hover"
});

const Div = styled("div")(
  alignContent,
  alignItems,
  alignSelf,
  all,
  animation,
  animationDelay,
  animationDirection,
  animationDuration,
  animationFillMode,
  animationIterationCount,
  animationName,
  animationPlayState,
  animationTimingFunction,
  backfaceVisibility,
  background,
  backgroundAttachment,
  backgroundBlendMode,
  backgroundClip,
  backgroundImage,
  backgroundOrigin,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  border,
  borders,
  borderBottom,
  borderBottomColor,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderBottomStyle,
  borderBottomWidth,
  borderCollapse,
  borderColor,
  borderImage,
  borderImageOutset,
  borderImageRepeat,
  borderImageSlice,
  borderImageSource,
  borderImageWidth,
  borderLeft,
  borderLeftColor,
  borderLeftStyle,
  borderLeftWidth,
  borderRadius,
  borderRight,
  borderRightColor,
  borderRightStyle,
  borderRightWidth,
  borderSpacing,
  borderStyle,
  borderTop,
  borderTopColor,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderTopStyle,
  borderTopWidth,
  borderWidth,
  bottom,
  boxShadow,
  boxSizing,
  captionSide,
  clear,
  clip,
  color,
  columnCount,
  columnFill,
  columnGap,
  columnRule,
  columnRuleColor,
  columnRuleStyle,
  columnRuleWidth,
  columnSpan,
  columnWidth,
  columns,
  content,
  counterIncrement,
  counterReset,
  cursor,
  direction,
  display,
  emptyCells,
  filter,
  flex,
  flexBasis,
  flexDirection,
  flexFlow,
  flexGrow,
  flexShrink,
  flexWrap,
  float,
  font,
  fontFace,
  fontFamily,
  fontSize,
  fontSizeAdjust,
  fontStretch,
  fontStyle,
  fontVariant,
  fontWeight,
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
  hangingPunctuation,
  height,
  justifyContent,
  justifyItems,
  justifySelf,
  keyframes,
  left,
  letterSpacing,
  lineHeight,
  listStyle,
  listStyleImage,
  listStylePosition,
  listStyleType,
  space,
  size,
  maxHeight,
  maxWidth,
  media,
  minHeight,
  minWidth,
  navDown,
  navIndex,
  navLeft,
  navRight,
  navUp,
  opacity,
  order,
  outline,
  outlineColor,
  outlineOffset,
  outlineStyle,
  outlineWidth,
  overflow,
  overflowX,
  overflowY,
  pageBreakAfter,
  pageBreakBefore,
  pageBreakInside,
  perspective,
  perspectiveOrigin,
  position,
  quotes,
  resize,
  right,
  tabSize,
  tableLayout,
  textAlign,
  textAlignLast,
  textDecoration,
  textDecorationColor,
  textDecorationLine,
  textDecorationStyle,
  textIndent,
  textJustify,
  textOverflow,
  textShadow,
  textTransform,
  top,
  transform,
  transformOrigin,
  transformStyle,
  transition,
  transitionDelay,
  transitionDuration,
  transitionProperty,
  transitionTimingFunction,
  unicodeBidi,
  verticalAlign,
  visibility,
  whiteSpace,
  width,
  wordBreak,
  wordSpacing,
  wordWrap,
  zIndex,
  textStyle,
  colorStyle,
  buttonStyle,
  hoverState,
  themed("Div")
);


const bootstrap = {
  space: [0, "0.25rem", "0.5rem", "1rem", "1.5rem", "3rem"],
  fontSizes: ["1rem","1.25rem","1.5rem","1.75rem","2rem","2.5rem","3rem","3.5rem","4rem","4.5rem","5rem","5.5rem","6rem"],
  hover: {
    dim: {
      opacity: '1',
      transition: "opacity .15s ease-in",
      "&:hover,&:focus": {
        opacity: '0.5',
        transition: "opacity .15s ease-in"
      },
      "&:active": {
        opacity: '0.8',
        transition: "opacity .15s ease-in"
      }
    }
  }
};
export const Normalize = createGlobalStyle`${normalize}`;
export const NormalizeOpenType = createGlobalStyle`${normalizeOpenType}`;
export { ThemeProvider, bootstrap };
export default Div;
