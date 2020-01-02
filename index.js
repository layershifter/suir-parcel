import React from 'react'
import {render} from 'react-dom'
import {Button} from 'semantic-ui-react'

import './semantic/dist/components/button.css'
// import './icon.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faBook} from '@fortawesome/free-solid-svg-icons'

library.add(faBook)

const App = () => {
    return <Button content="Foo" icon={<FontAwesomeIcon className="icon" icon="book"/>}/>
}

render(<App/>, document.getElementById('root'))