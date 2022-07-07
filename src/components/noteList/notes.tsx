import deleteIcon from '../../images/close.svg';
import { Note } from '../../interfaces/note';
import './notes.scss';

interface CreateNoteParams {
    notes: Note[];
    deleteNote(index: number): void;
}

export const Notes = (props: CreateNoteParams) => {
    return (
        <ul
            className={'notes'}
        >
            {
                props.notes.map((note: Note, index: number) => (
                    <li
                        key={index}
                        className={'notes__item'}
                    >
                        <div>
                            <p>
                                {note.date}
                            </p>
                            <p> 
                                {note.text}
                            </p>
                        </div>
                        <button
                            onClick={() => props.deleteNote(index)}
                        >
                            <img src={deleteIcon} alt={'delete'} />
                        </button>
                    </li>
                ))
            }
        </ul>
    );
};
