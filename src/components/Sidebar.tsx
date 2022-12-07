
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}> 
            <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />


            <div className={styles.profile}>
                <Avatar src="https://github.com/rdg-404.png"  />
                <strong>Rodrigo Paiva</strong>
                <span>Front End Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}