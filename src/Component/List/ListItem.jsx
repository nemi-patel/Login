
import React from 'react'

function ListItem() {

    const myList = [
             { id: 1, name: 'Item 1', price: 10 },
             { id: 2, name: 'Item 2', price: 20 },
             { id: 3, name: 'Item 3', price: 15 },
           ];
        
           const jsonData = JSON.stringify(myList, null, 2); 
    
    return (
        <>
            <div>
                <pre>{jsonData}</pre>
            </div>
        </>
    )
}

export default ListItem
