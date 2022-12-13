import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'




interface AvatarProps  extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}


//desinstruturação js 
// voce pode passar valores para as props ao desinstruturar

export function Avatar({hasBorder = true, ...props}: AvatarProps) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props}
        
        />
    )
} 