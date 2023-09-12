const baseLayout = {
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  expand: {
    width: '100%',
    height: '100%'
  },
  square: (size) => ({
    width: size,
    height: size
  })
};

const layout = {
  ...baseLayout,
  rowCenter: {
    ...baseLayout.row,
    justifyContent: 'center',
    alignItems: 'center'
  },
  columnCenter: {
    ...baseLayout.column,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowStart: {
    ...baseLayout.row,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  columnStart: {
    ...baseLayout.column,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  columnEnd: {
    ...baseLayout.column,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  rowEnd: {
    ...baseLayout.row,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  rowBetween: {
    ...baseLayout.row,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  columnBetween: {
    ...baseLayout.column,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rowAround: {
    ...baseLayout.row,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  columnAround: {
    ...baseLayout.column,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
};

export default layout;
