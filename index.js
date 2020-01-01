import React from 'react'
import { render } from 'react-dom'
import { Button } from 'semantic-ui-react'

import 'fomantic-ui-css/components/button.css'
import 'fomantic-ui-css/components/icon.css'

const App = () => {
    return <Button content="Foo" icon="book" />
}

render(<App />, document.getElementById('root'))