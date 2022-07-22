import {createStore} from 'vuex';
export default createStore({
    state:{
        todos:[]
    },
    mutations:{
        add_todos(state,payload){
            state.todos.push(payload)
        },
        delete_todo(state,id){
            const index=state.todos.findIndex((todo) => todo.id==id);
            console.log(index);
            state.todos.splice(index,1)
        }
        ,
        updated_todo(state,todo){
            let index=state.todos.findIndex(t=> t.id==todo.id);
            if(index!=-1)
            {
                state.todos[index]=todo;
            }
        }
    },
    actions:{
        deletetodo({commit},id){
            commit('delete_todo',id)
        },
        updateTodo({commit},todo){
            commit('updated_todo',todo)

        }
    },
    getters: {
      
    },
    modules:{

    }
})