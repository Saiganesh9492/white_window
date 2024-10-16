import React from 'react'
import { color, fontFaimly } from '../staticdata/webData'

const HistoryHeading = () => {
  return (
    <div
      style={{
        color: color.quoteHeading,
        fontSize: '300%',
        fontWeight: 'bold',
        fontFamily: fontFaimly.font
      }}
    >History</div>
  )
}

export default HistoryHeading