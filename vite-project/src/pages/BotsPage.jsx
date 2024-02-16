import BotsList from "../components/BotsList";
import Filter from "../components/Filter";
import { useState } from 'react';

const BotPage = () => {
    // Decided not to use context here since only the two direct children of this
    // component use this state. I don't want to overpopulate the global context.
    const [botTypeFilter, setBotTypeFilter] = useState('');

    return (
        <div>
            <h1>Robot Army:</h1>
            <Filter setBotTypeFilter={setBotTypeFilter} />
            <BotsList botTypeFilter={botTypeFilter} />
        </div>
    )
}

export default BotPage