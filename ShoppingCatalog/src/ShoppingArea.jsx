import React from 'react'

function ShoppingArea({task,deleteTask}) {
  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <p>{task.shoppingItem}</p>
        <p>{task.shoppingItemNumber}</p>
        <p><button onClick={() => deleteTask(task.shoppingItem)}>Sil</button></p>
    </div>
  )
}

export default ShoppingArea