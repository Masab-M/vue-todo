import {createStore} from 'vuex';
export default createStore({
    state:{
        todos:[],
        pages:0,
        limit:10,
        page:1
    },
    mutations:{
        add_todos(state,payload){
            state.todos.push(payload)
            state.pages=Math.ceil(state.todos.length/state.limit)
        },
        delete_todo(state,id){
            const index=state.todos.findIndex((todo) => todo.id==id);
            state.todos.splice(index,1)
            state.pages=Math.ceil(state.todos.length/state.limit)
        }
        ,
        updated_todo(state,todo){
            let index=state.todos.findIndex(t=> t.id==todo.id);
            if(index!=-1)
            {
                state.todos[index]=todo;
            }
        },
        jump_page(state,page){
            state.page=page
        },
        next_page(state){
        state.page++;
        },
        pre_page(state){
            state.page--;
        }
    },
    actions:{
        deletetodo({commit},id){
            commit('delete_todo',id)
        },
        updateTodo({commit},todo){
            commit('updated_todo',todo)
        },
        jumppage({commit},page){
            commit('jump_page',page)
        },
        nextpage({commit}){
            commit('next_page')
        },
        prepage({commit}){
            commit('pre_page')
        }
    },
    getters: {
      
    },
    modules:{

    }
})