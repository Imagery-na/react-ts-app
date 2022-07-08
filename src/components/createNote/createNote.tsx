import { useState } from 'react';
import './createNote.scss';

interface CreateNoteParams {
    saveNote(newNote: string): void;
}

export const CreateNote = (props: CreateNoteParams) => {
    const [ note, setNote ] = useState<string>('');

    const onSaveNote = () => {
        props.saveNote(note);
        setNote('');
    };

    return (
        <div
            className="create-note"
        >
            <textarea
                placeholder="Напишите заметку"
                value={note}
                onChange={(event) => setNote(event.target.value)}
            />
            <button
                className="primary-button"
                onClick={() => onSaveNote()}
                disabled={!note}
            >
                Сохранить
            </button>
        </div>
    );
};
