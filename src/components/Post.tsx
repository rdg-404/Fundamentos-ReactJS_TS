import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { LineSegment } from 'phosphor-react';
import { useState } from 'react';


import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({author, publishedAt, content}){

    const [comments, setComments] = useState([
        "post muito bacana"
    ]);



    const [newCommentText, setNewCommentText] = useState('');

    //formatado que será mostrado a data
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    // calcula e mostra o tempo relativo ao que foi postado
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR, 
        addSuffix: true, //add às antes da data
    });


    function handleCreateNewComment(){

        event.preventDefault();  /// permanecer na msm pagina após o envio do form

        setComments([...comments, newCommentText]); //atualiza a lista de comentarios

        setNewCommentText('');
    }

    function handleNewCommentChange(){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value)
    }


    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Este campo é obrigatório!')
    }

    function deleteComment (commentToDelete) {
        const commentWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        })


        setComments(commentWithoutDeleteOne)//nova lista sem o comentario deletado
    }


    const isNewCommentEmpty = newCommentText.length === 0;

    
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(item => {
                    if(item.type === 'paragraph'){
                        return <p key={item.content}>{item.content}</p>;
                    }
                    else if (item.type === 'link'){
                        return <p key={item.content}><a href="#">{item.content}</a></p>
                    }   
                })}
            </div>


            <form onSubmit={handleCreateNewComment} className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name='comment'
                    placeholder='Deixe seu comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button 
                        type="submit" 
                        disabled={isNewCommentEmpty}>
                            Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {/* percorre o array e retorna para cada posicao um component */}
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment} //props enviadas para o component comment
                        />
                    )
                })}
            </div>
        </article>
    )
}