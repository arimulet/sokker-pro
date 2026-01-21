import { SectionProps } from "./types"
import styles from './index.module.scss'

export const Section = ({ children, classNames }: SectionProps) => {
    return <div className={`${styles.section} ${classNames}`} >
        { children }
    </div >
}

export default Section