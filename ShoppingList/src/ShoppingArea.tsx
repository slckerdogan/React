import { shoppingType } from './apptypes';

type PropsType = { //propsla gelenlerin tipini tanımladık
  task: shoppingType;
  deleteTask(nameToDelete: string): void; 
};

function ShoppingArea({ task, deleteTask }: PropsType) {
  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
      <p>{task.shoppingItem}</p>
      <p>{task.shoppingItemNumber}</p>
      <p> <button onClick={() => deleteTask(task.shoppingItem)}>Sil</button></p> {/* listedeki ürüne göre silme yapacağımız için onu gönderiyoruz silme işlemi için parametre diye */}
    </div>
  )
}

export default ShoppingArea

