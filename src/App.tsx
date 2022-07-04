import moment from 'moment';
import { Component } from 'react';
import logo from './images/logo.svg';
import deleteIcon from './images/close.svg';
import notes from './data.json';
import { CreateNote } from './components/createNote';
import './styles/app.scss';

interface Note {
    text: string;
    date: string;
}

interface AppState {
    myNote: string;
    notes: Note[];
}

class App extends Component<{}, AppState> {
    state = {
        myNote: '',
        notes: [],
    };

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes = () => {
        this.setState({ notes });
    };

    saveNote = (newNote: string) => {
        const newNotes: Note[] = this.state.notes;
        newNotes.push({
            text: newNote,
            date: moment()
                .format('DD.MM.YYYY'),
        });
        this.setState({
            myNote: '',
            notes: newNotes,
        });
    };

    deleteNote = (index: number) => {
        const newNotes: Note[] = this.state.notes;
        newNotes.splice(index, 1);
        this.setState({ notes: newNotes });
    };

    render() {
        return (
            <div className="app">
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <p>
                        React example
                    </p>
                </header>
                <main>
                    <h1>
                        Заметки
                    </h1>
                    <CreateNote
                        note={this.state.myNote}
                        saveNote={(newNote) => this.saveNote(newNote)}
                    />
                    <ul
                        className="notes"
                    >
                        {
                            this.state.notes.map((note: Note, index: number) => (
                                <li
                                    key={index}
                                    className="notes__item"
                                >
                                    <span> 
                                        {note.text}
                                    </span>
                                    <span>
                                        {note.date}
                                    </span>
                                    <button
                                        onClick={() => this.deleteNote(index)}
                                    >
                                        <img src={deleteIcon} alt={'delete'} />
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </main>
            </div>
        );
    }

}

export default App;