import styles from './Avatar.module.css'



interface AvatarProps {
    hasBorder?: boolean;
    src: string;
    alt?: string;
}


//desinstruturação js 
// voce pode passar valores para as props ao desinstruturar

export function Avatar({hasBorder = true, src, alt}: AvatarProps) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src} 
            alt={alt} 
        
        />
    )
} 