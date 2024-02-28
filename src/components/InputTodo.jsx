const style = {
    backgroundColor: '#c6e5d9',
    width: '400px',
    height: '30px',
    padding: '8px',
    margin: '8px',
    borderRadius: '8px'
}

export const InputTodo = (prpps) => {
    const {todoText, onChange, onClick, disabled} = prpps
    return (
        <div style={style}>
          <input disabled={disabled} placeholder="TODOを入力" value={todoText} onChange={onChange}/>
          <button disabled={disabled} onClick={onClick}>追加</button>
        </div>
    )
}