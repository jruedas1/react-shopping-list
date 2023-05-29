import Input from "./Input";
function App(){
    const handleInput = (listItem) => {
        console.log(listItem);
    }

    return <div>
        <Input inputSubmitCallback={handleInput}/>
    </div>;
}

export default App;