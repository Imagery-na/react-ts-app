import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

interface AppState {
    myNote: string;
    notes: string[];
}


class App extends Component<{}, AppState> {
    state = {
        myNote: '',
        notes: [],
    }

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes = () => {
        axios.get('https://bonus.dev.thewhite.ru/api/news-service/articles/list')
            .then((response: any) => {
                console.log('get', response.data);
                this.setState({
                    notes: ['1', '2'],
                });
            })
            .catch((error: string) => console.log(error));
    };

    saveNote = () => {
        const newNotes: string[] = this.state.notes;
        newNotes.push(this.state.myNote);
        console.log(newNotes);
        this.setState({
            myNote: '',
            notes: newNotes,
        });
    }

    setNote = (text: string) => {
        this.setState({ myNote: text });
    }

    render() {
        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    FlyNote
                </p>
            </header>
            <main>
                <h1>
                    FLYNOTE NOTES
                </h1>
                <div
                    className="wrapper"
                >
                    <textarea
                        placeholder="Напишите заметку"
                        value={this.state.myNote}
                        onChange={(event) => this.setNote(event.target.value)}
                    />
                    <button
                        className="save-button"
                        onClick={this.saveNote}
                    >
                        Сохранить
                    </button>
                </div>
                <ul
                    className="notes"
                >
                    {
                        this.state.notes.map((note, index) => (
                            <li
                                key={index}
                            >
                                {note}
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