import prompts from 'prompts';

const prompts = require('prompts');

const main = async () => {
    const nextTodo = async() => {
        return await prompts({
            type: 'text',
            name: 'value',
            message: 'What is your next todo item?',
            choices: [
                { title: "Show todo list", value: "S"},
                { title: "Add todo list", value: "A"},
                { title: "Delete a todo list item", value: "D"},
                { title: "Quit todo list", value: "Q"},
            ]
        });
    };

    var message = await nextTodo();
    console.log(message);
};

const addTodo = async() => {
    return await prompts({
        type: 'text',
        name: 'value',
        message: 'What is your todo item?',
    });
    // var message = await nextTodo();
    // console.log(message);

    const showTodo = () => {
        console.log("=============================");
        todoList.forEach( (x) => console.log(x.value));
        console.log("=============================");
    };

    var option = {};
    do{
        option = await showTodo();
        switch (option.value){
            case 'S':
                showTodo();
                break;
            case 'A':
                todoList.push(await addTodo());
                break;
        };

    } while(option.value !== 'Q');
    

};

main().catch(console.error);