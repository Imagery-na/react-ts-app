import { useState } from 'react';
import './createNote.scss';

interface CreateNoteParams {
    note: string;
    saveNote(newNote: string): void;
}

export const CreateNote = (props: CreateNoteParams) => {
    const [ note, setNote ] = useState<string>(props.note);

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
                onClick={() => props.saveNote(note)}
                disabled={!note}
            >
                Сохранить
            </button>
        </div>
    );
};