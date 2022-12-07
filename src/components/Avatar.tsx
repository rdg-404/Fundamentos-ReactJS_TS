import styles from './Avatar.module.css'

//desinstruturação js 
// voce pode passar valores para as props ao desinstruturar

export function Avatar({hasBorder = true, src}) {
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src}  />
    )
}