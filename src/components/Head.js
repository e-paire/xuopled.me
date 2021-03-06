import React, {PropTypes} from "react"

const Head = ({title}) => (
  <head>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <link href="https://npmcdn.com/basscss-basic@1.0.0/index.css" rel="stylesheet" />
    <link href="https://npmcdn.com/basscss@8.0.0/css/basscss.min.css" rel="stylesheet" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="/assets/css/index.css" rel="stylesheet" />
  </head>
)

Head.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Head
