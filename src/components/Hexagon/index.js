import React, {PropTypes} from "react"

import styles from "./index.css"

const Hexagon = ({children, href, target, ...props}) => {
  const polygon = <polygon points="130,0 260,75 260,225 130,300 0,225 0,75" {...props} />
  return (
    <svg className={styles.svg} height="300" width="260" viewBox="-1 0 262 300">
      {href
        ? <a xlinkHref={href} target={target}>
            {polygon}
            {children}
          </a>
        : <g>
            {polygon}
            {children}
          </g>
      }
    </svg>
  )
}

Hexagon.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  target: PropTypes.string,
}

export default Hexagon
