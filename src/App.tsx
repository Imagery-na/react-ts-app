import moment from 'moment';
import { Component } from 'react';
import notes from './data.json';
import { CreateNote } from './components/createNote/createNote';
import { Header } from './components/header/header';
import './styles/app.scss';
import { Note } from './interfaces/note';
import { Notes } from './components/noteList/notes';

interface AppState {
    notes: Note[];
}

class App extends Component<{}, AppState> {
    state = {
        notes: [],
    };

    componentDidMount() {
        this.setState({ notes });
    }

    saveNote = (newNote: string) => {
        const newNotes: Note[] = this.state.notes;
        newNotes.push({
            text: newNote,
            date: moment()
                .format('DD.MM.YYYY'),
        });
        this.setState({ notes: newNotes });
    };

    deleteNote = (index: number) => {
        const newNotes: Note[] = this.state.notes;
        newNotes.splice(index, 1);
        this.setState({ notes: newNotes });
    };

    render() {
        return (
            <div className={'app'}>
                <Header/>
                <main>
                    <div className={'container'}>
                        <h1 className={'app__title'}>
                            Заметки
                        </h1>
                        <CreateNote
                            saveNote={(newNote) => this.saveNote(newNote)}
                        />
                        <Notes
                            notes={this.state.notes}
                            deleteNote={(index) => this.deleteNote(index)}
                        />
                    </div>
                </main>
            </div>
        );
    }

}

export default App;
