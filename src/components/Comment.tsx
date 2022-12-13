import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment:  (comment: string) => void; // a funcao na retorna nada e recebe um parametro de string
}




export function Comment ({ content, onDeleteComment }: CommentProps){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content); //pegando function do post
    }



    //state pega o valor mais atual da variavel likeCount
    function handleLikeComment() {
        setLikeCount((state)=> {
            return state + 1;
        });

        // setLikeCount((state)=> {
        //     return state + 1;
        // });
    }

    return (
        <div className={styles.comment}>
           <Avatar 
                hasBorder={false} 
                src="https://github.com/diego3g.png"
                alt=""
           />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="09 de Novembro às 23:50:00" dateTime='2022-11-09 23:50:12'>Cerca de 1h atrás</time>
                       </div>

                       <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                       </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>

        
    )
}