import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import { NavLink } from 'react-router-dom'

export default function Navbar()  {
    return (
        <Paper square>
            <Tabs>
                <Tab label="Doorlist" component={NavLink} to="/" />
                <Tab label="Event (Test)" component={NavLink} to="/event" />
                <Tab label="Order" component={NavLink} to="/order" />
            </Tabs>
        </Paper>
    )
}
