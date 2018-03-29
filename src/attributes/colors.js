import palx from "palx";

const palette = palx("#268EC6");

const { black: text, gray: grey, base: blue } = palette;

const colors = {
  // blue: "#268EC6",
  blue,
  // orange: "#ff5726",
  // yellow: "#ffc426",
  // green: "#1fd172",
  // purple: "#3645cf",
  // red: "#ff2626",

  orange: palette.orange[4],
  yellow: palette.yellow[4],
  green: palette.green[4],
  purple: palette.violet[4],
  red: palette.red[4],

  blue7: palette.blue[7],
  blue9: palette.blue[9],

  /*grey1: "#f8f9f8",
  grey2: "#eaeeeb",
  grey3: "#dae2dd",
  grey4: "#cad5cd",
  grey5: "#b8c7bc",
  grey6: "#a4b7a9",
  grey7: "#8da594",
  grey8: "#71907a",
  grey9: "#597160",
  grey10: "#344238",*/
  // grey1: "#f8f9f9",
  // grey2: "#ebedef",
  // grey3: "#dde1e3",
  // grey4: "#cdd3d7",
  // grey5: "#bcc5c9",
  // grey6: "#a9b4ba",
  // grey7: "#94a1a9",
  // grey8: "#7b8b95",
  // grey9: "#5d6e78",
  // grey10: "#364046",
  grey1: grey[0],
  grey2: grey[1],
  grey3: grey[2],
  grey4: grey[3],
  // text: "#344238"
  text
};

export default colors;
