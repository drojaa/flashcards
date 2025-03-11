// Component for Header 
import './Header.css'
import Nav from './Nav'

export default function Header(){
    return (
        <>
        <Nav/>
        <div id="header-container">
            <h1 id="header">Flashcard Generator</h1>
        </div>    
        </>
    )
}