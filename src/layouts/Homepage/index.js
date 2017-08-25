import React, {Component} from "react"
import Hexagon from "../../components/Hexagon"
// import Hexagon from "react-hexagon"
import styles from "./index.css"

class Homepage extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.hexagons}>
          <div className={styles.hexagon}>
            <Hexagon>
              <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" transform="translate(70, 90) scale(5)" strokeWidth="1">
                <path d="M4 8.5h19.5M4 6.5h2.5m14 13l-8.5 4-8.5-4v-15l8.5-4 8.5 4zm-20-4l3 2v-6h-3zm20 2l3-2v-4h-3z" />
                <path d="M8.5 18l3.5 1.5 3.5-1.5m0-6.5v3m-7-3v3" />
              </g>
            </Hexagon>
          </div>
          <div className={styles.hexagon}>
            <Hexagon href="http://www.xuopled.blog" target="_blank">
              <text x="50%" y="40%">Blog</text>
              <g transform="translate(95, 150) scale(3)" strokeWidth="1">
                <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M10.5 22.5H.5v-20h15v15z" />
                <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M10.5 22.5v-5h5M3.5 7L5 8.5l2.5-3M3.5 12.5L5 14l2.5-3M8.5 7.5h4M8.5 13.5h4M17.5 2.5h3v17h-3zM17.5 19.5l1.5 3 1.5-3M17.5 7.5h3M20.5 3.5h3l-1 7 1 1M19 2.5v-1" />
              </g>
            </Hexagon>
          </div>
          <div className={styles.hexagon}>
            <Hexagon href="http://www.xuopled.dev" target="_blank">
              <text x="50%" y="40%">Dev</text>
              <g transform="translate(95, 150) scale(3)" strokeWidth="1">
                <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M13 10.5h-2M3 10.5H.5l2-9h19l2 9H21" />
                <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M.5 23.5l1-3L1 17l1-5h1v4l2-6.5h1.5l-1 6.5L8 10h1.5l-2 7.5L10 16l1 .5-4 5-.5 2M23.5 23.5l-1-3L23 17l-1-5h-1v4l-2-6.5h-1.5l1 6.5-2.5-6h-1.5l2 7.5L14 16l-1 .5 4 5 .5 2M5.5 4.5H6M4.5 6.5H5M8 4.5h.5M7 6.5h.5M10.5 4.5h.5M9.5 6.5h.5M13 4.5h.5M12 6.5h.5M15.5 4.5h.5M14.5 6.5h.5M18 4.5h.5M17 6.5h.5M19.5 6.5h.5" />
              </g>
            </Hexagon>
          </div>
          <div className={styles.hexagon}>
            <Hexagon>
              <text x="50%" y="40%">Photo</text>
              <g transform="translate(95, 150) scale(3)" strokeWidth="1">
                <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M.5 8.5h23v15H.5zM8.5 8.5v15M1.5 5.5h6v3h-6z" />
                <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M16.5 13.5H15L13.5 15v1.5" />
                <path fill="none" stroke="#fff" strokeLinejoin="round" strokeMiterlimit="10" d="M18 20.5h-4L11.5 18v-4l2.5-2.5h4l2.5 2.5v4z" />
              </g>

            </Hexagon>
          </div>
          <div className={styles.hexagon}>
            <Hexagon>
              <text x="50%" y="40%">Sport</text>
              <g transform="translate(95, 150) scale(3)" strokeWidth="1">
                <path fill="none" stroke="#fff" strokeLinejoin="round" strokeMiterlimit="10" d="M6 22.5L1.5 18 6 13.5h5l1.5 4 6 1.5v3.5z" />
                <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M12.5 17.5l6-9h2l3-3-3-3h-4M8 13.5l-5-5M1.5 8.5H8L7.5 7l-7-1.5zM6 22.5l-1 1M18.5 22.5l1 1" />
                <path fill="none" stroke="#fff" strokeLinejoin="round" strokeMiterlimit="10" d="M8.5 18.5l-1 .5-1-.5v-1l1-.5 1 .5zM8.166 18.666L10 20.5" />
                <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M8.5 20.5h3" />
              </g>
            </Hexagon>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage
