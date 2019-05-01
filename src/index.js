import React from "react";
import styled from "styled-components";
import { style } from "styled-system";
import camelCase from "camelcase";
// import cssProps from "./cssProps";

const themed = key => props => props.theme[key]

const alignContent = style({
  prop: "alignContent",
  cssProperty: "alignContent"
});
const alignItems = style({
  prop: "alignItems",
  cssProperty: "alignItems"
});
const alignSelf = style({
  prop: "alignSelf",
  cssProperty: "alignSelf"
});
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
const background = style({
  prop: "background",
  cssProperty: "background"
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
const backgroundColor = style({
  prop: "backgroundColor",
  cssProperty: "backgroundColor"
});
const backgroundImage = style({
  prop: "backgroundImage",
  cssProperty: "backgroundImage"
});
const backgroundOrigin = style({
  prop: "backgroundOrigin",
  cssProperty: "backgroundOrigin"
});
const backgroundPosition = style({
  prop: "backgroundPosition",
  cssProperty: "backgroundPosition"
});
const backgroundRepeat = style({
  prop: "backgroundRepeat",
  cssProperty: "backgroundRepeat"
});
const backgroundSize = style({
  prop: "backgroundSize",
  cssProperty: "backgroundSize"
});
const border = style({
  prop: "border",
  cssProperty: "border"
});
const borderBottom = style({
  prop: "borderBottom",
  cssProperty: "borderBottom"
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
const borderColor = style({
  prop: "borderColor",
  cssProperty: "borderColor"
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
const borderLeft = style({
  prop: "borderLeft",
  cssProperty: "borderLeft"
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
const borderRadius = style({
  prop: "borderRadius",
  cssProperty: "borderRadius"
});
const borderRight = style({
  prop: "borderRight",
  cssProperty: "borderRight"
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
const borderStyle = style({
  prop: "borderStyle",
  cssProperty: "borderStyle"
});
const borderTop = style({
  prop: "borderTop",
  cssProperty: "borderTop"
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
const borderWidth = style({
  prop: "borderWidth",
  cssProperty: "borderWidth"
});
const bottom = style({
  prop: "bottom",
  cssProperty: "bottom"
});
const boxShadow = style({
  prop: "boxShadow",
  cssProperty: "boxShadow"
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
const color = style({
  prop: "color",
  cssProperty: "color"
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
const display = style({
  prop: "display",
  cssProperty: "display"
});
const emptyCells = style({
  prop: "emptyCells",
  cssProperty: "emptyCells"
});
const filter = style({
  prop: "filter",
  cssProperty: "filter"
});
const flex = style({
  prop: "flex",
  cssProperty: "flex"
});
const flexBasis = style({
  prop: "flexBasis",
  cssProperty: "flexBasis"
});
const flexDirection = style({
  prop: "flexDirection",
  cssProperty: "flexDirection"
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
const flexWrap = style({
  prop: "flexWrap",
  cssProperty: "flexWrap"
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
const fontFamily = style({
  prop: "fontFamily",
  cssProperty: "fontFamily"
});
const fontSize = style({
  prop: "fontSize",
  cssProperty: "fontSize"
});
const fontSizeAdjust = style({
  prop: "fontSizeAdjust",
  cssProperty: "fontSizeAdjust"
});
const fontStretch = style({
  prop: "fontStretch",
  cssProperty: "fontStretch"
});
const fontStyle = style({
  prop: "fontStyle",
  cssProperty: "fontStyle"
});
const fontVariant = style({
  prop: "fontVariant",
  cssProperty: "fontVariant"
});
const fontWeight = style({
  prop: "fontWeight",
  cssProperty: "fontWeight"
});
const hangingPunctuation = style({
  prop: "hangingPunctuation",
  cssProperty: "hangingPunctuation"
});
const height = style({
  prop: "height",
  cssProperty: "height"
});
const justifyContent = style({
  prop: "justifyContent",
  cssProperty: "justifyContent"
});
const keyframes = style({
  prop: "keyframes",
  cssProperty: "@keyframes"
});
const left = style({
  prop: "left",
  cssProperty: "left"
});
const letterSpacing = style({
  prop: "letterSpacing",
  cssProperty: "letterSpacing"
});
const lineHeight = style({
  prop: "lineHeight",
  cssProperty: "lineHeight"
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
const margin = style({
  prop: "margin",
  cssProperty: "margin"
});
const marginBottom = style({
  prop: "marginBottom",
  cssProperty: "marginBottom"
});
const marginLeft = style({
  prop: "marginLeft",
  cssProperty: "marginLeft"
});
const marginRight = style({
  prop: "marginRight",
  cssProperty: "marginRight"
});
const marginTop = style({
  prop: "marginTop",
  cssProperty: "marginTop"
});
const maxHeight = style({
  prop: "maxHeight",
  cssProperty: "maxHeight"
});
const maxWidth = style({
  prop: "maxWidth",
  cssProperty: "maxWidth"
});
const media = style({
  prop: "media",
  cssProperty: "@media"
});
const minHeight = style({
  prop: "minHeight",
  cssProperty: "minHeight"
});
const minWidth = style({
  prop: "minWidth",
  cssProperty: "minWidth"
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
const opacity = style({
  prop: "opacity",
  cssProperty: "opacity"
});
const order = style({
  prop: "order",
  cssProperty: "order"
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
const overflow = style({
  prop: "overflow",
  cssProperty: "overflow"
});
const overflowX = style({
  prop: "overflowX",
  cssProperty: "overflowX"
});
const overflowY = style({
  prop: "overflowY",
  cssProperty: "overflowY"
});
const padding = style({
  prop: "padding",
  cssProperty: "padding"
});
const paddingBottom = style({
  prop: "paddingBottom",
  cssProperty: "paddingBottom"
});
const paddingLeft = style({
  prop: "paddingLeft",
  cssProperty: "paddingLeft"
});
const paddingRight = style({
  prop: "paddingRight",
  cssProperty: "paddingRight"
});
const paddingTop = style({
  prop: "paddingTop",
  cssProperty: "paddingTop"
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
const position = style({
  prop: "position",
  cssProperty: "position"
});
const quotes = style({
  prop: "quotes",
  cssProperty: "quotes"
});
const resize = style({
  prop: "resize",
  cssProperty: "resize"
});
const right = style({
  prop: "right",
  cssProperty: "right"
});
const tabSize = style({
  prop: "tabSize",
  cssProperty: "tabSize"
});
const tableLayout = style({
  prop: "tableLayout",
  cssProperty: "tableLayout"
});
const textAlign = style({
  prop: "textAlign",
  cssProperty: "textAlign"
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
const top = style({
  prop: "top",
  cssProperty: "top"
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
const verticalAlign = style({
  prop: "verticalAlign",
  cssProperty: "verticalAlign"
});
const visibility = style({
  prop: "visibility",
  cssProperty: "visibility"
});
const whiteSpace = style({
  prop: "whiteSpace",
  cssProperty: "whiteSpace"
});
const width = style({
  prop: "width",
  cssProperty: "width"
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
const zIndex = style({
  prop: "zIndex",
  cssProperty: "zIndex"
});
const Div = styled('div')(
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
  backgroundColor,
  backgroundImage,
  backgroundOrigin,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  border,
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
  hangingPunctuation,
  height,
  justifyContent,
  keyframes,
  left,
  letterSpacing,
  lineHeight,
  listStyle,
  listStyleImage,
  listStylePosition,
  listStyleType,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
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
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
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
  themed('Div')
);

// export { cssProps };
export default Div;
